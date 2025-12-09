import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import chaiFriendly from 'eslint-plugin-chai-friendly'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
      'chai-friendly': chaiFriendly,
    },
    languageOptions: {
      ecmaVersion: 9,
      sourceType: 'module',
      globals: {
        // Node.js globals
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'writable',
        console: 'readonly',
        Buffer: 'readonly',
        
        // Mocha globals
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        after: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js'],
        },
      },
    },
    rules: {
      ...prettierConfig.rules,
      'import/no-extraneous-dependencies': 'off',
      'eol-last': ['error', 'always'],
      'import/extensions': 'off',
      'no-shadow': 0,
      'no-unused-vars': 0,
      'prefer-destructuring': 0,
    },
  },
  {
    ignores: [
      'node_modules/',
      'coverage/',
      'dist/',
      '.history/',
      '.vscode/',
    ],
  },
]
