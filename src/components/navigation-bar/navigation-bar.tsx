import FxstLogo from "@/components/resources/logo";
import Link from "next/link";
import UserButton from "@/components/navigation-bar/user-button";
import Image from "next/image";

const navItems = [
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
];

export default function NavigationBar() {
    return (
        <header className="bg-transparent text-white">
            <nav className="mx-auto flex min-w-full items-center justify-between p-6 lg:px-8" aria-label="Global">

                {/* Name */}
                <div className="flex lg:flex-1 items-center gap-x-3">
                    <Link href="/">
                        <span className="text-4xl font-bold font-display">FXST</span>
                    </Link>
                </div>

                <div></div>

                <div className="flex flex-row items-center space-x-8">
                    {/* Navigation Items */}
                    <div className="flex gap-x-12">
                        {navItems.map((item) => (
                            <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 hover:text-gray-300">
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* User Button */}
                    <UserButton/>
                </div>
            </nav>
        </header>
    );
}
