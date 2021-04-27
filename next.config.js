/**
 * Next Configuration
 */
/** @type {import('next/dist/next-server/server/config-shared').NextConfig} */
const config = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
  };
};

module.exports = config;
