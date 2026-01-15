const isDevelopmentEnvironment = process.env.NODE_ENV === 'development';

export function fxstCdn(resource: string): string {
    const cleanResource = resource.startsWith('/') ? resource.substring(1) : resource;

    if (isDevelopmentEnvironment) {
        return 'http://localhost:8000/' + cleanResource;
    }

    return 'https://cdn.fxst.tech/' + cleanResource;
}

export async function isCdnUp(): Promise<boolean> {
    return await fetch(fxstCdn('status')).then((response) => {
        if (response.status != 200) {
            throw new Error("Bad response from CDN")
        }
        return response
    }).then(() => {
        return true;
    }).catch(() => {
        return false;
    });
}
