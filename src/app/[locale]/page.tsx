"use client";

import SimplePageTemplate from "@/templates/general-presentation";
import MainHero from "@/app/[locale]/main/hero";
import MainAboutSection from "@/app/[locale]/main/about";
import {ServicesDisplay} from "@/app/[locale]/services/services";
import MainMethods from "@/app/[locale]/main/methods";

export default function Home() {
    return <SimplePageTemplate hero={<MainHero/>}>
        <MainAboutSection/>
        <div className="mx-32 border-t border-outline my-8"></div>
        <MainMethods/>
        <div className="mx-32 border-t border-outline my-8"></div>
        <ServicesDisplay/>
    </SimplePageTemplate>
}
