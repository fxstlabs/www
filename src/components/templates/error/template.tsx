import Image from "next/image";
import {ArrowLeft} from "lucide-react";
import Link from "next/link";
import NavigationBar from "@/components/navigation-bar/navigation-bar";
import {Button} from "@/components/units/buttons";

interface ErrorPageContent {
    title: string;
    description: string;
    subtext: string;
    buttonText?: string;
}

interface ErrorPageTemplateProps {
    content: ErrorPageContent;
    href: string;
    image: string;
    logoOnSurface?: boolean;
}

export function ErrorPageBase({
                                  content,
                                  href,
                                  image,
                              }: Omit<ErrorPageTemplateProps, "logoOnSurface">) {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            {/* Content */}
            <div className="flex items-center justify-center bg-background px-6 py-16 lg:px-12">
                <div className="max-w-xl">
                    <h1 className="text-5xl font-bold tracking-tight text-on-surface sm:text-6xl lg:text-7xl font-display">
                        {content.title}
                    </h1>
                    <p className="mt-6 text-lg lg:text-xl leading-8 text-on-surface">
                        {content.description}
                    </p>
                    <p className="mt-4 text-base text-on-surface-variant opacity-80">
                        {content.subtext}
                    </p>

                    {/* Go Back Button */}
                    <div className="mt-10">
                        <Link href={href}>
                            <Button>
                                <ArrowLeft className="h-5 w-5"/>
                                {content.buttonText || "Go Back"}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Image */}
            <div className="relative min-h-100 lg:min-h-screen">
                <Image
                    src={image}
                    alt={content.title}
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-br from-black/40 to-black/60"/>
            </div>
        </div>
    );
}

export default function ErrorPageTemplate({
                                              content,
                                              href,
                                              image,
                                              logoOnSurface = false,
                                          }: ErrorPageTemplateProps) {
    return (
        <main className="flex flex-col min-h-screen">
            <div className="relative">
                <div className="absolute top-0 w-full z-50">
                    <NavigationBar logoOnSurface={logoOnSurface}/>
                </div>
                <ErrorPageBase content={content} href={href} image={image}/>
            </div>
        </main>
    );
}