"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import UserButton from "@/components/navigation-bar/user-button";

const navItems = [
    {name: "Services", href: "/services"},
    {name: "Contact", href: "/contact"},
];

interface NavigationBarProps {
    enableScrollBackground?: boolean;
    forceTheme?: 'light' | 'dark';
}

export default function NavigationBar({
                                          enableScrollBackground = true,
                                          forceTheme
                                      }: NavigationBarProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (!enableScrollBackground) return;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [enableScrollBackground]);

    const getColors = () => {
        if (forceTheme === 'dark') {
            return {
                text: 'text-always-white',
                bg: 'bg-transparent'
            };
        }
        if (forceTheme === 'light') {
            return {
                text: 'text-persistent-foreground',
                bg: 'bg-persistent-background backdrop-blur-md shadow-lg'
            };
        }

        if (scrolled) {
            return {
                text: 'text-persistent-foreground',
                bg: 'bg-persistent-background backdrop-blur-md shadow-lg'
            };
        }

        return {
            text: 'text-always-light',
            bg: 'bg-transparent'
        };
    };

    const colors = getColors();

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${colors.bg}`}>
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