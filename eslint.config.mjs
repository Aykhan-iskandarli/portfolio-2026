import nextPlugin from '@next/eslint-plugin-next';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
  {
    // Bütün müvafiq faylları hədəf alırıq
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    plugins: {
      '@next/next': nextPlugin,
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooksPlugin,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      // --- NEXT.JS VƏ REACT HOOKS STANDARTLARI ---
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...reactHooksPlugin.configs.recommended.rules,

      // --- SƏNİN KÖHNƏ QAYDALARIN ---
      'no-unreachable': 'error',
      'camelcase': ['error', { properties: 'never' }],
      'eqeqeq': 'error',
      'no-console': 'warn',
      'no-empty-function': 'error',
      'no-eval': 'error',
      'no-unused-expressions': 'error',
      'no-var': 'error',
      'prefer-const': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',

      // --- "AQRESSİV" FORMATLAMA VƏ BOŞLUQ TƏMİZLƏMƏ ---
      'quotes': ['error', 'single', { avoidEscape: true }],
      'jsx-quotes': ['error', 'prefer-single'],
      'semi': ['error', 'always'],
      'indent': ['error', 2, { SwitchCase: 1 }], // Bütün boşluq iyerarxiyasını 2-yə salır
      'no-multi-spaces': ['error', { ignoreEOLComments: false }], // ARADAKI BOŞLUQLARI SİLİR
      'no-trailing-spaces': 'error', // SƏTİR SONUNDAKI BOŞLUQLARI SİLİR
      'object-curly-spacing': ['error', 'always'], // { user } formatı
      'array-bracket-spacing': ['error', 'never'],
      'comma-spacing': ['error', { before: false, after: true }],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'space-in-parens': ['error', 'never'],
    },
  },
];
