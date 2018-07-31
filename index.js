#!/usr/bin/env node

"use strict";

const program = require("commander");
const bip39 = require("bip39");
const packageJson = require("./package.json");

const validWordlists = Object.keys(bip39.wordlists);
const defaultWordlist = "english";

function parseWordlistOption(options) {
  const wordlist = bip39.wordlists[options.wordlist];

  if (options.wordlist && !wordlist) {
    console.error(`Invalid wordlist "${options.wordlist}" specified.`);
    process.exit(1);
  }

  return wordlist;
}

program.version(packageJson.version);

program
  .command("generate")
  .alias("gen")
  .description("generate a new bip39 mnemonic")
  .option(
    "-w, --wordlist <wordlist>",
    validWordlists.join(" "),
    defaultWordlist
  )
  .action(options => {
    const wordlist = parseWordlistOption(options);

    console.log(bip39.generateMnemonic(null, null, wordlist));
    process.exit(0);
  });

program
  .command("validate <mnemonic>")
  .alias("val")
  .description("validate the given bip39 mnemonic")
  .action(function(mnemonic) {
    if (bip39.validateMnemonic(mnemonic)) {
      console.log("Mnemonic is valid!");
      process.exit(0);
    } else {
      console.log("Mnemonic is invalid!");
      process.exit(1);
    }
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
