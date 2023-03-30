const { defineConfig } = require('cypress')
const webpack = require('@cypress/webpack-preprocessor')
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor')

module.exports = defineConfig({
    e2e: {
        specPattern: 'cypress/e2e/*.feature',
        supportFile: false,
        baseUrl: 'https://telnyx.com',
        video: false,
        screenshotOnRunFailure: false,
        viewportWidth: 1920,
        viewportHeight: 1080,
        defaultCommandTimeout: 20 * 1000,
        setupNodeEvents: async function (on, config) {
            await addCucumberPreprocessorPlugin(on, config);
            on('file:preprocessor', webpack({
                webpackOptions: {
                    resolve: { extensions: ['.ts', '.js'] },
                    module: {
                        rules: [{
                            test: /\.feature$/,
                            use: [{
                                loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                                options: config
                            }]
                        }]
                    }
                }
            }))
            return config
        }
    }
})