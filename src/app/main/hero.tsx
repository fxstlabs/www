import Image from "next/image";
import {LinkButton, LinkText} from "@/components/buttons";

export default function MainHero() {
    return (
        <div className="relative isolate grow flex items-center justify-left min-h-screen overflow-hidden py-24 sm:py-32">

            {/* Background Image */}
            <Image
                src="/images/pages/main/main-hero-image.jpg"
                alt="A cat and a human recreating 'The Creation'"
                fill
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                priority
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 -z-10 bg-black/50" />

            <div className="mx-32 max-w-7xl px-6 lg:px-8 text-left">
                <div className="mx-auto max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
                        A Platform for Creators and Curious Minds
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Powerful, reliable tools to help bring your ideas to life.
                    </p>
                    <div className="mt-10 flex items-left justify-left gap-x-6">
                        <LinkText text={"Learn More"} href={"#features"}/>
                    </div>
                </div>
            </div>

            {/* Attribution */}
            <div className="absolute bottom-4 left-4 text-xs text-gray-400">
                Photo by <a href="https://unsplash.com/@albertstoynov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Humberto Arellano</a> on <a href="https://unsplash.com/photos/close-up-of-a-3d-printer-head-in-operation-gUSN0c1Big8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
        </div>
    );
}
