import {User} from "lucide-react";

export default function UserButton() {
    return (
        <div className="flex lg:flex-1 justify-end">
            <button className="flex items-center gap-x-2 rounded-md bg-neutral-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <User className="h-5 w-5" />
                Log in
            </button>
        </div>
    );
}