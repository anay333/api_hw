const { id, username, firstName, lastName, email, password, phone, userStatus } = require('../fixtures/user.json');

describe("Api user tests", () => {

    it("Create a new user", () => {
        cy.createUser(id, username, firstName, lastName)
        .then((response) => {
                expect(response.status).to.be.eql(200);
        });
    });
    
    it("Update user", () => {
            cy.createUser(id, username, firstName, lastName);
            cy.updateUser(id, username, firstName, lastName, email, password, phone, userStatus)
            .then((response) => {
                expect(response.status).to.be.eql(200);
            });
        })

    it("Should delete user", () => {
        cy.createUser(id, username, firstName, lastName);
        cy.deleteUser(username)
        .then((response) => {
            expect(response.body.lastName).to.not.equal(lastName);
            expect(response.status).eq(200);
        });
    });
});