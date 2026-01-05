import {ServicesGrid} from "@/components/templates/services";

export function ServicesDisplay() {
    const services = [
        {
            title: "Manufacturing",
            href: "services/manufacturing",
            description: "High-quality manufacturing tailored to your needs. From rapid prototyping to production runs, we bring your designs to life with precision and care.",
            image: "/images/pages/services/manufacturing/main-cover.jpg"
        },
        {
            title: "Automation",
            href: "services/automation",
            description: "Streamline your operations with our cutting-edge automation tools. Reduce manual work and increase efficiency across your entire workflow.",
            image: "/images/pages/services/automation/main-cover.jpg"
        },
        {
            title: "Software",
            href: "services/software",
            description: "User-centric software to power your creativity. Custom solutions built to match your unique needs and scale with your growth.",
            image: "/images/pages/services/software/main-cover.jpg"
        },
        {
            title: "Quality and Process Control",
            href: "services/quality-control",
            description: "Ensuring excellence and consistency in every step of your process. Comprehensive quality management systems that deliver reliable results.",
            image: "/images/pages/services/quality-control/main-cover.jpg"
        },
        {
            title: "Education",
            href: "services/education",
            description: "Empowering you and your team with the knowledge and skills to succeed. Training programs designed to build lasting expertise.",
            image: "/images/pages/services/education/main-cover.jpg"
        },
    ];

    return (
        <ServicesGrid
            services={services}
            showTitleOnImage={true}
            maxWidth="wide"
        />
    );
}
