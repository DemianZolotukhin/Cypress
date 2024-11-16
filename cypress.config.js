const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://conduit.mate.academy',
    viewportWidth: 500,
    viewportHeight: 700,
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {
      // on('task', {
      //   async clear() {
      //     await clear()

      //     return null;
        // }
      // });
    },
  },
});
