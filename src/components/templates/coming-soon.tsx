import Image from "next/image";
import {ArrowLeft} from "lucide-react";
import Link from "next/link";
import NavigationBar from "@/components/navigation-bar/navigation-bar";

export function ComingSoonBase(
    params: {
        href: string;
        image: string;
    }
) {
    const {href, image} = params;

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            {/* Content */}
            <div className="flex items-center justify-center bg-background px-6 py-16 lg:px-12">
                <div className="max-w-xl">
                    <h1 className="text-5xl font-bold tracking-tight text-on-surface sm:text-6xl lg:text-7xl font-display">
                        Coming Soon!
                    </h1>
                    <p className="mt-6 text-lg lg:text-xl leading-8 text-on-surface">
                        We&apos;re working hard to bring you something amazing.<br/>This page is currently under
                        construction, but great things are on the way.
                    </p>
                    <p className="mt-4 text-base text-on-surface-variant opacity-80">
                        Please be patient, as FXST is relatively new!
                    </p>

                    {/* Go Back Button */}
                    <div className="mt-10">
                        <Link
                            href={href}
                            className="inline-flex items-center gap-3 px-6 py-3 text-base font-semibold text-on-primary bg-primary rounded-lg hover:opacity-90 transition-colors shadow-sm hover:shadow-md"
                        >
                            <ArrowLeft className="h-5 w-5"/>
                            Go Back
                        </Link>
                    </div>
                </div>
            </div>

            {/* Image */}
            <div className="relative min-h-100 lg:min-h-screen">
                <Image
                    src={image}
                    alt="Coming soon"
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-br from-black/40 to-black/60"/>
            </div>
        </div>
    );
}

export default function ComingSoonTemplate(
    params: {
        href: string;
        image: string;
    }
) {
    return (
        <main className="flex flex-col min-h-screen">
            <div className="relative">
                <div className="absolute top-0 w-full z-50">
                    <NavigationBar/>
                </div>
                <ComingSoonBase
                    href={params.href}
                    image={params.image}
                />
            </div>
        </main>
    )
}