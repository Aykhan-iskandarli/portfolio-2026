'use client';
import css from './test.module.scss';
import React from 'react';
import { Select } from 'antd';
import { usePathname, useRouter, routing } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';

const Test = () => {
 const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('Common');

  console.log(locale, "locale");

  const handleChange = (value: string) => {
    router.replace(pathname, { locale: value });
  };
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Server Component:</h2>
     <Select
      defaultValue={locale}
      style={{ width: 120 }}
      onChange={handleChange}
      options={routing.locales.map((loc) => ({
        value: loc,
        label: loc.toUpperCase(),
      }))}
    />
<h1>{t('welcome')}</h1>
      <p>Cari dil: {t('lang')}</p>
    </div>
  );
};

export default Test;
