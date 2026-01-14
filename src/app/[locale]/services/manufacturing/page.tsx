"use client";

import SimplePageTemplate from "@/templates/general-presentation";
import ManufacturingHero from "@/app/[locale]/services/manufacturing/hero";
import {ManufacturingServices} from "@/app/[locale]/services/manufacturing/services";

export default function Home() {
    return <SimplePageTemplate hero={<ManufacturingHero/>}>
        <ManufacturingServices/>
    </SimplePageTemplate>
}
