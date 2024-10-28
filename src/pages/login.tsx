import {FormEvent, useState} from 'react'
import { useRouter } from 'next/router'
import Error from 'next/error'


export default function LoginPage() {
    const router = useRouter()
    const [error, setError] = useState<string | null>(null)

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await fetch('/api/v1/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })

        try {
            if (response.ok) {
                await router.push('/profile')
                const cookie = response.headers.getSetCookie()[0]
                localStorage.setItem("auth_cookie", cookie)
            } else {
                const errorMessage = await response.text()
                setError(errorMessage)
            }
        } catch {
            <Error statusCode={502} title={'Сервис временно недоступен, попробйте позже.'} ></Error>
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
            {error && (
                <div style={{ color: 'red', marginTop: '10px' }}>
                    {error}
                </div>
            )}
        </form>
    )
}