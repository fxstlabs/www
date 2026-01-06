import Image from "next/image";
import Link from "next/link";

interface HeroProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    primaryButton?: {
        text: string;
        href: string;
    };
    secondaryButton?: {
        text: string;
        href: string;
    };
    attribution?: {
        photographer: string;
        photographerUrl: string;
        sourceUrl: string;
        sourceName?: string;
    };
    fullHeight?: boolean;
    leftAligned?: boolean;
    overlayOpacity?: number; // 0-100, controls darkness of overlay
}

export default function HeroTemplate({
                                         title,
                                         description,
                                         imageSrc,
                                         imageAlt,
                                         primaryButton,
                                         secondaryButton,
                                         attribution,
                                         fullHeight = true,
                                         leftAligned = false,
                                         overlayOpacity = 80,
                                     }: HeroProps) {
    // Clamp opacity between 0-100 for safety
    const opacity = Math.min(100, Math.max(0, overlayOpacity));

    return (
        <div
            className={`relative isolate grow flex items-center ${
                leftAligned ? "justify-start" : "justify-center"
            } overflow-hidden py-24 sm:py-32 ${
                fullHeight ? "min-h-screen" : "min-h-[50vh]"
            }`}
        >
            {/* Background Image */}
            <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                priority
            />

            {/* Dark Overlay with configurable opacity */}
            <div
                className="absolute inset-0 -z-10 bg-black"
                style={{opacity: opacity / 100}}
            />

            <div className={`max-w-7xl px-6 lg:px-8 ${leftAligned ? "text-left mx-16" : "mx-auto text-center"}`}>
                <div className={`max-w-2xl ${leftAligned ? "" : "mx-auto"}`}>
                    <h1 className="text-4xl font-bold tracking-tight text-primary-fixed sm:text-6xl font-display">
                        {title}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-secondary-fixed">
                        {description}
                    </p>
                    {(primaryButton || secondaryButton) && (
                        <div className={`mt-10 flex items-center gap-x-6 ${
                            leftAligned ? "justify-start" : "justify-center"
                        }`}>
                            {primaryButton && (
                                <Link
                                    href={primaryButton.href}
                                    className="rounded-md bg-on-secondary-fixed px-3.5 py-2.5 text-sm font-semibold text-secondary-fixed shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                    {primaryButton.text}
                                </Link>
                            )}
                            {secondaryButton && (
                                <Link href={secondaryButton.href}
                                      className="text-sm font-semibold leading-6 text-secondary-fixed">
                                    <div className='flex flex-row'>
                                        <p> {secondaryButton.text} </p>
                                    </div>
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Attribution */}
            {attribution && (
                <div className="absolute bottom-4 left-4 text-xs text-gray-400">
                    Photo by{" "}
                    <a
                        href={attribution.photographerUrl}
                        className="underline hover:text-gray-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {attribution.photographer}
                    </a>{" "}
                    on{" "}
                    <a
                        href={attribution.sourceUrl}
                        className="underline hover:text-gray-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {attribution.sourceName || "Unsplash"}
                    </a>
                </div>
            )}
        </div>
    );
}