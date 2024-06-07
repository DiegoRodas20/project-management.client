/** @type {import('next').NextConfig} */
const nextConfig = {
    modularizeImports: {
        '@mui/material': {
            transform: '@mui/material/{{member}}'
        },
        '@mui/lab': {
            transform: '@mui/lab/{{member}}'
        }
    },
};

export default nextConfig;
