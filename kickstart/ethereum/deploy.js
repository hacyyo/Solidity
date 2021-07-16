const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'boat useless shove youth hundred autumn shuffle common oppose intact unit kick',
    'https://ropsten.infura.io/v3/8675d296c83b44a98424f8da9b237eedß'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attemping to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode})
        .send({ gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to', result.options.address);
};
deploy();