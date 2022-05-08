describe('01.01 - Check User details APIs', () => {

  const baseUrl = Cypress.env("baseUrl"),
    resourceContext = "/api/users",
    SuccessStatusCode = 200,
    supportUrl = "https://reqres.in/#support-heading",
    supportText = "To keep ReqRes free, contributions towards server costs are appreciated!";

  context("GET /api/users", function () {

    it('01.01.01 - Get list of user details', () => {

      cy.getUserDetails(baseUrl, resourceContext, "?page=2", true).then(response => {
        expect(response.status).to.eq(SuccessStatusCode);

        const userlist = response.body.data

        for (let i = 0; i < userlist.length; i++) {
          cy.getSingleUserData(baseUrl, resourceContext, "/" + userlist[i].id).then((singleUserResponse) => {

            expect(singleUserResponse.status).to.eq(200)

            expect(singleUserResponse.body.data.id).to.eq(userlist[i].id)
            expect(singleUserResponse.body.data.email).to.eq(userlist[i].email)
            expect(singleUserResponse.body.data.first_name).to.eq(userlist[i].first_name)
            expect(singleUserResponse.body.data.last_name).to.eq(userlist[i].last_name)
            expect(singleUserResponse.body.data.avatar).to.eq(userlist[i].avatar)

            expect(singleUserResponse.body.support.url).to.eq(supportUrl)
            expect(singleUserResponse.body.support.text).to.eq(supportText)

          })
        }
      });
    })

    it('01.01.02 - Get single user details', () => {

      cy.getSingleUserData(baseUrl, resourceContext, "/2", true).then(response => {
        expect(response.status).to.eq(SuccessStatusCode);

        cy.getUserDetails(baseUrl, resourceContext, "", true).then(userListResponse => {
          expect(userListResponse.status).to.eq(SuccessStatusCode)

          const userDetails = userListResponse.body.data

          expect(response.body.data.id).to.eq(userDetails[1].id)
          expect(response.body.data.email).to.eq(userDetails[1].email)
          expect(response.body.data.first_name).to.eq(userDetails[1].first_name)
          expect(response.body.data.last_name).to.eq(userDetails[1].last_name)
          expect(response.body.data.avatar).to.eq(userDetails[1].avatar)

        })
      });
    })

    it('01.01.03 - Signle user not found', () => {

      cy.getSingleUserData(baseUrl, resourceContext, "/23", false).then(response => {
        expect(response.status).to.eq(404);

      });
    })
  })
});
