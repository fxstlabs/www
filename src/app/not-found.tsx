import Link from "next/link";

export default function NotFound() {
    return (
        <div style={{display: "flex", flexDirection: "column", gap: '1em', margin: '2em'}}>
            <h1>
                You might be lost.
            </h1>
            <p className=''>
                This page is most likely using a path reserved
                for internal operations.
            </p>
            <ul>
                <li>If you were playing with the URL, it&#39;s ok. You are not in trouble.</li>
                <li>If you have no clue how you got here, contact <a href='mailto:support@fxst.tech'>support</a>.</li>
                <li>If you are trying to access the internal API, use an HTTP client.</li>
                <li>If you are trying to access the FXST API, use the <a href='https://fxst.tech/api'>public API</a>
                </li>
            </ul>

            <Link href='/'>
                <button>
                    Return to the main page
                </button>
            </Link>
        </div>
    );
}

