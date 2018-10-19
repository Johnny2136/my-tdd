module.exports = {
    moduleFileExtensions: ["js", "vue"],
    transform: {
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
        ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
    },
    moduleNameMapper: {
        "^vue$": "vue/dist/vue.common.js",
        "src/([^\\.]*).js$": "<rootDir>/src/$1.js",
        "src/([^\\.]*).vue$": "<rootDir>/src/$1.vue",
        "src/([^\\.]*)/([^\\.]*).vue$": "<rootDir>/src/$1/$2.vue",
        "quasar": "quasar-framework/dist/umd/quasar.mat.umd.min.js"
    },
    snapshotSerializers: ["jest-serializer-vue"],
    // testMatch: ["**/tests/unit/**/*.spec.js"],
    reporters: [
        "default", [
            "./node_modules/jest-html-reporter",
            {
                pageTitle: "Test Report"
            }
        ]
    ],
    testMatch: ["**/*.steps.js"]
};