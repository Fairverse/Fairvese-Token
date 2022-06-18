const { expect } = require('chai');
const { artifacts } = require('hardhat');

const MiEToken = artifacts.require('MiEToken');

const initialSupply = 1000;

contract("MiEToken", function (accounts) {
    let token;
    
    beforeEach(async () => {
        token = await MiEToken.new(initialSupply);
    });
    
    it('should have initial supply', async () => {
        const supply = await token.totalSupply();
        expect(supply.toNumber()).to.equal(initialSupply);
    });
    
    it('should have initial balance', async () => {
        const balance = await token.balanceOf(accounts[0]);
        expect(balance.toNumber()).to.equal(initialSupply);
    });
    
    it('should transfer token', async () => {
        const amount = 10;
        const from = accounts[0];
        const to = accounts[1];
    
        const balanceFrom = await token.balanceOf(from);
        const balanceTo = await token.balanceOf(to);
    
        await token.transfer(to, amount);
    
        const newBalanceFrom = await token.balanceOf(from);
        const newBalanceTo = await token.balanceOf(to);
    
        expect(newBalanceFrom.toNumber()).to.equal(balanceFrom.toNumber() - amount);
        expect(newBalanceTo.toNumber()).to.equal(balanceTo.toNumber() + amount);
        expect(newBalanceFrom.toNumber()).lessThanOrEqual(balanceFrom.toNumber());
        
    });
});