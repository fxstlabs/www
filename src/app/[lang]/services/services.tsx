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
            title: "Process Architecture",
            href: "services/process-architecture",
            description: "From software triggers that handle your data to physical guides for automating manual tasks, we design the workflows that allow your project to run itself while you focus on the vision.",
            image: "/images/pages/services/process-architecture/main-cover.jpg"
        },
        {
            title: "Project Management",
            href: "services/project-management",
            description: "Empowering you and your team with the knowledge and skills to succeed. Training programs designed to build lasting expertise.",
            image: "/images/pages/services/project-management/main-cover.jpg"
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
