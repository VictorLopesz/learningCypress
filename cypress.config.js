const { defineConfig } = require("cypress");
//este arquivo serve para fazer configurações adicionais no cypress
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //configuração para definir rota principal para chegar a página principal de um determinado site
    baseUrl: "https://playground.cyskills.com.br",
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
