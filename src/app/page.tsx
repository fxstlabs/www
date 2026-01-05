"use client";

import MainHero from "@/app/main/hero";
import SimplePageTemplate from "@/components/templates/general-presentation";
import MainAboutSection from "@/app/main/about";
import MainServices from "@/app/main/services";
import React from "react";

export default function Home() {
    return <SimplePageTemplate hero={<MainHero/>}>
        <MainAboutSection/>
        <div className="mx-32 border-t border-persistent-foreground/20 my-8"></div>
        <MainServices/>
    </SimplePageTemplate>
}
