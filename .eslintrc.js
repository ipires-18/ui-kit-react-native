module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
    // jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier/standard',
    'prettier/react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', 'jsx-a11y', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        arrowParens: 'always',
        trailingComma: 'none',
        endOfLine: 'auto'
      }
    ],
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image']
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'space-before-function-paren': 'off'
  },
  settings: {
    'import/resolver': {
      typescript: {},
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts']
    },
    react: {
      version: 'detect'
    }
  }
}
