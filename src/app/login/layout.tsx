import "./styles.css";
import React from "react";

export const metadata = {
    title: "Login",
    description: "User login page",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title>{metadata.title}</title>
        </head>
        <body className="antialiased">
        {children}
        </body>
        </html>
    );
}
