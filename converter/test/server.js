var expect = require("chai").expect;
var request = require("request");

describe("Color code converter API", function() {
    describe("RGB to Hex conversion", function() {
        
        var url = "https://sunbeemongo-sunbee.c9users.io/rgbToHex?red=255&green=255&blue=255";
        
        it("Returns status 200", function(done) {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            })
        });
        
        it("Returns the color in hex", function(done) {
            request(url, function(error, response, body) {
                expect(body).to.equal("ffffff");
                done();
            })
        });
        
    });
    
    describe("Hex to RGB conversion", function() {
        
        var url = "https://sunbeemongo-sunbee.c9users.io/hexToRgb?hex=00ff00";
        
        it("Returns status 200", function(done) {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            })
        });
        
        it("Returns the color in RGB", function(done) {
            request(url, function(error, response, body) {
               expect(body).to.equal("[0,255,0]"); 
               done();
            });
        });
        
    });
});