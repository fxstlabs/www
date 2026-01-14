import HeroTemplate from "@/templates/hero-template";
import {useTranslations} from "use-intl";

export default function TDPrintingHero() {
    const t = useTranslations("services.manufacturing.3d-printing.hero")
    return (
        <HeroTemplate
            title={t("title")}
            description={t("subtext")}
            imageSrc="static/images/pages/services/manufacturing/3d-printing/main-cover.jpg"
            imageAlt={t("image-alt")}
            primaryButton={{
                text: t("primary-button"),
                href: "#features"
            }}
            secondaryButton={{
                text: t("secondary-button"),
                href: "https://docs.fxst.tech/learn/3d-printing"
            }}
            attribution={{
                photographer: "Albert Stoynov",
                photographerUrl: "https://unsplash.com/@albertstoynov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                sourceUrl: "https://unsplash.com/photos/close-up-of-a-3d-printer-head-in-operation-gUSN0c1Big8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            }}
            overlayOpacity={65}
            fullHeight={true} // or false for half-screen
        />
    );
}