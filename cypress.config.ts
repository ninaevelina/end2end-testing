import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here 
      //baseURL: "localhost", skriv denna så att du kan skriva bara snedstreck i it-funktionerna
      
    },
    baseUrl: 'http://localhost:1234'
  },
});
