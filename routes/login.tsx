import AuthForm from '../components/AuthForm.tsx';
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

interface Props {
    message: string | null;
}

export const handler:  Handlers<Props> = {
    async GET(req, ctx) {
        return await ctx.render({
            message: null,
        });
    },
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
            // const data = await response.json();
            return Response.redirect("http://localhost/", 302);
        } else {
            return ctx.render({
                message: `неправильный логин или пароль`,
            });
        }
    },

};

export default function Login(props: PageProps<Props>) {
    const { message } = props.data;

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="w-full max-w-md px-6 py-4 shadow-md rounded-md">
                <AuthForm message={message} />
            </div>
        </div>
    );
}