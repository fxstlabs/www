import {ArrowLeft} from "lucide-react";
import Link from "next/link";
import NavigationBar from "@/components/navigation-bar/navigation-bar";
import {Button} from "@/components/units/buttons";
import {fxstCdn} from "@/resources/cdn";

interface ErrorPageContent {
    title: string;
    description: string;
    subtext: string;
    buttonText: string;
}

interface ErrorPageTemplateProps {
    content: ErrorPageContent;
    href: string;
    image: string;
    logoOnSurface?: boolean;
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
                                        {content.buttonText}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative min-h-100 lg:min-h-screen">
                        <img
                            src={fxstCdn(image)}
                            alt={content.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0"/>
                    </div>
                </div>
            </div>
        </main>
    );
}