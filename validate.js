"use strict";

const program = require("commander");
const bip39 = require("bip39");
const utils = require("./utils");

program
  .command("validate <mnemonic>")
  .alias("val")
  .description("validate the given bip39 mnemonic")
  .option(
    "-w, --wordlist <wordlist>",
    utils.validWordlists.join(" "),
    utils.defaultWordlist
  )
  .action(function(mnemonic, options) {
    const wordlist = utils.parseWordlistOption(options);

    if (bip39.validateMnemonic(mnemonic, wordlist)) {
      console.log("Mnemonic is valid!");
      process.exit(0);
    } else {
      console.log("Mnemonic is invalid!");
      process.exit(1);
    }
  });
