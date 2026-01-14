import {ServicesGrid} from "@/templates/services";
import {useTranslations} from "use-intl";

export function ServicesDisplay() {
    const t = useTranslations("services")

    const services = [
        {
            title: t("manufacturing.title"),
            href: "services/manufacturing",
            description: t("manufacturing.cover-description"),
            image: "static/images/pages/services/manufacturing/main-cover.jpg"
        },
        {
            title: t("process-architecture.title"),
            href: "services/process-architecture",
            description: t("process-architecture.cover-description"),
            image: "static/images/pages/services/process-architecture/main-cover.jpg"
        },
        {
            title: t("project-management.title"),
            href: "services/project-management",
            description: t("project-management.cover-description"),
            image: "static/images/pages/services/project-management/main-cover.jpg"
        },
    ];

    return (
        <ServicesGrid
            services={services}
            showTitleOnImage={true}
            maxWidth="wide"
            learnMoreText={"Learn more"}
        />
    );
}
