describe('01.05 - User logins', () => {

    const baseUrl = Cypress.env("baseUrl"),
        resourceContext = "/api/login";

    const successUserLoginDetails = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    },
        unsuccessUserLoginDetails = {
            "email": "peter@klaven"
        };

    context("POST /api/register", function () {

        it('01.05.01 - Successfull User Login', () => {

            cy.userLogin(baseUrl, resourceContext, successUserLoginDetails, true).then(response => {
                expect(response.status).to.eq(200);
            });
        })

        it('01.05.02 - Unscussfull User login', () => {

            cy.userLogin(baseUrl, resourceContext, unsuccessUserLoginDetails, false).then(response => {
                expect(response.status).to.eq(400);

                expect(JSON.stringify(response.body)).to.eq("{" + '"error"' + ":" + '"Missing password"' + "}");
            });
        })

        it('01.05.03 - Login delay response', () => {

            cy.intercept(
                {
                    method: 'GET',
                    url: 'https://reqres.in/api/users?delay=3',
                },
                {
                    statusCode: 200,
                    delay: 3000,
                },
            ).as("delayResponse");
        })
    })
})
