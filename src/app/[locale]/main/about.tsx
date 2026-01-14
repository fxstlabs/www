import {Eye, Target} from "lucide-react";
import {Button} from "@/components/units/buttons";
import {fxstCdn} from "@/resources/cdn";
import {useTranslations} from "use-intl";

export default function MainAboutSection() {
    const t = useTranslations('main')

    return (
        <div className="min-h-screen" id="about">
            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div>
                            <div className="max-w-2xl">
                                <h2 className="text-4xl font-bold tracking-tight text-on-surface sm:text-5xl font-display"
                                >
                                    {t('about.title')}
                                </h2>
                                <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                                    {t('about.description1')}
                                </p>
                                <p className="mt-4 text-lg leading-8 text-on-surface-variant">
                                    {t('about.description2')}
                                </p>
                            </div>

                            <div className="mt-16 space-y-10">
                                <div className="border-l-2 border-outline pl-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Target className="h-5 w-5 text-on-surface"/>
                                        <h3 className="text-xl font-bold text-on-surface font-display">
                                            {t('about.mission.title')}
                                        </h3>
                                    </div>
                                    <p className="text-base leading-7 text-on-surface-variant">
                                        {t('about.mission.description')}
                                    </p>
                                </div>

                                <div className="border-l-2 border-outline pl-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Eye className="h-5 w-5 text-on-surface"/>
                                        <h3 className="text-xl font-bold text-on-surface font-display">
                                            {t('about.vision.title')}
                                        </h3>
                                    </div>
                                    <p className="text-base leading-7 text-on-surface-variant">
                                        {t('about.vision.description')}
                                    </p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="mt-10">
                                <a href="#methods">
                                    <Button variant='primary'>
                                        {t('about.cta')}
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative h-full min-h-150 lg:min-h-175">
                            <img
                                src={fxstCdn('static/images/pages/main/about-us.jpg')}
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