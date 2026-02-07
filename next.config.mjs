import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  sassOptions: {
    includePaths: ['./src/assets/styles'],
  },
};

export default withNextIntl(nextConfig);