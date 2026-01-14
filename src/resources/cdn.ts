const isDevelopmentEnvironment = process.env.NODE_ENV === 'development';

export function fxstCdn(resource: string): string {
    const cleanResource = resource.startsWith('/') ? resource.substring(1) : resource;

    if (isDevelopmentEnvironment) {
        return 'http://localhost:8000/' + cleanResource;
    }

    return 'https://cdn.fxst.tech/' + cleanResource;
}
