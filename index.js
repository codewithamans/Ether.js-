const { ethers } = require("ethers");
const url =
  "https://eth-mainnet.g.alchemy.com/v2/Z3iTxoSuImGUum_3HuoFp_8CwXD0iptB";
const provider = new ethers.JsonRpcProvider(url);
const getCurrentData = async () => {
  const getCurrentBlock = await provider.getBlockNumber();
  const balance = await provider.getBalance(
    "0x880e300bcfe704526e49b9124095896ce10e355e"
  );
  // console.log(getCurrentBlock);
  const b = ethers.formatEther(balance);
  const c = ethers.parseEther(b);
  console.log(c);
};
getCurrentData();
