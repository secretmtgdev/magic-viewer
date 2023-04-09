module.exports = {
    roots: ['<rootDir>'],
    transform: {
      '^.+\\.ts?$': 'ts-jest',
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.(js|jsx)$': 'babel-jest',
      '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
    },
    testRegex: '(./tests/*/.*|(\\.|/)(test|spec))\\.js?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    clearMocks: true,
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    setupFiles: ['./.jest/storyshots-setup.js'],
    moduleNameMapper: { 
      '\\.(css|less)$': './tests/mocks/styleMock.js' 
    }
};
