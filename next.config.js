/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:[
      'image.tmdb.org',
      'pbs.twimg.com',
      'images.unsplash.com',
      'www.gravatar.com',
      'cdn.pixabay.com'
    ]
  }
}

module.exports = nextConfig
