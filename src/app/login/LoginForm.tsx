"use client";

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        const response = await fetch('/api/v1/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
            credentials: 'include',
        });

        if (response.ok) {
            await router.push('/profile');
        } else {
            const errorMessage = await response.text();
            setError(errorMessage);
        }
    }

    return (
        <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: 'NCL Robowapix' }}>welcome</h1> {/* Применяем шрифт к заголовку */}
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-2 mb-4 border border-gray-300 rounded text-gray-800"
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full p-2 mb-4 border border-gray-300 rounded text-gray-800"
            />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200" style={{ fontFamily: 'NCL Robowapix' }}>sign in</button> {/* Применяем шрифт к кнопке */}
            {error && <div className="mt-4 text-red-500">{error}</div>}
        </form>
    );
}
