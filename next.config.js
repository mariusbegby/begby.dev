/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    reactStrictMode: true,
    images: {
        loader: 'default',
        domains: ['localhost']
    }
};

module.exports = nextConfig;
