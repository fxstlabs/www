"use client";

import NavigationBar from "@/components/navigation-bar/navigation-bar";
import Footer from "@/components/footer/footer";
import TDPrintingHero from "@/app/services/manufacturing/3d-printing/hero";
import TDPrintingFeatures from "@/app/services/manufacturing/3d-printing/features";

export default function TDPrintingHome() {
    return (
        <main className="flex flex-col min-h-screen">
            <NavigationBar
                logoVariant="light"
                navVariant="light"
                enableScrollBackground={true}
            />

            <div className="relative">
                <TDPrintingHero />
            </div>

            <TDPrintingFeatures />

            <Footer />
        </main>
    );
}
