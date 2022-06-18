// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract MiEToken is ERC20Burnable {
    constructor(uint256 initialSupply) ERC20("FairverseToken", "MiE") {
        _mint(msg.sender, initialSupply);
    }

    function decimals() public pure override returns(uint8) {
        return 2;
    }
}