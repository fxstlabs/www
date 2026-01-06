import {CheckCircle, Layers, Shield, Zap} from "lucide-react";

export default function TDPrintingFeatures() {
    const features = [
        {
            name: "Wide Range of Materials",
            description: "From PLA to Titanium. Explore our catalogue of materials and colors!",
            icon: Layers,
            gradient: "from-cyan-500 to-blue-500"
        },
        {
            name: "Complex Geometries",
            description: "Full support for intricate designs and challenging shapes.",
            icon: Zap,
            gradient: "from-emerald-500 to-cyan-500"
        },
        {
            name: "Rapid Prototyping",
            description: "Fast turnaround times to get your ideas into your hands quickly.",
            icon: CheckCircle,
            gradient: "from-pink-500 to-purple-500"
        },
        {
            name: "Production-Grade Parts",
            description: "From functional prototypes to end-use components built to last.",
            icon: Shield,
            gradient: "from-yellow-500 to-red-500"
        },
    ];

    return (
        <div className="bg-background" id="features">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20 min-h-screen flex items-center">

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center w-full">

                    {/* Title, Description & Services */}
                    <div className="space-y-8">
                        {/* Header */}
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-on-surface sm:text-4xl lg:text-5xl font-display">
                                Everything you need to bring your ideas to life
                            </h2>
                            <p className="mt-5 text-base lg:text-lg leading-7 text-on-surface-variant">
                                From hobbyist projects to industrial prototypes, we provide the tools and expertise to
                                get the job done right.
                            </p>
                        </div>

                        {/* Services List */}
                        <div className="space-y-4">
                            {features.map((feature) => (
                                <div
                                    key={feature.name}
                                    className="group relative overflow-hidden rounded-2xl bg-surface-container p-5 shadow-xs shadow-shadow transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className={`shrink-0 rounded-xl bg-linear-to-br ${feature.gradient} p-3 shadow-md`}>
                                            <feature.icon className="h-5 w-5 text-white"/>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-on-surface mb-1.5 font-display">
                                                {feature.name}
                                            </h3>
                                            <p className="text-sm text-on-surface-variant leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Hover effect shii */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 w-full bg-linear-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                </div>
                            ))}

                            {/* Quote Button */}
                            <div className="pt-2">
                                <a
                                    href="/docs/services/3d-printing"
                                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-semibold text-on-primary shadow-lg transition-all duration-300 hover:opacity-90 hover:shadow-xl hover:scale-105"
                                >
                                    Get a Quote
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div
                        className="relative aspect-square lg:aspect-auto lg:h-150 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-outline-variant">
                        <img
                            src="/images/pages/services/manufacturing/3d-printing/creality-printer-with-prints.jpg"
                            alt="3D printer in action showing intricate parts"
                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div
                            className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"/>

                        {/* Attribution */}
                        <div
                            className="absolute bottom-3 right-3 text-[10px] text-white/70 hover:text-white transition-colors z-10 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                            Photo by <a
                            href="https://unsplash.com/@declansun?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                            className="underline" target="_blank" rel="noopener noreferrer">Efe YaÄŸÄ±z Soysal</a> on <a
                            href="https://unsplash.com/photos/a-small-3d-printer-sitting-on-top-of-a-table-SU2yTv4Hwis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                            className="underline" target="_blank" rel="noopener noreferrer">Unsplash</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}