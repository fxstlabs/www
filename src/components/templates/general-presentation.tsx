"use client";

import NavigationBar from "@/components/navigation-bar/navigation-bar";
import Footer from "@/components/footer/footer";
import {ReactNode} from "react";

interface PageLayoutProps {
    hero: ReactNode;
    children: ReactNode;
}

export default function SimplePageTemplate({hero, children}: PageLayoutProps) {
    return (
        <main className="flex flex-col min-h-screen">
            <NavigationBar
                logoVariant="light"
                navVariant="light"
                enableScrollBackground={true}
            />

            <div className="relative">
                {hero}
            </div>

            {children}

            <Footer/>
        </main>
    );
}