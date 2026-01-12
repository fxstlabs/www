import HeroTemplate from "@/components/templates/hero-template";

export default function MainHero() {
    return (
        <HeroTemplate
            title="Professional Manufacturing Services"
            description="From concept to production. We offer comprehensive manufacturing solutions tailored to your project needs."
            imageSrc="/images/pages/services/manufacturing/main-cover.jpg"
            imageAlt="3D Printer in operation"
            attribution={{
                photographer: "Albert Stoynov",
                photographerUrl: "https://unsplash.com/@albertstoynov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                sourceUrl: "https://unsplash.com/photos/close-up-of-a-3d-printer-head-in-operation-gUSN0c1Big8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            }}
            fullHeight={false}
        />
    );
}
