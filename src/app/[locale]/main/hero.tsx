import HeroTemplate from "@/templates/hero-template";
import {useTranslations} from "use-intl";

export default function MainHero() {
    const t = useTranslations('main')

    return (
        <HeroTemplate
            title={t('hero.title')}
            description={t('hero.description')}
            imageSrc="static/images/pages/main/main-cover.jpg"
            imageAlt="3D Printer in operation"
            primaryButton={{
                text: t('hero.cta'),
                href: "#about"
            }}
            attribution={{
                photographer: "mhdkamilmp",
                photographerUrl: "https://unsplash.com/@itsjustamedia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                sourceUrl: "https://unsplash.com/photos/a-man-standing-on-the-side-of-a-road-at-night-O5T1rK1MLAY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            }}
            fullHeight={true}
            leftAligned={true}
            overlayOpacity={60}
        />
    );
}
