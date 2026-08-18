import type { MetadataRoute } from 'next';
import { site } from './site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${site.url}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    {
      url: `${site.url}/delete-account`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ];
}
