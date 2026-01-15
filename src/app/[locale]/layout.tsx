import type {Metadata} from "next";
import "../globals.css";
import {fontDisplayDefault, fontMonospaceDefault, fontSansDefault, fontSerifDefault} from "@/resources/fonts";
import React from "react";
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {routing} from "@/i18n/routing";
import {notFound} from "next/dist/client/components/not-found";
import Footer from "@/components/footer/footer";
import NavigationBar from "@/components/navigation-bar/navigation-bar";
import CDNDownPopup from "@/components/popups/cdn-down";

export const metadata: Metadata = {
    title: "FXST",
    description: "The Official FXST Website",
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

async function Layout({children, params}: Readonly<{
    children: React.ReactNode,
    params: { locale: string }
}>) {
    const {locale} = params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return children;
}

export default async function RootLayout({
                                             children,
                                             params
                                         }: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>
}>) {
    const {locale} = await params;

    return (
        <html lang={locale}>
        <body
            className={`${fontSansDefault.className} ${fontDisplayDefault.variable} ${fontSerifDefault.variable} ${fontMonospaceDefault.variable} antialiased`}>
        <NextIntlClientProvider>
            <Layout params={{locale}}>
                <NavigationBar
                    enableScrollBackground={true}/>
                {children}
                <Footer/>
                <CDNDownPopup/>
            </Layout>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
