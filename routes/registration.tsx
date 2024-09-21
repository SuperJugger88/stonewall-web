import RegistrationForm  from "../components/RegistrationForm.tsx";
import { validatePassword } from "../utils/passwordValidator.tsx";
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

interface Props {
    errorPassword: string | null;
    errorEmail: string | null;
}

export const handler:  Handlers<Props> = {
    async GET(req, ctx) {
        return await ctx.render({
            errorPassword: null,
            errorEmail: null,
        });
    },
    async POST(req, ctx) {
        const form = await req.formData();
        const email = form.get("email")?.toString();
        const password = form.get("password")?.toString();

        const passwordError = validatePassword(password);
        if (passwordError) {
            return await ctx.render({
                errorPassword: passwordError,
            });
        }

        const response = await fetch("http://caddy/api/v1/registration", {
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

            const sendMailResponse = await fetch("http://caddy/api/v1/sendMail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: data.email ,
                }),
            });
            if (sendMailResponse.ok) {
                return Response.redirect("http://localhost/", 302);
            }else{
                return  ctx.render({
                    errorEmail: sendMailResponse.status,
                });
            }

        } else {
            if (response.status === 409) {
                return  ctx.render({
                    errorEmail: "User with this email already exists",
                });
            }
        }
    },

};

export default function Registration(props: PageProps<Props>) {
    const { errorPassword } = props.data;
    const { errorEmail } = props.data;

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="w-full max-w-md px-6 py-4 shadow-md rounded-md">
                <RegistrationForm errorPassword={errorPassword} errorEmail={errorEmail} />
            </div>
        </div>
    );
}