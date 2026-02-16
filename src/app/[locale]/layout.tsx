import RootLayoutComponent from '@/root/root.layout';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ReactNode } from 'react';
import plusjakarta from '@/assets/fonts/plus-jakarta-sans';
import '@/assets/styles/style.scss';
import classNames from 'classnames';

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}
export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();
  const fonts = classNames(plusjakarta.className);

  return (
    <html lang={locale}>
      <body className={fonts}>
        <NextIntlClientProvider messages={messages}>
          <RootLayoutComponent>{children}</RootLayoutComponent>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
