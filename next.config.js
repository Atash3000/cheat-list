/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension:/\.mdx?$/,
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  withMDX:['js','jsx','mdx']
}

module.exports = nextConfig
