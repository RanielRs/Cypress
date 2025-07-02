const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'fbcu49',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
