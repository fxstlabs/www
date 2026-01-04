"use client";

import NavigationBar from "@/components/navigation-bar/navigation-bar";
import Footer from "@/components/footer/footer";
import ManufacturingHero from "@/app/services/manufacturing/hero";
import {ManufacturingServices} from "@/app/services/manufacturing/services";

export default function ManufacturingHome() {
    return (
        <main className="flex flex-col min-h-screen">
            <NavigationBar
                logoVariant="light"
                navVariant="light"
                enableScrollBackground={true}
            />

            <div className="relative">
                <ManufacturingHero />
            </div>

            <ManufacturingServices />
            <Footer />
        </main>
    );
}
