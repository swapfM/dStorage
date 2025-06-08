// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StorageMarketplace {
    struct Provider {
        uint256 stake;
        uint256 earned;
        bool active;
    }

    mapping(address => Provider) public providers;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function registerProvider() external payable {
        require(msg.value >= 0.1 ether, "Stake at least 0.1 ETH");
        providers[msg.sender] = Provider(msg.value, 0, true);
    }

    function rewardProvider(address provider, uint256 amount) external {
        require(msg.sender == owner, "Only owner can reward");
        providers[provider].earned += amount;
    }

    function withdrawEarnings() external {
        uint256 amount = providers[msg.sender].earned;
        providers[msg.sender].earned = 0;
        payable(msg.sender).transfer(amount);
    }
}
