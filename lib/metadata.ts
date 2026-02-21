import type { Metadata } from "next";

export const siteConfig = {
  name: "Rinovea",
  description: "AI innovation company driven by people and powered by technology to deliver impactful AI solutions",
  url: "https://rinovea.com",
  ogImage: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png",
  logo: "https://www.rinovea.com/images/logo1.png",
  keywords: [
    "AI innovation",
    "artificial intelligence",
    "machine learning",
    "technology solutions",
    "AI consulting",
    "machine learning engineering",
    "LLM development",
    "AI strategy"
  ],
  authors: [
    {
      name: "Rinovea Team",
      url: "https://rinovea.com",
    },
  ],
  creator: "Rinovea",
  publisher: "Rinovea",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rinovea.com",
    siteName: "Rinovea",
    title: "Rinovea - AI Innovation & Technology Solutions",
    description: "AI innovation company driven by people and powered by technology to deliver impactful AI solutions",
    images: [
      {
        url: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png",
        width: 1200,
        height: 630,
        alt: "Rinovea - AI Innovation & Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rinovea - AI Innovation & Technology Solutions",
    description: "AI innovation company driven by people and powered by technology to deliver impactful AI solutions",
    images: ["https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png"],
    creator: "@rinovea",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://rinovea.com",
  },
  category: "technology",
};


export const pageMetadata = {
  home: {
    title: "Rinovea - AI Innovation & Technology Solutions",
    description: "Transform your business with cutting-edge AI solutions. Rinovea delivers innovative artificial intelligence technologies that drive growth and efficiency.",
    keywords: [
      "AI solutions",
      "artificial intelligence consulting",
      "machine learning services",
      "AI innovation",
      "technology transformation",
      "business AI",
      "AI strategy"
    ],
    openGraph: {
      title: "Rinovea - AI Innovation & Technology Solutions",
      description: "Transform your business with cutting-edge AI solutions. Rinovea delivers innovative artificial intelligence technologies that drive growth and efficiency.",
      url: "https://rinovea.com",
      type: "website",
    },
    twitter: {
      title: "Rinovea - AI Innovation & Technology Solutions",
      description: "Transform your business with cutting-edge AI solutions. Rinovea delivers innovative artificial intelligence technologies that drive growth and efficiency.",
    },
    alternates: {
      canonical: "https://rinovea.com",
    },
  },
  about: {
    title: "About Rinovea - AI Innovation & Technology Solutions",
    description: "Learn about Rinovea's story, culture, and expertise in AI innovation. We are driven by people and powered by AI technology to deliver impactful solutions.",
    keywords: [
      "Rinovea",
      "AI innovation",
      "technology solutions",
      "artificial intelligence",
      "machine learning",
      "company culture",
      "team expertise",
      "AI company story"
    ],
    openGraph: {
      title: "About Rinovea - AI Innovation & Technology Solutions",
      description: "Learn about Rinovea's story, culture, and expertise in AI innovation. We are driven by people and powered by AI technology to deliver impactful solutions.",
      url: "https://rinovea.com/about",
      type: "website",
    },
    twitter: {
      title: "About Rinovea - AI Innovation & Technology Solutions",
      description: "Learn about Rinovea's story, culture, and expertise in AI innovation. We are driven by people and powered by AI technology to deliver impactful solutions.",
    },
    alternates: {
      canonical: "https://rinovea.com/about",
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Rinovea",
      "description": "AI innovation company driven by people and powered by technology to deliver impactful AI solutions",
      "url": "https://rinovea.com",
      "logo": "https://www.rinovea.com/images/logo1.png",
      "foundingDate": "2016",
      "numberOfEmployees": "50-100",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://linkedin.com/company/rinovea",
        "https://twitter.com/rinovea"
      ],
      "knowsAbout": [
        "Artificial Intelligence",
        "Machine Learning",
        "AI Solutions",
        "Technology Innovation"
      ]
    }
  },
  blog: {
    title: "AI Insights & Research - Rinovea Blog",
    description: "Stay updated with the latest trends, research, and insights in artificial intelligence, machine learning, and emerging technologies that are shaping the future of business.",
    keywords: [
      "AI blog",
      "artificial intelligence insights",
      "machine learning research",
      "AI trends",
      "technology insights",
      "AI articles",
      "ML engineering",
      "LLM development"
    ],
    openGraph: {
      title: "AI Insights & Research - Rinovea Blog",
      description: "Stay updated with the latest trends, research, and insights in artificial intelligence, machine learning, and emerging technologies that are shaping the future of business.",
      url: "https://rinovea.com/blog",
      type: "website",
    },
    twitter: {
      title: "AI Insights & Research - Rinovea Blog",
      description: "Stay updated with the latest trends, research, and insights in artificial intelligence, machine learning, and emerging technologies that are shaping the future of business.",
    },
    alternates: {
      canonical: "https://rinovea.com/blog",
    },
  },
};

export function generatePageMetadata(
  page: keyof typeof pageMetadata,
  customMetadata?: Partial<Metadata>
): Metadata {
  const baseMetadata = pageMetadata[page];

  return {
    title: baseMetadata.title,
    description: baseMetadata.description,
    keywords: baseMetadata.keywords,
    openGraph: {
      ...siteConfig.openGraph,
      ...baseMetadata.openGraph,
    },
    twitter: {
      ...siteConfig.twitter,
      ...baseMetadata.twitter,
    },
    alternates: baseMetadata.alternates,
    robots: siteConfig.robots,
    verification: siteConfig.verification,
    ...customMetadata,
  };
}


export function generateBlogPostMetadata(
  title: string,
  description: string,
  publishedTime: string,
  slug: string,
  image?: string
): Metadata {
  const blogUrl = `https://rinovea.com/blog/${slug}`;
  const ogImage = image || siteConfig.ogImage;

  return {
    title: `${title} - Rinovea Blog`,
    description,
    keywords: [
      ...siteConfig.keywords,
      "AI blog post",
      "artificial intelligence article",
      "machine learning insights"
    ],
    openGraph: {
      ...siteConfig.openGraph,
      title: `${title} - Rinovea Blog`,
      description,
      url: blogUrl,
      type: "article",
      publishedTime,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...siteConfig.twitter,
      title: `${title} - Rinovea Blog`,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: blogUrl,
    },
    robots: siteConfig.robots,
  };
}


export function generateBlogPostStructuredData(
  title: string,
  description: string,
  publishedTime: string,
  slug: string,
  author?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    datePublished: publishedTime,
    dateModified: publishedTime,
    description,
    url: `https://rinovea.com/blog/${slug}`,
    author: {
      "@type": "Person",
      name: author || "Rinovea Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Rinovea",
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://rinovea.com/blog/${slug}`,
    },
  };
}


export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  robots: siteConfig.robots,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
  verification: siteConfig.verification,
  alternates: siteConfig.alternates,
  category: siteConfig.category,
};
