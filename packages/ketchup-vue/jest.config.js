module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue", "ts", "tsx"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
  ],
  testURL: "http://localhost/",
  reporters: [
    "default",

    [
      "jest-junit",
      {
        output: "target/test/unit/junit/junit.xml",
        classNameTemplate: "VueJsf unit - {classname}",
        titleTemplate: "{classname} - {title}"
      }
    ],

    [
      "./node_modules/jest-html-reporter",
      {
        pageTitle: "Jest Unit Test Report",
        outputPath: "target/test/unit/html/index.html"
      }
    ]
  ],
  coverageReporters: ["text", "cobertura", "html"],
  coverageDirectory: "target/test/unit/coverage",
  // todo: rise them!
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 1,
      lines: 1,
      statements: 1
    }
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.vue"]
};
