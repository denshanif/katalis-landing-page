// app/sitemap.ts
import type { MetadataRoute } from 'next'

// Import atau definisikan object services
const services = {
  "landing-page": { title: "Landing Page" },
  "e-commerce": { title: "E-Commerce" },
  "erp": { title: "ERP" },
  "custom-website": { title: "Custom Website" },
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: 'https://katalisdev.my.id',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://katalisdev.my.id/why-choose-us',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://katalisdev.my.id/term-conditions',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://katalisdev.my.id/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    }
  ]

  // Dynamic pages (dari services object)
  const serviceUrls: MetadataRoute.Sitemap = Object.keys(services).map(slug => ({
    url: `https://katalisdev.my.id/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...staticUrls, ...serviceUrls]
}
