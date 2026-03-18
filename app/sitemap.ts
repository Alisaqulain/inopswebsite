import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://example.com";

const routes = [
  "/",
  "/about",
  "/contact",
  "/blog",
  "/brochures",
  "/all-pages",
  "/product/biometric-access-control",
  "/product/turnstiles",
  "/product/accessories",
  "/solutions/time-and-attendance",
  "/solutions/canteen-management",
  "/solutions/payroll-solutions",
  "/solutions/labour-management",
  "/solutions/visitor-management",
  "/solutions/fixed-asset-management",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

