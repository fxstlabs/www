import {HandCoins, LockOpen, PlaneTakeoff, Users} from "lucide-react";
import {Button} from "@/components/units/buttons";
import {useTranslations} from "use-intl";

export default function MainMethods() {
    const t = useTranslations('main')

    const methods = [
        {
            icon: Users,
            title: t('methods.method1.title'),
            description: t('methods.method1.description'),
        },
        {
            icon: LockOpen,
            title: t('methods.method2.title'),
            description: t('methods.method2.description'),
        },
        {
            icon: HandCoins,
            title: t('methods.method3.title'),
            description: t('methods.method3.description'),
        },
        {
            icon: PlaneTakeoff,
            title: t('methods.method4.title'),
            description: t('methods.method4.description'),
        },
    ];

    return (
        <div className="min-h-screen" id="methods">
            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Header */}
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight text-on-surface sm:text-5xl font-display">
                            {t('methods.title')}
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                            {t('methods.description')}
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
                                <Button variant='primary'>
                                    {t('methods.cta')}
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}