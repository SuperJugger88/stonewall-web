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
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        </head>
        <body className="antialiased">
        {children}
        </body>
        </html>
    );
}
