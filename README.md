<div align="center">
  <h3>Telnyx + Cypress + Cucumber</h3>

  <p>
    Automation testing of the <a href="https://telnyx.com">Telnyx</a> website with Cypress + Cucumber.
  </p>
</div>

<br/>

<h2>Versions:</h2>
• Node JS - 18.14.2
<br/>
• NPM - 9.5.0
<br/>
• Cypress - 12.8.1

<br/>
<br/>

<h2>How to run on your local machine</h2>

Clone this repository
```
git clone https://github.com/ddpolianskyi/telnyx-cypress-cucumber.git
```
Install all requirement dependencies
```
npm install
```
Run tests in any browser
```
npm run test:chrome
npm run test:firefox
npm run test:edge
npm run test:electron
```
Open HTML report
```
npm run report:open
```
[Notice] If you will run tests in Cypress UI using ```npx cypress open```, then HTML report will not be created.