import {User} from "lucide-react";
import {useTranslations} from "use-intl";

export default function UserButton() {
    const t = useTranslations("navbar")
    return (
        <div className="flex lg:flex-1 justify-end">
            <button
                className="flex items-center gap-x-2 rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-on-secondary shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary">
                <User className="h-5 w-5"/>
                {t('buttons.log-in')}
            </button>
        </div>
    );
}