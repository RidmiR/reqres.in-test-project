describe('01.02 - Check user managment APIs', () => {

    const baseUrl = Cypress.env("baseUrl"),
        resourceContext = "/api/users";

    const userDetails = {
        "name": "morpheus",
        "job": "leader"
    },
        updateUserDetails = {
            "name": "morpheus",
            "job": "zion resident"
        };

    context("POST /api/users", function () {

        it('01.02.01 - Create User', () => {

            cy.createUser(baseUrl, resourceContext, userDetails, true).then(response => {
                expect(response.status).to.eq(201);

                expect(JSON.stringify(response.body.name).slice(1, -1)).to.eq(userDetails.name)
                expect(JSON.stringify(response.body.job).slice(1, -1)).to.eq(userDetails.job)
            });
        })

        it('01.02.02 - Update User', () => {

            cy.updateUser(baseUrl, resourceContext, updateUserDetails, "2", true).then(response => {
                expect(response.status).to.eq(200);

                expect(JSON.stringify(response.body.name).slice(1, -1)).to.eq(updateUserDetails.name)
                expect(JSON.stringify(response.body.job).slice(1, -1)).to.eq(updateUserDetails.job)
            });
        })

        it('01.02.03 - Patch User', () => {

            cy.updateUser(baseUrl, resourceContext, updateUserDetails, "2", true).then(response => {
                expect(response.status).to.eq(200);

                expect(JSON.stringify(response.body.name).slice(1, -1)).to.eq(updateUserDetails.name)
                expect(JSON.stringify(response.body.job).slice(1, -1)).to.eq(updateUserDetails.job)
            });
        })

        it('01.02.04 - Delete User', () => {

            cy.deleteUser(baseUrl, resourceContext, "2", true).then(response => {
                expect(response.status).to.eq(204);
            });
        })

    })
})
