"use strict";

const program = require("commander");
const bip39 = require("bip39");
const utils = require("./utils");

program
  .command("generate")
  .alias("gen")
  .description("generate a new bip39 mnemonic")
  .option(
    "-w, --wordlist <wordlist>",
    utils.validWordlists.join(" "),
    utils.defaultWordlist
  )
  .option("--strength <strength>",
          "strength defaults to 128 (min), max is 256, must be a multiple of 32",
          128)
  .action(options => {
    const wordlist = utils.parseWordlistOption(options);

    console.log(bip39.generateMnemonic(options.strength, null, wordlist));
    process.exit(0);
  });
