import ErrorPageTemplate from "@/components/templates/error/template";

export default function NotFound() {
    return (
        <ErrorPageTemplate
            content={{
                title: "404: Not Found.",
                description: "We can't seem to find the page you're looking for.",
                subtext: "Did you try turning it off and on again?",
            }}
            href="/"
            image="/images/pages/main/main-cover.jpg"
            logoOnSurface={true}
        />
    );
}
