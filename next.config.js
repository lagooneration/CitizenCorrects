/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enable React Strict Mode for better error detection
    swcMinify: true,       // Use SWC for faster and more efficient builds
    eslint: {
      ignoreDuringBuilds: true, // Skip ESLint during production builds (optional)
    },
    typescript: {
      ignoreBuildErrors: false,  // Ensure no TypeScript errors in production
    },
    experimental: {
      appDir: true,  // Enable if you're using the app directory for routing
    }
};

module.exports = nextConfig
