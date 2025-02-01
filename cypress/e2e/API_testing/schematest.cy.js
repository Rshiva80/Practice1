//install ajv ,This Cypress test is performing API response schema validation using AJV (Another JSON Schema Validator) to ensure that the response matches the expected structure.

const Ajv = require("ajv");

//Ajv is imported using require('ajv'), which is a library used for JSON schema validation.
//new Ajv() creates an instance of AJV that will be used to validate the API response.

const ajv = new Ajv();

describe("Schema Validation", () => {
  it("Schema validation against response", () => {
    cy.request({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
    .then((response) => {
      const schema = {
        $schema: "http://json-schema.org/draft-07/schema#",
        title: "Generated schema for Root",
        type: "array",
        items: {
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            title: {
              type: "string",
            },
            price: {
              type: "number",
            },
            description: {
              type: "string",
            },
            category: {
              type: "string",
            },
            image: {
              type: "string",
            },
            rating: {
              type: "object",
              properties: {
                rate: {
                  type: "number",
                },
                count: {
                  type: "number",
                },
              },
              required: ["rate", "count"],
            },
          },
          required: [
            "id",
            "title",
            "price",
            "description",
            "category",
            "image",
            "rating",
          ],
        },
      };

        const validate = ajv.compile(schema);
            const isValid = validate(response.body);
            expect(isValid).to.be.true;

    //   ajv.compile(schema); //Compiles the schema for validation.
    //   validate(response.body); //Validates the actual API response against the schema.
    //   expect(isvalue).to.be.true; // Assertion to check if the validation passes.
    });
  });
});
