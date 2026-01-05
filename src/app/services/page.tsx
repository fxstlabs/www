"use client";

import SimplePageTemplate from "@/components/templates/general-presentation";
import ServicesHero from "@/app/services/hero";
import {ServicesDisplay} from "@/app/services/services";

export default function Home() {
    return <SimplePageTemplate hero={<ServicesHero/>}>
        <ServicesDisplay/>
    </SimplePageTemplate>
}
