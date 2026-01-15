import {isCdnUp} from "@/resources/cdn";

export default async function StatusPage() {
    return (
        <div className="min-h-screen min-w-screen">
            Is the CDN up????: {await isCdnUp() ? "yesss" : "no :("}
        </div>
    );
}