/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        GOOGLE_ID:`${process.env.GOOGLE_ID}`,
        GOOGLE_SECRET:`${process.env.GOOGLE_SECRET}`,
        NEXTAUTH_SECRET:`${process.env.NEXTAUTH_SECRET}`,
        GITHUB_APP_CLIENT_ID:`${process.env.GITHUB_APP_CLIENT_ID}`,
        GITHUB_APP_CLIENT_SECRET:`${process.env.GITHUB_APP_CLIENT_SECRET}`,
    }
};

module.exports = nextConfig;
