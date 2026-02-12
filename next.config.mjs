import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
    includePaths: [path.join(__dirname, 'src/assets/styles')],
    loadPaths: [path.join(__dirname, 'src/assets/styles')],
  },
};

export default withNextIntl(nextConfig);
