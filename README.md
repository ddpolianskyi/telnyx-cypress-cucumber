# Telnyx Cypress

Testing website: https://telnyx.com

## Versions:

- Node - latest
- cypress - 10.6.0
- cypress-cucumber-preprocessor - 4.3.1
- cypress-multi-reporters - 1.6.1
- mocha - 10.0.0
- mochawesome - 7.1.3
- mochawesome-merge - 4.2.1
- @badeball/cypress-cucumber-preprocessor - 12.1.0
- @cypress/webpack-preprocessor - 5.12.2

## Run tests on Github

- Tests for desktop starts automaticly by Cypress Github Action: [cypress-io/github-action@v2](https://github.com/marketplace/actions/cypress-io)

## Run tests on local machine

- You can run tests by using these command:

```bash
## Clone this Github repository
git clone https://github.com/ddpolianskyi/telnyx-cypress-cucumber.git

## Redirect to folder
cd telnyx-cypress-cucumber

## Run tests for desktop
npm run test
## or for mobile
npm run test --config-file cypress-mobile.config.js

## Run commands
npm run report:merge
npm run report:generate
```

Then open the "public" folder that contain HTML report, that you can open by opening index.html file in any browser.
