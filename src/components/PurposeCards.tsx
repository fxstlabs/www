import {Eye, HelpCircle, Rocket} from "lucide-react";

export const PurposeCards = () => (
    <section id="mvw" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {/* Mission */}
            <article className="relative overflow-hidden rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow md:p-8 dark:border-stone-700 dark:bg-stone-800">
                <div className="mb-4 flex items-center gap-3 text-stone-700 dark:text-stone-100">
                    <Rocket className="h-6 w-6" />
                    <h3 className="text-lg font-semibold">Mission</h3>
                </div>
                <p className="text-stone-600 dark:text-stone-200">
                    We seek to create a large community of people that are more willing to put in the effort to bring their
                    ideas to life. We wish to see a world where people can see their ideas come to life in a simple, quick,
                    structured and robust manner.
                </p>
            </article>

            {/* Vision */}
            <article className="relative overflow-hidden rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow md:p-8 dark:border-stone-700 dark:bg-stone-800">
                <div className="mb-4 flex items-center gap-3 text-stone-700 dark:text-stone-100">
                    <Eye className="h-6 w-6" />
                    <h3 className="text-lg font-semibold">Vision</h3>
                </div>
                <p className="text-stone-600 dark:text-stone-200">
                    A world where the path from concept to reality is seamless, structured, and robust. We envision a
                    proactive global community where every creator has the capacity to transform abstract ideas into
                    impactful solutions.
                </p>
            </article>

            {/* Why */}
            <article className="relative overflow-hidden rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow md:p-8 dark:border-stone-700 dark:bg-stone-800 sm:col-span-2">
                <div className="mb-4 flex items-center gap-3 text-stone-700 dark:text-stone-100">
                    <HelpCircle className="h-6 w-6" />
                    <h3 className="text-lg font-semibold">Why</h3>
                </div>
                <p className="text-stone-600 dark:text-stone-200">
                    The drive to create is often stifled by the increasing demands of modern life. This struggle is
                    particularly acute for students and working professionals, who face the constant challenge of balancing
                    their innovative ambitions with the rigid time constraints of education and employment.
                </p>
            </article>
        </div>
    </section>
);