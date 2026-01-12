import {HandCoins, LockOpen, PlaneTakeoff, Users} from "lucide-react";
import {Button} from "@/components/units/buttons";

export default function HowWeDoItSection() {
    const methods = [
        {
            icon: Users,
            title: "An Invisible Helping Hand.",
            description: "We act as the team you haven’t hired yet. Our tools fill the gaps in your resources, automating administrative and technical weight so your ideas can take off before you have the headcount."
        },
        {
            icon: LockOpen,
            title: "Transparency First.",
            description: "We handle the execution, but you keep the insight. Through intuitive design and deep documentation, we ensure you always understand the how and why behind our systems."
        },
        {
            icon: HandCoins,
            title: "Efficiency Over Fees.",
            description: "We thrive when you are sustainable, not by charging for things you can do yourself. By supporting self-hosting and minimizing overhead, we ensure you only spend when external resources are required."
        },
        {
            icon: PlaneTakeoff,
            title: "Work Towards Independence.",
            description: "We provide a transparent framework that invites you to peek behind the curtain. By teaching you how process-architecture works today, we prepare you to customize and build your own specialized systems tomorrow."
        },
    ];

    return (
        <div className="min-h-screen" id="methods">
            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Header */}
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight text-on-surface sm:text-5xl font-display">
                            How We Do It
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                            We remove the obstacles between you and your goals with four core approaches that put
                            powerful capabilities in your hands.
                        </p>
                    </div>

                    {/* Methods Grid */}
                    <div className="mx-auto max-w-5xl">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
                            {methods.map((method, index) => {
                                const Icon = method.icon;
                                return (
                                    <div
                                        key={index}
                                        className="relative group"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="shrink-0">
                                                <div
                                                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                                    <Icon className="h-6 w-6 text-on-secondary"/>
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-on-surface font-display mb-2">
                                                    {method.title}
                                                </h3>
                                                <p className="text-base leading-7 text-on-surface-variant">
                                                    {method.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 text-center flex items-center justify-center">
                        <div className="mt-10">
                            <a href="#services">
                                <Button variant='primary'>Explore our Services!</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}