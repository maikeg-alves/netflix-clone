/** @type {import('next').NextConfig} */

//urls images

const urls = {
  images: {
    domains: ['image.tmdb.org'],
  },
};

// Path: migration\next.config.js
module.exports = {
  reactStrictMode: true,
  ...urls,
   env : {
    NEXT_KEY_API: process.env.NEXT_KEY_API,
  },
};
