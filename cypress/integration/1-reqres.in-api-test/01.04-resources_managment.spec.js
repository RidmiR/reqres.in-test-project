describe('01.04 - Check Resource managment APIs', () => {

    const baseUrl = Cypress.env("baseUrl"),
        resourceContext = "/api/register";

    const successfulResourceData = {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    },
        unsuccefullresourceData = {
            "email": "sydney@fife"
        };

    context("POST /api/register", function () {

        it('01.04.01 - Create succefull resource', () => {

            cy.createReource(baseUrl, resourceContext, successfulResourceData, true).then(response => {
                expect(response.status).to.eq(200);
                
            });
        })

        it('01.04.02 - Create unsuccefull resource', () => {

            cy.createReource(baseUrl, resourceContext, unsuccefullresourceData, false).then(response => {
                expect(response.status).to.eq(400);

                expect(JSON.stringify(response.body)).to.eq("{" + '"error"' + ":" + '"Missing password"'+"}");

            });
        })
    })
})
