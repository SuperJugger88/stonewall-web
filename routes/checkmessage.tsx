import RegistrationForm  from "../components/SendRepeatEmailFrom.tsx";
import { validatePassword } from "../utils/passwordValidator.tsx";
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import SendRepeatEmailFrom from "../components/SendRepeatEmailFrom.tsx";


export const handler:  Handlers<Props> = {

};

export default function Checkmessage() {

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="w-full max-w-md px-6 py-4 shadow-md rounded-md">
                <SendRepeatEmailFrom />
            </div>
        </div>
    );
}