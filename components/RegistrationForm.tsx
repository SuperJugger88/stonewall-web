import { h } from "preact";
import { Handlers, type PageProps } from "$fresh/server.ts";

interface FormErrors {
    errorPassword: string | null;
    errorEmail: string | null;
}

export default function RegistrationForm(props: FormErrors) {
    return (
        <form action="" method="post">
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Enter your
                    email:</label>
                <input type="email" name="email" id="email"
                       className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                       required/>
                {props.errorEmail ?<div className="mb-4"><p style="color:red">{props.errorEmail}</p></div> : null}
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Enter your
                    password:</label>
                <input type="password" name="password" id="password"
                       className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                       required/>
                {props.errorPassword ?<div className="mb-4"><p style="color:red">{props.errorPassword}</p></div> : null}
            </div>
            <div className="flex items-center justify-between" style="float: right">
                <button type="submit"
                        className="px-10 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">
                        Registration
                </button>
            </div>
        </form>
    );
}