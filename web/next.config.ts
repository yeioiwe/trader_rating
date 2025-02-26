import type { NextConfig } from 'next';
const { i18n } = require('./next-i18next.config');

const nextConfig: NextConfig = {
    i18n,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

export default nextConfig;
