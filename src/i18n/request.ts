import {getRequestConfig} from "next-intl/server";
import {hasLocale} from 'next-intl';
import {routing} from "@/i18n/routing";
import {fxstCdn, isCdnUp} from "@/resources/cdn";
import {cache} from "react";

const getDictionary = cache(async (locale: string) => {
    if (!await isCdnUp()) {
        return (await import('@/resources/en.json')).default
    }

    const url = fxstCdn(`/static/dictionaries/${locale}.json`)
    const res = await fetch(url, {
        next: {
            tags: ['translations'],
            revalidate: 31536000 // 1 year
        }
    });

    return res.json();
})

export default getRequestConfig(async ({requestLocale}) => {
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    const message = await getDictionary(locale);

    console.debug(message);

    return {
        locale,
        messages: message
    }
})