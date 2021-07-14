require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan recipe rural evil include indoor forget ghost'; 
let testAccounts = [
"0xe0a262e973589e7bc13ce8269b0fbf3cf5ae4bc00c4670f16e96b969779593d3",
"0xb97ea18765be97ef300b4a8cb9deda5b4b0fb315c9fee71134328d2be246ff91",
"0x7694468c5335b3666fd10ee7bbdc9197b7e9ecb3420a5f613cfc975f53a8ea43",
"0x656565a7e25901e868856ddab7623cdf4331e10c6bee6fe91702bc1fd6a96c98",
"0xd43f7077765eb519dc8fc20bad31583e6760ebd5a56e2abdc7857f63fb71d3b5",
"0x31068ebd949f4794ccc73ad8f9f44bdb4b3ba1a32b82aba6c1475e1cc7737622",
"0x110e23e99365171e4df247d2ef9ffec8117d55ead2c57817d16b71b63450d23a",
"0x10d7e78d860311d4c7ffa7fcae783bcb3789a106cdcb442d87cd7333263e3783",
"0xa0441b14fd80bb6d1012f5b0572bbb2ecfa42a5676eb94528b5df22eae0a8370",
"0x8672f9a9cd4aabfb5f12421ef1de71e0ef423de14d86a3dc3507660e0970c2cb"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

