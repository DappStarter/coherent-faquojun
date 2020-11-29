require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remain slow imitate problem surround typical'; 
let testAccounts = [
"0x8c09115f248d7dc4f3cb4455fc71136f9a19700a961f3ca27681bbee0b2090a8",
"0xb2785d90195f6ac933ce0d25a7c1e9f1666d4549f6eb82b51f936c31b9139ba1",
"0xc182bae046d21ba09ce6b667dee7a4ea4b0c76252875ee0a5becd9c0c5936608",
"0x57d2591b8b0af5a87c22d00d285feeb8a2e5fbbc5e013dfc8d9b878cea98c746",
"0x56055f19e5a8e6616b35c0f90f9a41dbe22f9cac2ca8cdea956fd4bbff833f86",
"0x3ddbe8f34bcef953207debfad04e9bb12d44d218e04d3ef30d32aa9f9b3549eb",
"0xa6a69041eec174ed87bf301ea19093f76d0ae11dfcefd65ad214dc55b06c88f9",
"0x6f7626b3aa0915b806f8e1f81146cfd41c144b3588eda8c7146ac2d0171e2ef5",
"0x9918fc717e61a9a66a22dbd935c5f4c08bbf59e5cc8d2af531e1248a72d3833b",
"0x4861edaefeb96ae5e476b659e1d195661597b9200ec4f0dadfbf80dbb9e889c3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
