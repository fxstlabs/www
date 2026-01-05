import {User} from "lucide-react";

export default function UserButton() {
    return (
        <div className="flex lg:flex-1 justify-end">
            <button
                className="flex items-center gap-x-2 rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary">
                <User className="h-5 w-5"/>
                Log in
            </button>
        </div>
    );
}