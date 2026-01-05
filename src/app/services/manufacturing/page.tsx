"use client";

import SimplePageTemplate from "@/components/templates/general-presentation";
import ManufacturingHero from "@/app/services/manufacturing/hero";
import {ManufacturingServices} from "@/app/services/manufacturing/services";

export default function Home() {
    return <SimplePageTemplate hero={<ManufacturingHero/>}>
        <ManufacturingServices/>
    </SimplePageTemplate>
}
