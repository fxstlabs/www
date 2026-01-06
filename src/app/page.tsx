"use client";

import MainHero from "@/app/main/hero";
import SimplePageTemplate from "@/components/templates/general-presentation";
import MainAboutSection from "@/app/main/about";
import MainMethods from "@/app/main/methods";
import React from "react";
import MainServices from "@/app/main/services";

export default function Home() {
    return <SimplePageTemplate hero={<MainHero/>}>
        <MainAboutSection/>
        <div className="mx-32 border-t border-outline my-8"></div>
        <MainMethods/>
        <div className="mx-32 border-t border-outline my-8"></div>
        <MainServices/>
    </SimplePageTemplate>
}
