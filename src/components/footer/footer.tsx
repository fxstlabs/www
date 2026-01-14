'use client'

import Link from "next/link";
import React from "react";
import {siGithub, siInstagram} from "simple-icons";
import {useTranslations} from "use-intl";

const socialLinks = [
    {name: "Instagram", href: "https://instagram.com/fxst.tech", icon: siInstagram},
    {name: "GitHub", href: "https://github.com/fxstlabs", icon: siGithub},
];

export default function Footer() {
    const t = useTranslations("footer");

    const footerColumns: ({
        title: string;
        items: ({ name: string; href: string })[]
    })[] = [
        {
            title: t("about-us.title"),
            items: [
                {name: t("about-us.who-are-we"), href: "about/us"},
            ]
        },
        {
            title: t("support.title"),
            items: [
                {name: t("support.help-center"), href: "support/help"},
                {name: t("support.status"), href: "support/status"},
            ]
        },
        {
            title: t("legal.title"),
            items: [
                {name: t("legal.privacy-policy"), href: "legal/privacy-policy"},
                {name: t("legal.terms-of-service"), href: "legal/terms-of-service"},
            ]
        }
    ];
    return (
        <footer className="bg-surface-container text-on-surface py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Columns */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
                    {footerColumns.map((column) => (
                        <div key={column.title}>
                            <h3 className="text-sm font-semibold leading-6 mb-4">{column.title}</h3>
                            <ul className="space-y-3">
                                {column.items.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href}
                                              className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-outline-variant/30 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* CRN Text */}
                    <p className="text-sm opacity-70">
                        &copy; {new Date().getFullYear()} {t("copyright-notice")}
                    </p>

                    {/* Socials */}
                    <div className="flex space-x-6 items-center">
                        {socialLinks.map((item) => (
                            <Link key={item.name} href={item.href}
                                  className="opacity-70 hover:opacity-100 transition-opacity">
                                <span className="sr-only">{item.name}</span>
                                <img alt={`${item.name} logo`} height={32} width={32}
                                     src={`https://cdn.simpleicons.org/${item.icon.slug}/79716b`}/>
                            </Link>
                        ))}
                        <Link className='text-sm text-on-surface opacity-70 hover:opacity-100 transition-opacity'
                              href={"https://linkedin.com/company/fxst"}> LinkedIn </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
