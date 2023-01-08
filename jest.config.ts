import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  testRegex: '(/__tests__/.|(\\.|/)(test|spec))\\.tsx$',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
    '!src/**/mocks.{jsx,ts,tsx}',
    '!src/**/utils.test.{jsx,ts,tsx}'
  ],
  coveragePathIgnorePatterns: ['node_modules'],
  coverageReporters: ['text', 'json', 'html'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js'
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
};

export default jestConfig;
