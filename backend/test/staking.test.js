import { ethers, network } from "hardhat";
import { expect } from "chai";

const SECONDS_IN_DAY = 86400;

async function moveBlock(amount) {
  console.log("moving blocks in hardhat network");
  for (let i = 0; i < amount; i++) {
    await network.provider.send("evm_mine", []);
  }
  console.log(`moved ${amount} blocks`);
}

async function moveTime(amount) {
  console.log("moving forward in time to generate reward");
  await network.provider.send("evm_increaseTime", [amount]);
  console.log(`moved forward in time by ${amount} seconds`);
}

describe("Staking test", async function () {
  let staking;
  let rewardToken;
  let deployer;
  let stakeAmount;
  beforeEach(async function () {
    //contains public and private key of the different accounts
    const accounts = await ethers.getSigners();
    deployer = accounts[0];

    const _rewardToken = await ethers.getContractFactory("RewardToken");
    rewardToken = await _rewardToken.deploy();

    const _staking = await ethers.getContractFactory("Staking");
    staking = await _staking.deploy(
      rewardToken.getAddress(),
      rewardToken.getAddress()
    );

    //will get converted into wei
    stakeAmount = ethers.parseEther("100000");
  });

  it("should be able to stake tokens", async function () {
    await rewardToken.approve(staking.getAddress(), stakeAmount);
    await staking.stake(stakeAmount);

    const deployerAddress = await deployer.getAddress();
    const startingEarned = await staking.earned(deployerAddress);

    console.log(`starting tokens earned in staking dapp:${startingEarned}`);
    await moveTime(SECONDS_IN_DAY);
    await moveBlock(1);
    const endingEarned = await staking.earned(deployerAddress);
    console.log(`total reward earned after 24 hours lapsed: ${endingEarned}`);
    console.log(endingEarned);

    // console.log(typeof endingEarned); // Check the type of endingEarned
    // console.log(endingEarned.toString()); // Print the value of endingEarned as a string
    // console.log(endingEarned === 8640000n); // Check if the direct comparison works

    expect(startingEarned).to.be.equal(0);
    // expect(BigInt(endingEarned)).to.be.equal(BigInt(8640000));
    //expect(endingEarned).to.be.equal(8640000n);
  });
});
