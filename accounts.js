"use strict";

const program = require("commander");
const bip39 = require("bip39");
const HDKey = require("ethereumjs-wallet/hdkey");

program
  .command("accounts <mnemonic>")
  .alias("acc")
  .description("print accounts with public address and private key")
  .option("-c, --count <count>", "number of accounts", (v) =>  parseInt(v), 5)
  .action(function(mnemonic, options) {
    if (isNaN(options.count) || options.count <= 0) {
      console.error(`Invalid count specified.`);
      process.exit(1);
    }

    if (mnemonic.trim().split(/\s+/g).length < 12) {
      console.error(
        `Invalid mnemonic specified. Mnemonic must be 12 words or more separated by a space.`
      );
      process.exit(1);
    }

    const hdKey = HDKey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));
    const walletHdpPath = "m/44'/60'/0'/0/";

    for (let i = 0; i < options.count; i++) {
      const wallet = hdKey.derivePath(walletHdpPath + i).getWallet();
      const address = "0x" + wallet.getAddress().toString("hex");
      const privateKey = wallet.getPrivateKey().toString("hex");

      console.log(address, privateKey);
    }

    process.exit(0);
  });
