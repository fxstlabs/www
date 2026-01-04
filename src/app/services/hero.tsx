import Image from "next/image";

export default function ServicesHero() {
    return (
        <div className="relative isolate flex items-center justify-center overflow-hidden py-24 sm:py-32">

            {/* Background Image */}
            <Image
                src="/images/pages/services/main-cover.jpg"
                alt="Professional manufacturing services"
                fill
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                priority
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 -z-10 bg-black/70" />

            {/* Hero Content */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <div className="mx-auto max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
                        Our Services
                    </h1>
                </div>
            </div>

            {/* Attribution */}
            <div className="absolute bottom-4 left-4 text-xs text-gray-400">
                Photo by <a href="https://unsplash.com/@albertstoynov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">Albert Stoynov</a> on <a href="https://unsplash.com/photos/close-up-of-a-3d-printer-head-in-operation-gUSN0c1Big8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">Unsplash</a>
            </div>
        </div>
    );
}