import {Eye, Target} from "lucide-react";

export default function MainAboutSection() {

    return (
        <div className="bg-background min-h-screen" id="about">
            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div>
                            <div className="max-w-2xl">
                                <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-display">
                                    Empowering Creators.<br/>Eliminating Friction.
                                </h2>
                                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                    We provide a comprehensive ecosystem of open-source, cutting-edge tools designed
                                    to
                                    bridge the gap between imagination and reality.
                                </p>
                                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                                    We eliminate technical and administrative friction so you can maintain momentum and
                                    focus on what you do best: building the future.
                                </p>
                            </div>

                            <div className="mt-16 space-y-10">
                                <div className="border-l-2 border-foreground pl-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Target className="h-5 w-5 text-foreground"/>
                                        <h3 className="text-xl font-bold text-foreground font-display">Our
                                            Mission</h3>
                                    </div>
                                    <p className="text-base leading-7 text-muted-foreground">
                                        To empower creators by dismantling technical barriers and providing the tools
                                        needed to turn complex challenges into unstoppable momentum.
                                    </p>
                                </div>

                                <div className="border-l-2 border-foreground pl-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Eye className="h-5 w-5 text-foreground"/>
                                        <h3 className="text-xl font-bold text-foreground font-display">Our Vision</h3>
                                    </div>
                                    <p className="text-base leading-7 text-muted-foreground">
                                        A world where technology is an invisible partner in the creative process,
                                        turning every idea into a reality through limitless innovation and sustainable
                                        growth.
                                    </p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="mt-10">
                                <a
                                    href="#methods"
                                    className="inline-flex items-center px-6 py-3 text-base font-semibold text-primary-foreground bg-primary rounded-lg hover:opacity-90 transition-colors shadow-sm hover:shadow-md"
                                >
                                    Cool! How?
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