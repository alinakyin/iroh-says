#!/usr/bin/env node

const quote = require('./');
const args = process.argv.splice(1);

if (args.indexOf('--all') !== -1) {
    console.log(quote.all);
} else {
    console.log(quote());
}