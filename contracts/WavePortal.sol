// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;


import "hardhat/console.sol";

contract WavePortal {

     uint256 totalWaves;

     uint256 bankAccount;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart,  WOOOOOOOOOO LETS GOOO!!");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

    function peaceSign() public  {
        bankAccount += 100;
        console.log("%s just tossed you the deuses", msg.sender);
    }

    function totalBankAccount () public view returns (uint256) {
        console.log("We have %d total in the bank!", bankAccount);
        return bankAccount;
    }


}