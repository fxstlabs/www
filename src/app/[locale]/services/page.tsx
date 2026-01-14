"use client";

import SimplePageTemplate from "@/templates/general-presentation";
import ServicesHero from "@/app/[locale]/services/hero";
import {ServicesDisplay} from "@/app/[locale]/services/services";

export default function Home() {
    return <SimplePageTemplate hero={<ServicesHero/>}>
        <ServicesDisplay/>
    </SimplePageTemplate>
}
