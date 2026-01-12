import {Eye, Target} from "lucide-react";
import {Button} from "@/components/units/buttons";

export default function MainAboutSection() {

    return (
        <div className="min-h-screen" id="about">
            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div>
                            <div className="max-w-2xl">
                                <h2 className="text-4xl font-bold tracking-tight text-on-surface sm:text-5xl font-display">
                                    Empowering Creators.<br/>Eliminating Friction.
                                </h2>
                                <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                                    We provide a comprehensive ecosystem of open-source, cutting-edge tools designed
                                    to eliminate the technical and administrative friction that slows down your
                                    creative process, saving you time, money and frustration.
                                </p>
                                <p className="mt-4 text-lg leading-8 text-on-surface-variant">
                                    From automating sales quotes to multidisciplinary product manufacturing: we take
                                    care of the boring stuff so you can maintain your momentum and work on building
                                    the future.
                                </p>
                            </div>

                            <div className="mt-16 space-y-10">
                                <div className="border-l-2 border-outline pl-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Target className="h-5 w-5 text-on-surface"/>
                                        <h3 className="text-xl font-bold text-on-surface font-display">Our
                                            Mission</h3>
                                    </div>
                                    <p className="text-base leading-7 text-on-surface-variant">
                                        To provide creators with a framework of tools and processes that eliminates the
                                        need for an advanced technical or administrative foundation to grow and develop
                                        their ideas.
                                    </p>
                                </div>

                                <div className="border-l-2 border-outline pl-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Eye className="h-5 w-5 text-on-surface"/>
                                        <h3 className="text-xl font-bold text-on-surface font-display">Our Vision</h3>
                                    </div>
                                    <p className="text-base leading-7 text-on-surface-variant">
                                        A world where technical complexity and administrative bureaucracy does not
                                        deter creators from developing their ideas.
                                    </p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="mt-10">
                                <a href="#methods">
                                    <Button variant='primary'>Amazing! How?</Button>
                                </a>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative h-full min-h-150 lg:min-h-175">
                            <img
                                src="/images/pages/main/pmv-company.jpg"
                                alt="Team collaboration"
                                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}