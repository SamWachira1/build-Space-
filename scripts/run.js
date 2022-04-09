const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed to:", owner.address);

    let waveCount; 
    waveCount = await waveContract.getTotalWaves();

    let waveTxns;
    waveTxns = await waveContract.connect(randomPerson).wave();

    waveCount = await waveContract.getTotalWaves();
    
    let totalBank;
    totalBank = await waveContract.totalBankAccount();

    let peaceSignUp; 
    peaceSignUp = await waveContract.connect(randomPerson).peaceSign();

    totalBank = await waveContract.totalBankAccount();


};

const runMain = async () => {
    try {
        await main();
        process.exit(0); // exit Node process without error
    } catch (error) {
        console.log(error);
        process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
    }
    // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
};

runMain();