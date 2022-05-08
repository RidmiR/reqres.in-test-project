describe('01.03 - Get Resource details', () => {

  const baseUrl = Cypress.env("baseUrl"),
    resourceContext = "/api/unknown";

  context("POST /api/unknown", function () {

    it('01.03.01 - Get Resource details', () => {

      cy.getResourceDetails(baseUrl, resourceContext, false).then(response => {
        expect(response.status).to.eq(200);

        const resourcelist = response.body.data

        for (let i = 0; i < resourcelist.length; i++) {
          cy.getSingleResourceDetails(baseUrl, resourceContext, "/" + resourcelist[i].id).then((singleResourceResponse) => {

            expect(singleResourceResponse.status).to.eq(200)

            expect(singleResourceResponse.body.data.name).to.eq(resourcelist[i].name)
            expect(singleResourceResponse.body.data.year).to.eq(resourcelist[i].year)
            expect(singleResourceResponse.body.data.color).to.eq(resourcelist[i].color)
            expect(singleResourceResponse.body.data.pantone_value).to.eq(resourcelist[i].pantone_value)

          })
        }
      });
    })

    it('01.03.02 - Get Single Resource Details', () => {

      cy.getSingleResourceDetails(baseUrl, resourceContext, "/2", false).then(response => {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response.body.data))

        cy.getResourceDetails(baseUrl, resourceContext, "", true).then(resourceListResponse => {
          expect(resourceListResponse.status).to.eq(200)

          const resourceList = resourceListResponse.body.data

          expect(response.body.data.name).to.eq(resourceList[1].name)
          expect(response.body.data.year).to.eq(resourceList[1].year)
          expect(response.body.data.color).to.eq(resourceList[1].color)
          expect(response.body.data.pantone_value).to.eq(resourceList[1].pantone_value)

        })
      });
    })


    it('01.03.03 - Single resource not found', () => {

      cy.getResourceDetails(baseUrl, resourceContext, "/23", false).then(response => {
        expect(response.status).to.eq(404);

      });
    })
  })
})
