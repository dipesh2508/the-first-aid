/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "images.unsplash.com",
            },
            {
                hostname: 'img.clerk.com',
            }
        ],
    },
};

export default nextConfig;
