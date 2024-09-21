/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "images.unsplash.com",
            },
            {
                hostname: 'img.clerk.com',
            },
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            }
        ],
    },
};

export default nextConfig;
