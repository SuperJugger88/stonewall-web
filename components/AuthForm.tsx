import { h } from "preact";
import { Handlers, type PageProps } from "$fresh/server.ts";

interface AuthFormProps {
    message: string | null;
}

export default function AuthForm(props: AuthFormProps) {
    return (
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
            {props.message ?<div className="mb-4"><p style="color:red">{props.message}</p></div> : null}
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
    );
}