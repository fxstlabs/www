import HeroTemplate from "@/components/templates/hero-template";

export default function MainHero() {
    return (
        <HeroTemplate
            title="Your Ideas at Full Velocity."
            description="Powerful tools to remove friction from the daily lives of creators."
            imageSrc="/images/pages/main/main-cover.jpg"
            imageAlt="3D Printer in operation"
            primaryButton={{
                text: "Learn More",
                href: "#about"
            }}
            attribution={{
                photographer: "mhdkamilmp",
                photographerUrl: "https://unsplash.com/@itsjustamedia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                sourceUrl: "https://unsplash.com/photos/a-man-standing-on-the-side-of-a-road-at-night-O5T1rK1MLAY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            }}
            fullHeight={true}
            leftAligned={true}
            overlayOpacity={70}
        />
    );
}
