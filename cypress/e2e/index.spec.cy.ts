import { should } from "chai";

beforeEach('should visit the webpage before each test', () => {
  cy.visit('/');
});

afterEach('should reload the page after each test', () => {
  cy.reload();
});

describe('testing index.html-file', () => {
  it('should show document title ', () => {
    cy.title().should('eq', 'Async testing');
  })
});

it('should show form-element', () => {
  cy.get("form").should("have.id", "searchForm");
});

it('should submit form', () => {
  cy.get("form").submit();
});

it('should be able to type in input-element', () => {
  cy.visit('http://localhost:1234');
  cy.get("input").type("Spider").should("have.value", "Spider");
});

it('should be able to search with input value Spider', () => {
  cy.intercept("GET", "http://omdbapi.com/*", {fixture: "movieDataMock"}).as("movieSearch");
  cy.get("input").type("Spider").should("have.value", "Spider");
  cy.get("button").click();
  cy.wait("@movieSearch").its("request.url").should("contain", "Spider");
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

it('should run displayNoMessage-fn', () => {
  cy.get("input").type("S");
  cy.get("button").click();
  cy.get("p").contains("Inga sökresultat");
});

it('should get no results, no data to be displayed', () => {
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

it('should display html using actual API-data', () => {
  cy.get("input").type("Drive").should("have.value", "Drive");
  cy.get("form").submit();
  cy.get(".movie > h3").contains("Drive");
});