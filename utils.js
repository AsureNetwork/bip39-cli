"use strict";

const bip39 = require("bip39");

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

module.exports = {
  validWordlists,
  defaultWordlist,
  parseWordlistOption
};
