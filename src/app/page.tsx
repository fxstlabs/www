"use client";

import NavigationBar from "@/components/navigation-bar/navigation-bar";
import Footer from "@/components/footer/footer";
import MainHero from "@/app/main/hero";
import MainAboutSection from "@/app/main/about";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen">
            <NavigationBar
                logoVariant="light"
                navVariant="light"
                enableScrollBackground={true}
            />

            <div className="relative">
                <MainHero/>
            </div>

            <MainAboutSection/>
            {/* <MainServices /> */}
            <Footer/>
        </main>
    );
}
