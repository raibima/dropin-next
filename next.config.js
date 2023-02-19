/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

if (!process.env.FOO) {
  throw new Error("process.env.FOO is not defined");
}

module.exports = nextConfig;
