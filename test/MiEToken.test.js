const { expect } = require('chai');

let miEToken;
let accounts;

const initialSupply = 1000;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    
    miEToken = await new web3.eth.Contract(abi)
        .deploy({ data: evm.bytecode.object, arguments: [initialSupply] })
        .send({ from: accounts[0], gas: '1000000' });
});

describe('MiEToken', () => {
    it("deploys a token", () => {
        assert.ok(miEToken.options.address);
    });

    it("it has the correct initial supply", async () => {
        const supply = await miEToken.methods.totalSupply().call();
        assert.equal(supply, initialSupply);
    });

    it("it has the correct balance of the owner", async () => {
        const balance = await miEToken.methods.balanceOf(accounts[0]).call();
        assert.equal(balance, initialSupply);
    });

    it("it transfers the correct amount of tokens", async () => {
        const amount = 10;
        const sender = accounts[0];
        const receiver = accounts[1];

        await miEToken.methods.transfer(receiver, amount).send({ from: sender });

        const senderBalance = await miEToken.methods.balanceOf(sender).call();
        const receiverBalance = await miEToken.methods.balanceOf(receiver).call();

        assert.equal(senderBalance, initialSupply - amount);
        assert.equal(receiverBalance, amount);
    });
});