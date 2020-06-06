module.exports = {
  collectCoverage: true,
  coverageReporters: ['html'],
  collectCoverageFrom: ['src/**/*.js'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 10,
      lines: 0,
      statements: 0,
    },
  },
}
