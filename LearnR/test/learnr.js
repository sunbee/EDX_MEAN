// JavaScript File
var expect = require("chai").expect;
var learnr = require("../app/learnr");

describe("Get a quiz question at random", function() {
    describe("Get a question id at random", function() {
        var id = getRandomID();
        expect(id).to.not.be.null;
    });
    describe("Pull out a quiz question with an id", function() {
        var question = getQuizQuestion(id);
        expect(question).to.not.be.null;
    });
});

describe("Submit response to a quiz question", function() {
    
});

describe("Get assessment and the lesson", function() {
    describe("Get the assessment", function() {
        
    });
});