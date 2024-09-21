import { h } from "preact";
import { Handlers, type PageProps } from "$fresh/server.ts";


export default function SendRepitEmailFrom() {
    return (
        <div className="container">
            <h1>Confirm Your Email</h1>
            <p>Please check your email for a confirmation message.</p>
            <form id="confirmationForm">
                <button type="submit"
                        className="px-10 py-2 text-white bg-orange-500 rounded-md hover:bg-blue-600 focus:outline-none">
                    Repit email message
                </button>
            </form>
        </div>
    );
}