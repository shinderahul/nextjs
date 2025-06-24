import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Your existing configuration
};

// Only apply bundle analyzer if the module is available
let finalConfig = nextConfig;

if (process.env.ANALYZE === "true") {
  try {
    // This will only work if you disable the ESLint rule for this line
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const withBundleAnalyzer = require("@next/bundle-analyzer")({
      enabled: true,
    });
    finalConfig = withBundleAnalyzer(nextConfig);
  } catch (error) {
    console.warn("Bundle analyzer not available:", error);
  }
}

export default finalConfig;
