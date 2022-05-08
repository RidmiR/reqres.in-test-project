/**
 * This commad use to Get the User details
 * @param  {string} baseUrl - Base URL of the service
 * @param  {string} resource - resource context
 * @param  {string} params - additional parameter of the API
 * @param  {boolean} failOnStatusCode -  Whether to fail on response codes other than 2xx and 3xx
 */
Cypress.Commands.add("getUserDetails", (baseUrl, resource, params, failOnStatusCode) => {

    cy.log("The end point : " + baseUrl + resource + params +  " is calling.");

    return cy.request({

        method: "GET",
        url: baseUrl + resource + params,
        failOnStatusCode: failOnStatusCode,
        "headers": {
            "Content-Type": "application/json"
        }
    });
});

/**
 * This commad use to Get the Single User details
 * @param  {string} baseUrl - Base URL of the service
 * @param  {string} resource - resource context
 * @param  {string} params - additional parameter of the API
 * @param  {boolean} failOnStatusCode -  Whether to fail on response codes other than 2xx and 3xx
 */
Cypress.Commands.add("getSingleUserData", (baseUrl, resource, params, failOnStatusCode) => {

    cy.log("The end point : " + baseUrl + resource + params + " is calling.");

    return cy.request({

        method: "GET",
        url: baseUrl + resource + params,
        failOnStatusCode: failOnStatusCode,
        "headers": {
            "Content-Type": "application/json"
        }
    });
});

/**
 * This commad use to Get the Resources details
 * @param  {string} baseUrl - Base URL of the service
 * @param  {string} resource - resource context
 * @param  {string} params - additional parameter of the API
 * @param  {boolean} failOnStatusCode -  Whether to fail on response codes other than 2xx and 3xx
 */
Cypress.Commands.add("getResourceDetails", (baseUrl, resource, params, failOnStatusCode) => {

    cy.log("The end point : " + baseUrl + resource + " is calling.");

    return cy.request({

        method: "GET",
        url: baseUrl + resource + params,
        failOnStatusCode: failOnStatusCode,
        "headers": {
            "Content-Type": "application/json"
        }
    });
});

/**
 * This commad use to Get the Single Resource detail
 * @param  {string} baseUrl - Base URL of the service
 * @param  {string} resource - resource context
 * @param  {string} params - additional parameter of the API
 * @param  {boolean} failOnStatusCode -  Whether to fail on response codes other than 2xx and 3xx
 */
Cypress.Commands.add("getSingleResourceDetails", (baseUrl, resource, params, failOnStatusCode) => {

    cy.log("The end point : " + baseUrl + resource + params + " is calling.");

    return cy.request({

        method: "GET",
        url: baseUrl + resource + params,
        failOnStatusCode: failOnStatusCode,
        "headers": {
            "Content-Type": "application/json"
        }
    });
});

/**
 * This commad use to create a new user
 * @param  {string} baseUrl - Base URL of the service
 * @param  {string} resource - resource context
 * @param  {string} reqBody - user details request body
 * @param  {boolean} failOnStatusCode -  Whether to fail on response codes other than 2xx and 3xx
 */
Cypress.Commands.add("createUser", (baseUrl, resource, reqBody, failOnStatusCode) => {

        return cy.request({
            "method": "POST",
            "url": baseUrl + resource,
            "failOnStatusCode": failOnStatusCode,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": reqBody
        });
});

/**
 * This commad use to update the uder details
 * @param  {string} baseUrl - Base URL of the service
 * @param  {string} resource - resource context
 * @param  {string} reqBody - updated user details request body
 * @param  {boolean} failOnStatusCode -  Whether to fail on response codes other than 2xx and 3xx
 */
Cypress.Commands.add("updateUser", (baseUrl, resource, reqBody, failOnStatusCode) => {

    return cy.request({
        "method": "PUT",
        "url": baseUrl + resource,
        "failOnStatusCode": failOnStatusCode,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": reqBody
    });
});

/**
 * This commad use to delete a user
 * @param  {string} baseUrl - Base URL of the service
 * @param  {string} resource - resource context
 * @param  {string} params - additional parameter of the API
 * @param  {boolean} failOnStatusCode -  Whether to fail on response codes other than 2xx and 3xx
 */
Cypress.Commands.add("deleteUser", (baseUrl, resource, params, failOnStatusCode) => {

        return cy.request({

            "method": "DELETE",
            "url": baseUrl + resource + params,
            "failOnStatusCode": failOnStatusCode,
        });

});

/**
 * This commad use to delete a user
 * @param  {string} baseUrl - Base URL of the service
 * @param  {string} resource - resource context
 * @param  {string} params - additional parameter of the API
 * @param  {boolean} failOnStatusCode -  Whether to fail on response codes other than 2xx and 3xx
 */
Cypress.Commands.add("createReource", (baseUrl, resource, reqBody, failOnStatusCode) => {

    return cy.request({
        "method": "POST",
        "url": baseUrl + resource,
        "failOnStatusCode": failOnStatusCode,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": reqBody
    });

});

/**
 * This commad use to do a user login
 * @param  {string} baseUrl - Base URL of the service
 * @param  {string} resource - resource context
 * @param  {string} reqBody - login uder details request body
 * @param  {boolean} failOnStatusCode -  Whether to fail on response codes other than 2xx and 3xx
 */
Cypress.Commands.add("userLogin", (baseUrl, resource, reqBody, failOnStatusCode) => {

    return cy.request({
        "method": "POST",
        "url": baseUrl + resource,
        "failOnStatusCode": failOnStatusCode,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": reqBody
    });
});

/**
 * This commad use to do a user login
 * @param  {string} baseUrl - Base URL of the service
 * @param  {string} resource - resource context
 * @param  {string} reqBody - login uder details request body
 * @param  {boolean} failOnStatusCode -  Whether to fail on response codes other than 2xx and 3xx
 */
Cypress.Commands.add("userDetailsDelayResponse", (baseUrl, resource, param, delayTime, failOnStatusCode) => {

    return cy.request({
        "method": "GET",
        "url": baseUrl + resource + param,
        "failOnStatusCode": failOnStatusCode,
        "headers": {
            "Content-Type": "application/json"
        }
    });
});
