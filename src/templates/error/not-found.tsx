'use client'
import ErrorPageTemplate from "@/templates/error/error-page";
import {useTranslations} from "use-intl";

export default function NotFoundPageTemplate() {
    const t = useTranslations("error.not-found")
    return (
        <ErrorPageTemplate
            content={{
                title: t('title'),
                description: t('description'),
                subtext: t('subtext'),
                buttonText: t('back-button'),
            }}
            href="/"
            image="static/images/pages/not-found/main-cover.jpg"
            logoOnSurface={true}
        />
    );
}
