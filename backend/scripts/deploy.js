const hre = require("hardhat");

async function main() {

	const [deployer] = await hre.ethers.getSigners();
	

	console.log(`deploying using address ${deployer.address}`)
	const RewardToken = await hre.ethers.getContractFactory("RewardToken");
	const  rewardToken= await RewardToken.deploy();
	

	await rewardToken.deployed();

	console.log("RewardToken deployed to:", rewardToken.address);

	const StakingToken = await hre.ethers.getContractFactory("Staking");
	const stakingToken = await StakingToken.deploy(
    rewardToken.address,
    rewardToken.address
  );
	await stakingToken.deployed()

	console.log("StakingToken deployed to:", stakingToken.address);

}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});