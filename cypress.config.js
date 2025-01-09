const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xbit9g',
  env : {

    urlTest : "https://rahulshettyacademy.com",

  } ,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
