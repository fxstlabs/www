"use client";

import SimplePageTemplate from "@/templates/general-presentation";
import TDPrintingHero from "@/app/[locale]/services/manufacturing/3d-printing/hero";
import TDPrintingFeatures from "@/app/[locale]/services/manufacturing/3d-printing/features";

export default function Home() {
    return <SimplePageTemplate hero={<TDPrintingHero/>}>
        <TDPrintingFeatures/>
    </SimplePageTemplate>
}
