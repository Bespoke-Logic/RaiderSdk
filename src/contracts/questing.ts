import { AbiItem } from "web3-utils";

const contract: {
  address: string,
  abi: AbiItem[],
} = {
  address: "0x5A4fCdD54D483808080e0588c1E7d73e2a8AfdA8",
  abi: [
    {
      inputs: [{ internalType: "address", name: "_raiders", type: "address" }],
      stateMutability: "nonpayable",
      type: "constructor",
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
      inputs: [{ internalType: "address", name: "_quest", type: "address" }],
      name: "addQuest",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_raiderId", type: "uint256" }],
      name: "emergencyRemoveRaider",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_raiderId", type: "uint256" }],
      name: "emergencyReturnRaider",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_raiderId", type: "uint256" },
        { internalType: "address", name: "_raiderOwner", type: "address" },
      ],
      name: "endQuest",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "_address", type: "address" }],
      name: "getOwnedRaiders",
      outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
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
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "onQuest",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "uint256", name: "", type: "uint256" },
      ],
      name: "ownedRaiders",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
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
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "ownsRaider",
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
      name: "raiderQuest",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "_quest", type: "address" }],
      name: "removeQuest",
      outputs: [],
      stateMutability: "nonpayable",
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
      inputs: [
        { internalType: "uint256", name: "_raiderId", type: "uint256" },
        { internalType: "address", name: "_raiderOwner", type: "address" },
      ],
      name: "startQuest",
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
