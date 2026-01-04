import Image from "next/image";
import {LinkButton, LinkText} from "@/components/buttons";

export default function TDPrintingHero() {
    return (
        <div className="relative isolate grow flex items-center justify-center min-h-screen overflow-hidden py-24 sm:py-32">

            {/* Background Image */}
            <Image
                src="/services/3d-printing/bambu-lab-nozzle.jpg"
                alt="3D Printer in operation"
                fill
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                priority
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 -z-10 bg-black/60" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <div className="mx-auto max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
                        3D Printing Services
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Fast and precise additive manufacturing for rapid prototyping, producing complex geometries, low-volume custom parts, and lightweight components.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <LinkButton text={"Get Started"} href={"#features"}/>
                        <LinkText text={"Learn More"} href={"https://docs.fxst.tech/learn/3d-printing"}/>
                    </div>
                </div>
            </div>

            {/* Attribution */}
            <div className="absolute bottom-4 left-4 text-xs text-gray-400">
                Photo by <a href="https://unsplash.com/@albertstoynov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">Albert Stoynov</a> on <a href="https://unsplash.com/photos/close-up-of-a-3d-printer-head-in-operation-gUSN0c1Big8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">Unsplash</a>
            </div>
        </div>
    );
}