import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    imageUrl: string;
    href: string;
    showTitleOnImage?: boolean;
}

export function ServiceCard({
                                title,
                                description,
                                imageUrl,
                                href,
                                showTitleOnImage = false
                            }: ServiceCardProps) {
    return (
        <a
            href={href}
            className="group relative overflow-hidden rounded-2xl bg-stone-200 shadow-lg ring-1 ring-stone-200/50 transition-all duration-500 hover:shadow-2xl hover:ring-stone-300 hover:-translate-y-1"
        >
            {/* Image Section */}
            <div className="relative h-56 lg:h-64 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40"/>

                {/* Title on Image */}
                {showTitleOnImage && (
                    <div className="absolute inset-0 flex items-end p-6">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white font-display">
                            {title}
                        </h2>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-6 lg:p-8">
                {!showTitleOnImage && (
                    <h3 className="text-xl font-bold text-stone-900 mb-3">
                        {title}
                    </h3>
                )}

                <p className="text-base text-stone-600 leading-relaxed">
                    {description}
                </p>

                {/* Arrow indicator */}
                <div
                    className="mt-4 flex items-center text-stone-900 font-medium group-hover:text-stone-700 transition-colors">
                    <span>Learn more</span>
                    <svg
                        className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                </div>
            </div>
        </a>
    );
}

interface Service {
    title: string;
    description: string;
    image?: string;
    imageUrl?: string;
    href: string;
}

interface ServicesGridProps {
    services: Service[];
    description?: string;
    showTitleOnImage?: boolean;
    maxWidth?: 'default' | 'wide';
}

export function ServicesGrid({
                                 services,
                                 description,
                                 showTitleOnImage = false,
                                 maxWidth = 'default'
                             }: ServicesGridProps) {
    const containerClass = maxWidth === 'wide' ? 'max-w-[1400px]' : 'max-w-7xl';

    return (
        <section className="py-10 lg:py-12 bg-stone-200" id="services">
            <div className={`mx-auto ${containerClass} px-8 lg:px-12`}>

                {/* Description */}
                {description && (
                    <div className="text-center mb-12">
                        <p className="text-lg text-stone-600 max-w-3xl mx-auto">
                            {description}
                        </p>
                    </div>
                )}

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            imageUrl={service.image || service.imageUrl || ''}
                            href={service.href}
                            showTitleOnImage={showTitleOnImage}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
