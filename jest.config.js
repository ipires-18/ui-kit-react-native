module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testMatch: ['**/+(*.)+(spec).+(ts)?(x)'],
  transform: {
    '^.+\\.(svg)$': 'jest-transform-stub',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  },
  modulePathIgnorePatterns: ['<rootDir>/scripts/'],
  collectCoverageFrom: [
    'packages/components/**/*.{ts,tsx}',
    '!packages/components/**/dist/**/*.{js,ts,tsx}',
    '!packages/components/index.tsx',
    '!packages/components/**/stories/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/ios/**',
    '!**/android/**',
    '!**/.storybook/**'
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: -10
    }
  }
}
