import type {MetadataRoute} from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'FXST',
        short_name: 'FXST',
        description: 'Cutting-edge tools designed to eliminate the technical and administrative friction.',
        start_url: '/',
        display: 'standalone',
        // icons: [
        //     {
        //         src: '@/public/favicon.ico',
        //         sizes: 'any',
        //         type: 'image/x-icon',
        //     },
        // ],
    }
}