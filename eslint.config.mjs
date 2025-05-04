import antfu from '@antfu/eslint-config';
import nx from '@nx/eslint-plugin';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],

  {
    ignores: ['node_modules', 'build', 'logs', 'database', '.next', '**/dist'],
  },

  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },

  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
    rules: {},
  },

  // Ajout des règles ESLint et des plugins
  antfu({
    stylistic: {
      indent: 'tab',
      quotes: 'single',
      semi: false,

      overrides: {
        curly: 'off',
        'style/eol-last': 'off',
        'style/block-spacing': ['error', 'always'],
        'style/brace-style': ['error', '1tbs'],
        'style/comma-dangle': [
          'error',
          {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
          },
        ],
        'style/comma-spacing': ['error', { before: false, after: true }],
        'style/func-call-spacing': ['error', 'never'],
        'style/object-curly-spacing': ['error', 'always'],
        'style/padded-blocks': [
          'error',
          {
            blocks: 'never',
            classes: 'always',
            switches: 'never',
          },
        ],
        'style/quote-props': ['error', 'consistent-as-needed'],
      },
    },

    jsonc: false,
    yaml: false,

    linterOptions: {
      reportUnusedDisableDirectives: false,
    },
  }),

  {
    plugins: {
      'simple-import-sort': pluginSimpleImportSort,
      tailwindcss: require('eslint-plugin-tailwindcss'),
    },
    extends: ['next/core-web-vitals', 'plugin:tailwindcss/recommended'],
    rules: {
      'ts/ban-ts-comment': 'off',
      'ts/consistent-type-imports': 'off',
      'ts/consistent-type-definitions': ['error', 'type'],

      'eslint-comments/no-unlimited-disable': 'off',
      'eslint-comments/no-unused-disable': 'off',

      'antfu/if-newline': 'off',

      'no-unused-vars': 'off',
      'unused-imports/no-unused-vars': 'warn',

      'no-console': 'off',

      'sort-imports': 'off',
      'import/order': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^\\u0000'], ['^node:'], ['^@?\\w'], ['^@/\\w'], ['^\\w'], ['^\\u0001', '^\\u0002']],
        },
      ],
      'simple-import-sort/exports': 'off',
      'import/no-duplicates': 'error',

      // Next.js
      '@next/next/no-html-link-for-pages': 'off',

      // TailwindCSS
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
    },
  },
];
