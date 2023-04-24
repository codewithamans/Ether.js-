const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(
  `https://eth-sepolia.g.alchemy.com/v2/qyJqL0rhpA7adjcW9-GmWGkyKpyd0KqD`
);
const address = "0x7219632c06bac03bd1005e9e7bbb83fcaedb4a3a";
const walletAbi = [
  {
    inputs: [],
    name: "SendEther",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_age",
        type: "uint256",
      },
    ],
    name: "setAge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "age",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const interaction = async () => {
  const contract = new ethers.Contract(address, walletAbi, provider);

  const ageCalling = await contract.age();
  console.log("age is : ", ageCalling);
  //   const etherSendingCall = await contract.SendEther();
  const getBalance = await contract.getBalance();
  console.log(ethers.formatEther(getBalance));
};

interaction();
