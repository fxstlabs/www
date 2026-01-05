import HeroTemplate from "@/components/templates/hero-template";

export default function TDPrintingHero() {
    return (
        <HeroTemplate
            title="3D Printing Services"
            description="Fast and precise additive manufacturing for rapid prototyping, producing complex geometries, low-volume custom parts, and lightweight components."
            imageSrc="/images/pages/services/manufacturing/3d-printing/main-cover.jpg"
            imageAlt="3D Printer in operation"
            primaryButton={{
                text: "Get Started",
                href: "#features"
            }}
            secondaryButton={{
                text: "Learn More",
                href: "https://docs.fxst.tech/learn/3d-printing"
            }}
            attribution={{
                photographer: "Albert Stoynov",
                photographerUrl: "https://unsplash.com/@albertstoynov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                sourceUrl: "https://unsplash.com/photos/close-up-of-a-3d-printer-head-in-operation-gUSN0c1Big8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            }}
            fullHeight={true} // or false for half-screen
        />
    );
}