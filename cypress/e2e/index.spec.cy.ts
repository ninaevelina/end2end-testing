import { should } from "chai";

beforeEach(() => {
  cy.visit('/');
});

afterEach(() => {
  cy.reload();
});

describe('testing index.html-file', () => {
  it('should show document title ', () => {
    cy.visit('http://localhost:1234');
    cy.title().should('eq', 'Async testing');
  })
});

it('should show form-element', () => {
  cy.visit('http://localhost:1234');
  cy.get("form").should("have.id", "searchForm");
});

it('should submit form', () => {
  cy.get("form").submit();
});

it('should be able to type in input-element', () => {
  cy.visit('http://localhost:1234');
  cy.get("input").type("Spider").should("have.value", "Spider");
  cy.reload();
});

it('should be able to search with input value Spider', () => {
  cy.intercept("GET", "http://omdbapi.com/*", {fixture: "movieDataMock"}).as("movieSearch");
  cy.get("input").type("Spider").should("have.value", "Spider");
  cy.get("button").click();
  cy.wait("@movieSearch").its("request.url").should("contain", "Spider");
  cy.reload();
});

it('should display ten divs in movie-container and its inner appended elements', () => {
  cy.intercept("GET", "http://omdbapi.com/*", {fixture: "movieDataMock"}).as("movieSearch");
  cy.get("input").type("Spider").should("have.value", "Spider");
  cy.get("button").click();
  cy.get("#movie-container > .movie").should("have.length", 10);
  cy.get(".movie > h3").should("have.length", 10);
  cy.get(".movie > img").should("have.length", 10);
  cy.get("img").should("have.attr", "src");
  cy.get("img").should("have.attr", "alt");

});

it('should displayNoMessage', () => {
  cy.visit('http://localhost:1234');
  cy.get("input").type("S");
  cy.get("button").click();
  cy.get("p").contains("sökresultat");
});

it('should get no results, no data "gotten"', () => {
  cy.intercept("GET", "http://omdbapi.com/*", {fixture: "arrayMock"});
  cy.get("form").submit();
  cy.get("#movie-container > div").should("have.length", 0);
});

it('should validate form with empty input value', () => {
  cy.get("form").submit();
  cy.get('input:invalid').should('have.length', 0);
  cy.get("p").contains("sökresultat");
});




it('should get errormsg404', () => {

  cy.request({
  method: 'GET',
  url: 'http://omdbapi.com/?apikey=416ed51a&s=%',
  failOnStatusCode: false,

}).as('error');
cy.get('@error').its('status').should('equal', 404);
});