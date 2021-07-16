import Web3 from 'web3';

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined"){
    //We are in the browser and metamask is running.
    window.ethereum.request({ method: "eth_requestAccounts"});

    web3 = new Web3(window.ethereum);
} else {
    //We are on the server *or* user is not running metamask.

    const provider = new Web3.providers.HttpProvider(
        'https://ropsten.infura.io/v3/8675d296c83b44a98424f8da9b237eedß'
    );
    web3 = new Web3(provider);
}

export default web3;