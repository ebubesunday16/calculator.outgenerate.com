import { MetadataRoute } from 'next';
import { Calculators } from '@/config/calculator'; // Import your calculators config
import { CalculatorConfig } from '@/types';

export default function sitemap(): MetadataRoute.Sitemap {
  // Map through the Calculators config and generate sitemap entries
  const calculatorPages = Calculators.map((calculator: CalculatorConfig) => ({
    url: `https://calculator.outgenerate.com/${calculator.slug}`,
    lastModified: new Date(calculator.lastUpdated), // Use lastUpdated field for lastModified
    changeFrequency: 'daily', // You can adjust this per page or use a default
    priority: 1, // You can also adjust priority for each page based on criteria
  }));

  // Static pages
  const staticPages = [
    {
      url: 'https://calculator.outgenerate.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://calculator.outgenerate.com/about-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://calculator.outgenerate.com/all',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },

    {
        url: 'https://calculator.outgenerate.com/privacy-policy',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
    },

    {
        url: 'https://calculator.outgenerate.com/terms-of-service',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
    },

  ];

  // Combine dynamic calculator pages with static pages
  return [...staticPages, ...calculatorPages];
}
