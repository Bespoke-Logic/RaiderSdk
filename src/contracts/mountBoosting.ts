import { AbiItem } from "web3-utils";

const contract: {
  address: string,
  abi: AbiItem[],
} = {
  address: "0x90eFeEe015603F8916E186803992834C7758d7cD",
  abi: [
    {
      inputs: [
        { internalType: "address", name: "_raiders", type: "address" },
        { internalType: "address", name: "_boosted", type: "address" },
        { internalType: "address", name: "_questing", type: "address" },
        { internalType: "address", name: "_mounts", type: "address" },
        { internalType: "address", name: "_mountInfo", type: "address" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "raiderId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Dismounted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "raiderId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Mounted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "Paused",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "Unpaused",
      type: "event",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_raiderId", type: "uint256" },
        { internalType: "uint256", name: "_mountId", type: "uint256" },
      ],
      name: "addMount",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_raiderId", type: "uint256" }],
      name: "dismount",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_mountId", type: "uint256" }],
      name: "emergencyRemoveMount",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_mountId", type: "uint256" }],
      name: "emergencyReturnMount",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "mountOwner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "mountRaiderId",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "mountUsed",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "address", name: "", type: "address" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "bytes", name: "", type: "bytes" },
      ],
      name: "onERC721Received",
      outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "pause",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "paused",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "raiderMountId",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "raiderMounted",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "unpause",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
};

export default contract;
