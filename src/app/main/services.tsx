import React from 'react';

interface Service {
    title: string;
    description: string;
    imageUrl: string;
    href: string;
}

const services: Service[] = [
    {
        title: "Manufacturing",
        description: "Multidisciplinary manufacturing for your products or prototypes.",
        imageUrl: "/images/pages/services/manufacturing/main-cover.jpg",
        href: "/services/manufacturing"
    },
    {
        title: "Automation",
        description: "Tools to automate repetitive and time-consuming tasks.",
        imageUrl: "/images/pages/services/automation/main-cover.jpg",
        href: "/services/automation"
    },
    {
        title: "Software",
        description: "Project design software to help your ideas flow better.",
        imageUrl: "/images/pages/services/software/main-cover.jpg",
        href: "/services/software"
    },
    {
        title: "Quality Control",
        description: "Ensure your project's execution comes out flawlessly every time.",
        imageUrl: "/images/pages/services/quality-control/main-cover.jpg",
        href: "/services/quality-control"
    },
    {
        title: "Education",
        description: "Resources to help you grow and develop your projects faster.",
        imageUrl: "/images/pages/services/education/main-cover.jpg",
        href: "/services/education"
    }
];

export default function MainServices() {
    return (
        <div className="bg-background" id="services">
            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-on-surface font-display mb-8">Our Services</h1>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                        {services.map((service, index) => (
                            <a
                                key={index}
                                className={`relative overflow-hidden rounded-2xl group cursor-pointer transition-transform hover:scale-[1.02] ${
                                    index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                                } ${
                                    index === 4 ? 'md:col-span-2' : ''
                                }`}
                                href={service.href}
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-101 duration-500"
                                    style={{backgroundImage: `url(${service.imageUrl})`}}
                                />
                                <div
                                    className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors"/>

                                {/* Content */}
                                <div className="relative h-full p-6 flex flex-col justify-end text-primary-fixed">
                                    <h3 className="text-2xl font-bold mb-2 font-display">{service.title}</h3>
                                    <p className="text-primary-fixed/80 text-sm">{service.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}