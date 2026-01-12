import ErrorPageTemplate from "@/components/templates/error/template";

export default function ComingSoon({href, image}: { href: string, image: string }) {
    return (
        <ErrorPageTemplate
            content={{
                title: "Coming Soon!",
                description: "We're working hard to bring you something amazing.\nThis page is currently under construction, but great things are on the way.",
                subtext: "Please be patient, as FXST is relatively new!",
            }}
            href={href}
            image={image}
        />
    );
}