Cypress.Commands.add("createUser", (id, username, firstName, lastName) => {
  cy.request({
        url: "https://petstore.swagger.io/v2/user",
        method: "POST",
        body: {
          "id": id,
          "username": username,
          "firstName": firstName,
          "lastName": lastName,
        }
  })
});

Cypress.Commands.add('updateUser', (id, username, firstName, lastName, email, password, phone, userStatus) => {
  cy.request({
      url: "https://petstore.swagger.io/v2/user/Aleksei222",
      method: "PUT",
      body: {
          "id": id,
          "username": username,
          "firstName": firstName,
          "lastName": lastName,
          "email": email,
          "password": password,
          "phone": phone,
          "userStatus": userStatus
      }
  })
});

Cypress.Commands.add('deleteUser', (username) => {
  cy.request({
      method: "DELETE",
      url: `https://petstore.swagger.io/v2/user/${username}`,
  })
});
  