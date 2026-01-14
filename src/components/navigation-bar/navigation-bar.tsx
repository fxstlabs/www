"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import UserButton from "@/components/navigation-bar/user-button";
import {useTranslations} from "use-intl";

interface NavigationBarProps {
    enableScrollBackground?: boolean;
    logoOnSurface?: boolean;
}

export default function NavigationBar({
                                          enableScrollBackground = true,
                                          logoOnSurface = false,
                                      }: NavigationBarProps) {

    const t = useTranslations("navbar")

    const navItems = [
        {
            name: t('buttons.services'),
            href: "/services"
        },
        {
            name: t('buttons.contact'),
            href: "/contact"
        },
    ];

    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (enableScrollBackground) {
                setScrolled(scrollPosition > 50);
            }

            if (scrollPosition > lastScrollY && scrollPosition > 100) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            setLastScrollY(scrollPosition);
        };

        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => window.removeEventListener('scroll', handleScroll);
    }, [enableScrollBackground, lastScrollY]);

    const getColors = () => {
        if (logoOnSurface) {
            return {
                text: 'text-on-surface',
                bg: 'bg-transparent'
            };
        }

        if (scrolled) {
            return {
                text: 'text-on-surface',
                bg: 'bg-surface-container shadow-md'
            };
        }

        return {
            text: 'text-primary-fixed',
            bg: 'bg-transparent'
        };
    };

    const colors = getColors();

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${colors.bg} ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
            <nav className="mx-auto flex min-w-full items-center justify-between py-3 px-4 lg:px-8" aria-label="Global">

                {/* Logo */}
                <div className="flex lg:flex-1 items-center gap-x-2">
                    <Link href="/">
                        <span className={`text-2xl font-bold font-display transition-colors ${colors.text}`}>
                            FXST
                        </span>
                    </Link>
                </div>

                {/* Navigation Items */}
                <div className="flex flex-row items-center space-x-6">
                    <div className="flex gap-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-semibold leading-6 transition-all hover:opacity-70 ${colors.text}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <UserButton/>
                </div>
            </nav>
        </header>
    );
}