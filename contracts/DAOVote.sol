// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract DAOVote {
    address public manager;
    uint silver;
    uint gold;
    uint diamond;
    uint platinum;

    constructor() {
        silver = 0;
        gold = 0;
        diamond = 0;
        platinum = 0;
        manager = msg.sender;
    }

    modifier restricted() {
        require(msg.sender == manager, "You are not manager");
        _;
    }

    function getSilver() view public returns(uint) {
        return silver;
    }

    function getGold() view public returns(uint) {
        return gold;
    }

    function getDiamond() view public returns(uint) {
        return diamond;
    }

    function getPlatinum() view public returns(uint) {
        return platinum;
    }

    function voteSilver() public {
        silver++;
    }

    function voteGold() public {
        gold++;
    }

    function voteDiamond() public {
        diamond++;
    }

    function votePlatinum() public {
        platinum++;
    }

    function finalizeVote() public restricted {
        silver = 0;
        gold = 0;
        diamond = 0;
        platinum = 0;
    }

    function findMax() public view returns(uint) {
        uint[4] memory array = [platinum, diamond, gold, silver];
        uint tempMax = array[0];
        uint index = 0;
        for (uint i = 0; i < array.length; i++) {
            if (array[i] > tempMax) {
                tempMax = array[i];
                index = i;
            }
        }
        return index;
    }
}