const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const { driver } = require('../support/web_driver');

Given(/^Browse to web site "([^"]*)"$/, async function(url) {
    await driver.get(url);
});