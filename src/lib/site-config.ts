export const siteConfig = {
  deploymentTarget:
    process.env.NEXT_PUBLIC_DEPLOYMENT_TARGET?.trim() || "local-development",
  apiBaseUrl:
    process.env.NEXT_PUBLIC_API_BASE_URL?.trim() ||
    "https://your-vps-domain-or-ip/api",
};
