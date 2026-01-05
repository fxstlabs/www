"use client";

import SimplePageTemplate from "@/components/templates/general-presentation";
import TDPrintingHero from "@/app/services/manufacturing/3d-printing/hero";
import TDPrintingFeatures from "@/app/services/manufacturing/3d-printing/features";

export default function Home() {
    return <SimplePageTemplate hero={<TDPrintingHero/>}>
        <TDPrintingFeatures/>
    </SimplePageTemplate>
}
