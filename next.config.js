/**
 * Next Configuration
 */
/** @type {import('next/dist/next-server/server/config-shared').NextConfig} */
const config = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    reactStrictMode: true,
    eslint: {
      dirs: ["src/components/", "src/layouts", "src/libs", "src/pages", "src/services"],
    },
  };
};

module.exports = config;
