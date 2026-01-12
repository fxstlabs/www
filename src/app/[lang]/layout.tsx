import type {Metadata} from "next";
import "../globals.css";
import {fontDisplayDefault, fontMonospaceDefault, fontSansDefault, fontSerifDefault} from "@/resources/fonts";
import React from "react";

export const metadata: Metadata = {
    title: "FXST",
    description: "The Official FXST Website",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${fontSansDefault.className} ${fontDisplayDefault.variable} ${fontSerifDefault.variable} ${fontMonospaceDefault.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
