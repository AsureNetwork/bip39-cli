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
  .action(options => {
    const wordlist = utils.parseWordlistOption(options);

    console.log(bip39.generateMnemonic(null, null, wordlist));
    process.exit(0);
  });
