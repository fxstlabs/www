import {NextRequest} from "next/dist/server/web/spec-extension/request";
import {NextResponse} from "next/dist/server/web/spec-extension/response";
import {revalidateTag} from "next/dist/server/web/spec-extension/revalidate";

export async function POST(request: NextRequest) {
    const secret = request.nextUrl.searchParams.get('secret');
    const tag = request.nextUrl.searchParams.get('tag');

    if (secret !== process.env.FXST_WEBSERVER_CACHE_REVALIDATION_SECRET) {
        return NextResponse.json({
            status: 401,
            message: 'Authentication failed',
        })
    }

    if (!tag) {
        return NextResponse.json({
            status: 400,
            message: 'Missing tag parameter',
        })
    }

    revalidateTag(tag, 'max');

    return NextResponse.json({revalidated: true, time: Date.now()});
}