#!/usr/bin/env node

"use strict";

const program = require("commander");
const packageJson = require("./package.json");

program.version(packageJson.version);

require("./generate");
require("./validate");
require("./accounts");

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
