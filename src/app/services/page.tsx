"use client";

import NavigationBar from "@/components/navigation-bar/navigation-bar";
import Footer from "@/components/footer/footer";
import ServicesHero from "@/app/services/hero";
import {ServicesDisplay} from "@/app/services/services";

export default function ServicesHome() {
    return (
        <main className="flex flex-col min-h-screen">
            <NavigationBar
                logoVariant="light"
                navVariant="light"
                enableScrollBackground={true}
            />

            <div className="relative">
                <ServicesHero />
            </div>

            <ServicesDisplay />
            <Footer />
        </main>
    );
}