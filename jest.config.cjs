module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",  // Include source files for coverage
    "tests/**/*.{js,jsx,ts,tsx}" // Include test files for coverage, adjust if needed
  ],
  coverageReporters: ["lcov", "text"],  // Coverage report formats
  testMatch: [
    "**/tests/**/*.test.js",   // Matches .test.js files in the tests folder
    "**/tests/**/*.spec.js"    // Matches .spec.js files in the tests folder
  ],
  coverageDirectory: "coverage", // Ensure coverage is stored in the "coverage" directory
  transform: { '^.+\\.js$': 'babel-jest', }
};