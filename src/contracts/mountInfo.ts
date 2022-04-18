import { AbiItem } from "web3-utils";

const contract: {
  address: string,
  abi: AbiItem[],
} = {
  address: "0x132080760770fA5f8E40865eDF297689Ef80dd4e",
  abi: [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
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
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "rarity",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "race",
          type: "uint256",
        },
      ],
      name: "mountAdded",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "uint256[3]",
          name: "mount1",
          type: "uint256[3]",
        },
        {
          internalType: "uint256[3]",
          name: "mount2",
          type: "uint256[3]",
        },
        {
          internalType: "uint256[3]",
          name: "mount3",
          type: "uint256[3]",
        },
        {
          internalType: "uint256[3]",
          name: "mount4",
          type: "uint256[3]",
        },
        {
          internalType: "uint256[3]",
          name: "mount5",
          type: "uint256[3]",
        },
        {
          internalType: "uint256[3]",
          name: "mount6",
          type: "uint256[3]",
        },
        {
          internalType: "uint256[3]",
          name: "mount7",
          type: "uint256[3]",
        },
        {
          internalType: "uint256[3]",
          name: "mount8",
          type: "uint256[3]",
        },
        {
          internalType: "uint256[3]",
          name: "mount9",
          type: "uint256[3]",
        },
        {
          internalType: "uint256[3]",
          name: "mount10",
          type: "uint256[3]",
        },
      ],
      name: "add10Mounts",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_tokenId", type: "uint256" },
        { internalType: "uint256", name: "_rarity", type: "uint256" },
        { internalType: "uint256", name: "_race", type: "uint256" },
      ],
      name: "addMount",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_rarity", type: "uint256" },
        { internalType: "uint256", name: "_speed", type: "uint256" },
      ],
      name: "changeRarityToSpeed",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
      name: "checkMount",
      outputs: [{ internalType: "uint256[3]", name: "", type: "uint256[3]" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "invalidMount",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
      name: "markInvalid",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "mountInfoAdded",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_mountId", type: "uint256" }],
      name: "mountSpeed",
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
      name: "rarityToSpeed",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "recruitedCount",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
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
    {
      inputs: [
        { internalType: "uint256", name: "_tokenId", type: "uint256" },
        { internalType: "uint256", name: "_rarity", type: "uint256" },
        { internalType: "uint256", name: "_race", type: "uint256" },
      ],
      name: "updateMount",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
};

export default contract;
