

var expect = require("chai").expect;
var assert = require("chai").assert;
var primes = require('./getprimes');

"use strict";

describe("primes: ", function() {

    describe("handles values less than 0", function() {

        it("-2 aught to return [RangeError: enter a positive number]", function()  {
            assert.equal( primes(-2),  'RangeError: enter a positive number');
        });

        it("-2000 aught to return [RangeError: enter a positive number]", function() {
            assert.equal(primes(-2000), 'RangeError: enter a positive number');
        });

        it("-65 and -300 should return [RangeError: enter a positive number]", function() {
            assert.equal((primes(-65), primes(-300)), "RangeError: enter a positive number");
        });
    });

    describe("handles non-numeric input", function(){

        it("timothy aught to return 'non-numeric characters are not accepted'", function(){
            assert.equal(primes("timothy"),'RangeError: non-numeric characters are not accepted');
        });

        it('"" should return ""non-numeric characters are not accepted"', function(){
            assert.equal(primes(""), "RangeError: non-numeric characters are not accepted");
        });

        it("[] should return 'non-numeric characters are not accepted'", function(){
            assert.equal(primes([]), "RangeError: non-numeric characters are not accepted");
        });
        it("empty input should return 'non-numeric characters are not accepted'", function(){
            assert.equal(primes( ), "RangeError: non-numeric characters are not accepted");
        });
    });

    describe("handle input equivalent to zero", function(){

        it("0 aught to return 'enter a number greater than 0'", function(){
            assert.deepEqual(primes(0), 'enter a number greater than 0');
        });

        it("00 aught to return 'enter a number greater than 0'", function(){
            assert.deepEqual(primes(00), 'enter a number greater than 0');
        });
    });
    describe('handle input equivalent to 1,', function(){
        it('1 aught to return "is not a prime number"', function(){
            assert.equal(primes(1), 'is not a prime number');
        });
        it('01 aught to return"is not a prime number"', function(){
            assert.equal(primes(01), 'is not a prime number');
        });
    });

    describe('handle input greater than 1', function(){
        it('2 aught to return "2"', function(){
            assert.equal(primes(2), [2]);
        });
        it('05 aught to return "2,3,5"', function(){
            assert.equal(primes(05), [2,3,5]);
        });
        it('21 aught to return "2,3,5,7,11,13,17,19"', function(){
            assert.equal(primes(21), [2,3,5,7,11,13,17,19]);
        });
    });
});