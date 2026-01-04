import Link from "next/link";
import React from "react";
import {siGithub, siInstagram} from "simple-icons";
import Image from "next/image";

const footerColumns: ({
    title: string;
    items: ({ name: string; href: string })[]
})[] = [
    {
        title: "About us",
        items: [
            { name: "Who are we?", href: "about/us" },
            { name: "White-papers", href: "about/white-papers" },
        ]
    },
    {
        title: "Support",
        items: [
            { name: "Help Center", href: "support/help" },
            { name: "Status", href: "support/status" },
        ]
    },
    {
        title: "Legal",
        items: [
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
        ]
    }
];

const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/fxst.tech", icon: siInstagram },
    { name: "GitHub", href: "https://github.com/fxstlabs", icon: siGithub },
];

export default function Footer() {
    return (
        <footer className="bg-neutral-800 text-white py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Columns */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
                    {footerColumns.map((column) => (
                        <div key={column.title}>
                            <h3 className="text-sm font-semibold leading-6 text-white mb-4">{column.title}</h3>
                            <ul className="space-y-3">
                                {column.items.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-neutral-800 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* CRN Text */}
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} FXST. All rights reserved.
                    </p>

                    {/* Socials */}
                    <div className="flex space-x-6 items-center">
                        {socialLinks.map((item) => (
                            <Link key={item.name} href={item.href} className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">{item.name}</span>
                                <img alt={`${item.name} logo`} height="32" width="32" src={`https://cdn.simpleicons.org/${item.icon.slug}/FFFFFF`} />
                            </Link>
                        ))}
                        <Link className='text-sm text-neutral-400' href={"https://linkedin.com/company/fxst"}> LinkedIn </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
