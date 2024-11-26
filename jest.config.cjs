module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "tests/**/*.{js,jsx,ts,tsx}" // Adjust if needed
  ],
  coverageReporters: ["lcov", "text"],
  testMatch: [
    "**/tests/**/*.test.js",    // This matches any .test.js files in the tests folder
    "**/tests/**/*.spec.js"     // This matches any .spec.js files in the tests folder
  ]
};