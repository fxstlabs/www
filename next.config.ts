import type {NextConfig} from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.fxst.tech',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.simpleicons.org',
                pathname: '/**',
            },
        ]
    }
};

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig);
