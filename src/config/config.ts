import algosdk from "algosdk";

const algodToken = "a".repeat(64);
const server: string = "http://localhost";
const port: string = "4001";

const mnemonic: string =
    "burden heavy mistake april govern cook melt response put deputy conduct entire blur wide foot future muscle daring reward dismiss final raw worth about sudden";

    export function getClient(): algosdk.Algodv2 {
        let client = new algosdk.Algodv2(algodToken, server, port);
        return client;
    }

    export function getAccount(): algosdk.Account {
        let account = algosdk.mnemonicToSecretKey(mnemonic);
        return account;
    }
