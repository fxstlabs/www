import ErrorPageTemplate from "@/templates/error/error-page";
import {useTranslations} from "use-intl";

export default function ComingSoonPageTemplate({href, image}: { href: string, image: string }) {
    const t = useTranslations('error.coming-soon')
    return (
        <ErrorPageTemplate
            content={{
                title: t('title'),
                description: t('description'),
                subtext: t('subtext'),
                buttonText: t('back-button'),
            }}
            href={href}
            image={image}
        />
    );
}