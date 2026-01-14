import HeroTemplate from "@/templates/hero-template";

export default function MainHero() {
    return (
        <HeroTemplate
            title="Our Services"
            description="We offer a comprehensive range of services to help you thrive in a rapidly evolving landscape."
            imageSrc="static/images/pages/services/main-cover.jpg"
            imageAlt="An arrangement of tools on white wooden boards."
            fullHeight={false}
        />
    );
}
