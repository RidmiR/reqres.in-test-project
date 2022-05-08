# Reqres.in API test project

This repository creates to add the API test cases for all the CRUD operation which is in https://reqres.in/ 
This test project implemented with [cypress.io](https://www.cypress.io) test automation framework. 
 
## Pre Requisites

1. [Install Node js](https://nodejs.org/en/download/) (support: Node.js 8 and above)
2. Install npm 

## Setup build environment

1. Get the sample repo from below link listed

    git clone https://github.com/RidmiR/reqres.in-test-project.git

2. [Install Node js](https://nodejs.org/en/download/) (support: Node.js 8 and above)

3. Install Cypress via npm

    * cd /your/project/path

    * npm install cypress --save-dev
    
   This will install Cypress locally as a dev dependency for your project.

   For specific cypress version,

    * npm install --save-dev cypress@9.5.0

4. Install Reporting dependencies

   * npm install mocha --save-dev

   > mocha is used as a dependency library to create a custom reporter.
   
   * npm install cypress-multi-reporters --save-dev

   >Generate multiple mocha reports in a single mocha execution.
   
   * npm install mochawesome --save-dev
   >mochawesome generates a beautiful report in HTML format.

## Folder structure

1. **Integration** folder provides a place that writes out test cases. We can also create our folder under the integration directory and add out test cases under that.

3. **Plugins** contain the plugins or listeners. By default, Cypress will automatically include the plugins file
 “cypress/plugins/index.js” before every test it runs. You can programmatically alter the resolved configuration and environment variables using plugins.

4. **Support** writes customized commands or reusable methods that are available for usage in all of your spec/test
 files. This file runs before every single spec file. That’s why you don’t have to import this file in every single one of your spec files.  The “support” file is a great place to put reusable behavior such as Custom Commands or global overrides that you want to be applied and available to all of your spec files.

5. **Node_Modules** in the default project structure is the heart of the cypress project. All the node packages will be
 installed in the node_modules directory and will be available in all the test files. So, in a nutshell, this is the folder where NPM installs all the project dependencies.

6. **Cypress.json** is used to store different configurations. E.g., timeout, base URL or any other configuration. 

## Key features

#### Environment variables
cypress.env file use to set and get the environment variables.

> Sample usage: Cypress.env("baseUrl")

## Test execution

* Running test from GUI

Cypress runs tests in a unique interactive runner that allows you to see commands as they execute while also viewing the application under test.
> npx cypress open

* Running test from Command Line
    * Headless Mode
        * Run a single spec file
        > npx cypress run --spec "cypress/integration/examples/actions.spec.js"
        * Run multiple spec files
        > npx cypress run --spec "cypress/integration/examples/actions.spec.js, cypress/integration/examples/files.spec.js"
        * Run all spec files in a folder
        > npx cypress run --spec    "cypress/integration/examples/**/*"
        * Run all the spec files in the project
        > npx cypress run
        * for specifying your prefered browser: chrome, canary, chromium, or electron
        > cypress run --browser chrome

## Reports
In this test project I have integrated Mocha with Cypress to generate a report with a test execution summary.
Cypress is built on top of Mocha Javascript Framework, therefore any reporter built for Mocha can be used with Cypress.
* Report
Location,
> <REQRES.IN_TEST_PROJECT_HOME>/cypress/reports/mochareports/report.html

* Screenshots
Screenshot will be created at test failure.Location,
> <REQRES.IN_TEST_PROJECT_HOME>/cypress/reports/screenshots
