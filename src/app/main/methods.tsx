import {CheckCircle, Code, Cog, GraduationCap, Wrench} from "lucide-react";

export default function HowWeDoItSection() {
    const methods = [
        {
            icon: Wrench,
            title: "Manufacturing Made Simple",
            description: "Accessible advanced manufacturing to turn your ideas into reality. Access comprehensive guides, templates, and tools that demystify the production process."
        },
        {
            icon: GraduationCap,
            title: "Knowledge Without Barriers",
            description: "Learn at your own pace with our open educational resources. No paywalls, no gatekeeping; just clear, actionable knowledge that grows with your needs."
        },
        {
            icon: Cog,
            title: "Automation Simplified",
            description: "Streamline repetitive tasks with ready-to-use automation frameworks. Spend less time on busywork and more time on innovation."
        },
        {
            icon: Code,
            title: "Software Foundations",
            description: "Build on battle-tested, open-source software tools designed for creators. No vendor lock-in, no licensing nightmares; just reliable infrastructure."
        },
        {
            icon: CheckCircle,
            title: "Quality Control Clarity",
            description: "Implement robust quality systems with our transparent frameworks and checklists. Maintain high standards without complexity."
        }
    ];

    return (
        <div className="bg-background min-h-screen" id="methods">
            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Header */}
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight text-on-surface sm:text-5xl font-display">
                            How We Do It
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                            We remove the obstacles between you and your goals with five core approaches that put
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
                    <div className="mt-12 text-center">
                        <a
                            href="#services"
                            className="inline-flex items-center px-6 py-3 text-base font-semibold text-on-primary bg-primary rounded-lg hover:opacity-90 transition-colors shadow-sm hover:shadow-md"
                        >
                            Explore Our Services
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}