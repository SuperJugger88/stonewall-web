import { Handlers, type PageProps } from "$fresh/server.ts";

interface Props {
    message: string | null;
}

export const handler:  Handlers<Props> = {
    async POST(req, ctx) {
        const form = await req.formData();
        const email = form.get("email")?.toString();
        const password = form.get("password")?.toString();


        const response = await fetch("http://caddy/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email ,
                password: password,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Login successful:", data);

            // Успешная авторизация
            window.location.href = '/dashboard';
        } else {
            return ctx.render({
                message: `неправильный логин или пароль`,
            });
        }

        function handleSuccessfulLogin(data) {
            const headers = new Headers();
            headers.set("location", "/");
            return new Response(null, {
                status: 303, // See Other
                headers,
            });
        }

    },

};

export default function Subscribe(props: PageProps<Props>) {
    const { message } = props.data;
    return (
            <div className="flex h-screen items-center justify-center">
                <div className="w-full max-w-md px-6 py-4 shadow-md rounded-md">
                    <form action="" method="post">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Enter your
                                email:</label>
                            <input type="email" name="email" id="email"
                                   className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                   required/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Enter your
                                password:</label>
                            <input type="password" name="password" id="password"
                                   className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                   required/>
                        </div>
                        <div className="flex items-center justify-between">
                            <button type="submit"
                                    className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">Login
                            </button>
                            <button type="submit"
                                    className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none">Reset
                                password
                            </button>
                        </div>
                    </form>
                    {message ? <p>{message}</p> : null}
                </div>
            </div>
    );
}