import Link from "next/link";

export interface LinkParams {
    text: string,
    href: string
}

export const LinkButton = (params: LinkParams) => {
    return (
        <Link
            href={params.href}
            className="rounded-md bg-stone-700 px-3.5 py-2.5 text-sm font-semibold text-stone-100 shadow-sm hover:bg-stone-600 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
        >
            {params.text}
        </Link>
    );
}

export const LinkText = (params: LinkParams) => {
    return (
        <Link href={params.href} className="text-sm font-semibold leading-6 text-stone-100">
            <div className='flex flex-row'>
                <p> {params.text} </p>
            </div>
        </Link>
    );
}
