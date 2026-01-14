"use client";

import {ReactNode} from "react";

interface PageLayoutProps {
    hero: ReactNode;
    children: ReactNode;
}

export default function SimplePageTemplate({hero, children}: PageLayoutProps) {
    return (
        <main className="flex flex-col min-h-screen">
            <div className="relative">
                {hero}
            </div>

            {children}
        </main>
    );
}