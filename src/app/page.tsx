"use client";

import NavigationBar from "@/components/navigation-bar/navigation-bar";
import Footer from "@/components/footer/footer";
import MainHero from "@/app/main/hero";
import Services from "@/app/main/services";
import AboutUs from "@/app/main/about";

export default function Home() {
    return(
        <main className="flex flex-col min-h-screen">
            <div className="relative">
                <div className="absolute top-0 w-full z-50">
                    <NavigationBar />
                </div>
                <MainHero/>
            </div>
            <AboutUs/>
            <Services/>
            <Footer/>
        </main>
    )
}
