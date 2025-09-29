import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config([
  globalIgnores(['dist']),

  {
    files: ['vite.config.ts', 'eslint.config.js'],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-console': 'off',
      'react/prop-types': 'off',
    },
  },

  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['vite.config.ts'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactPlugin.configs.flat.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    plugins: {
      react: reactPlugin,
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: './tsconfig.app.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: ['external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          warnOnUnassignedImports: true,
        },
      ],
      'import/prefer-default-export': 'off',
      'import/no-cycle': 'off',

      semi: ['error', 'always'],
      indent: 'off',
      'max-len': [
        'error',
        {
          code: 80,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],
      quotes: ['error', 'single', { avoidEscape: true }],
      'jsx-quotes': ['error', 'prefer-double'],
      'object-shorthand': 'error',
      'arrow-parens': 'off',
      'arrow-body-style': 'off',

      'react/prop-types': 'off',
      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never' },
      ],
      'react/jsx-max-props-per-line': [
        'error',
        { maximum: { single: 3, multi: 1 } },
      ],
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      'react/jsx-closing-bracket-location': 'error',
      'react/jsx-props-no-spreading': 'off',
      'react/destructuring-assignment': 'off',
      'react/react-in-jsx-scope': 'off',

      'no-console': ['error', { allow: ['error', 'warn', 'info'] }],
      'no-trailing-spaces': ['error', { skipBlankLines: true }],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'no-underscore-dangle': 'off',
      'no-param-reassign': 'off',
      'no-confusing-arrow': 'off',

      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/default-param-last': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

      'func-names': ['error', 'always', { generators: 'never' }],
      'implicit-arrow-linebreak': 'off',
      'function-paren-newline': 'off',
      camelcase: 'off',

      'class-methods-use-this': 'off',
      'lines-between-class-members': [
        'error',
        'always',
        { exceptAfterSingleLine: true },
      ],
    },
  },

  {
    files: ['**/*.js'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'no-console': 'off',
      'react/prop-types': 'off',
    },
  },
]);
