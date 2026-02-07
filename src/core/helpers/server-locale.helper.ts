export function getServerLocale(locale?: string): string {
    if (locale) return locale;
    return 'az';
  }