const { ethers } = require("ethers");
const url =
  "https://eth-mainnet.g.alchemy.com/v2/Z3iTxoSuImGUum_3HuoFp_8CwXD0iptB";
const provider = new ethers.JsonRpcProvider(url);
const getCurrentData = async () => {
  const getCurrentBlock = await provider.getBlockNumber();

  console.log(getCurrentBlock);
};
getCurrentData();
