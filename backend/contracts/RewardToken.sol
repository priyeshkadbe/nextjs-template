//SPDX-License-Identifier:MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract RewardToken is ERC20{

    constructor() ERC20("Reward Token","RT"){
        _mint(msg.sender, 1000000*10**18);
    }
}