"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import UserButton from "@/components/navigation-bar/user-button";

const navItems = [
    {name: "Services", href: "/services"},
    {name: "Products", href: "/products"},
    {name: "Contact", href: "/contact"},
];

interface NavigationBarProps {
    logoVariant?: 'light' | 'dark';
    navVariant?: 'light' | 'dark';
    enableScrollBackground?: boolean;
}

export default function NavigationBar({
                                          logoVariant = 'light',
                                          navVariant = 'light',
                                          enableScrollBackground = true
                                      }: NavigationBarProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (!enableScrollBackground) return;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // Start showing background after 50px of scroll
            setScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [enableScrollBackground]);

    const logoColor = logoVariant === 'light' ? 'text-stone-100' : 'text-stone-800';
    const navTextColor = navVariant === 'light' ? 'text-stone-100' : 'text-stone-800';
    const navHoverColor = navVariant === 'light' ? 'hover:text-stone-300' : 'hover:text-stone-700';

    const headerClasses = scrolled
        ? 'fixed top-0 bg-stone-800 backdrop-blur-md shadow-lg'
        : 'absolute top-0 bg-transparent';

    return (
        <header className={`w-full z-50 transition-all duration-300 ${headerClasses}`}>
            <nav className="mx-auto flex min-w-full items-center justify-between p-4 lg:px-8" aria-label="Global">

                {/* Logo */}
                <div className="flex lg:flex-1 items-center gap-x-3">
                    <Link href="/">
                        <span className={`text-3xl font-bold font-display transition-colors ${logoColor}`}>
                            FXST
                        </span>
                    </Link>
                </div>

                <div></div>

                {/* Navigation Items */}
                <div className="flex flex-row items-center space-x-8">
                    <div className="flex gap-x-12">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-semibold leading-6 transition-colors ${navTextColor} ${navHoverColor}`}
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
