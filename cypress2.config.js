const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "iq5i11",
  e2e: {
    baseUrl: "http://localhost:3000",
    // retries: 2,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 846,
    viewportHeight: 414,
  },
});