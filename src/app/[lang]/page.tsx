"use client";

import MainHero from "@/app/[lang]/main/hero";
import SimplePageTemplate from "@/components/templates/general-presentation";
import MainAboutSection from "@/app/[lang]/main/about";
import MainMethods from "@/app/[lang]/main/methods";
import React from "react";
import {ServicesDisplay} from "@/app/[lang]/services/services";

export default function Home() {
    return <SimplePageTemplate hero={<MainHero/>}>
        <MainAboutSection/>
        <div className="mx-32 border-t border-outline my-8"></div>
        <MainMethods/>
        <div className="mx-32 border-t border-outline my-8"></div>
        <ServicesDisplay/>
    </SimplePageTemplate>
}
