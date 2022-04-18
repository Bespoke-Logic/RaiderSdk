import { AbiItem } from "web3-utils";

const contract: {
  address: string,
  abi: AbiItem[],
} = {
  address: "0x2c44D894850FF39281d6e999bB4B5A6212ab91A6",
  abi: [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_raider",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_profession",
          type: "uint256",
        },
      ],
      name: "getRaiderExp",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
};

export default contract;
