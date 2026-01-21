// export const CHAINS_CONFIG = {
//   ethereum: {
//     chainId: 1,
//     blockchain: "ethereum",
//     provider: "https://mainnet.gateway.tenderly.co/YOUR_KEY",
//     bundlerUrl: "https://api.candide.dev/public/v3/ethereum",
//     paymasterUrl: "https://api.candide.dev/public/v3/ethereum",
//     paymasterAddress: "0x8b1f6cb5d062aa2ce8d581942bbb960420d875ba",
//     entrypointAddress: "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
//     transferMaxFee: 5000000,
//     swapMaxFee: 5000000,
//     bridgeMaxFee: 5000000,
//     paymasterToken: {
//       address: "0xdAC17F958D2ee523a2206206994597C13D831ec7", // USDT
//     },
//   }
// };

// export const CHAINS_CONFIG = {
//   ethereum: {
//     chainId: 11155111, // Sepolia Testnet ID
//     blockchain: "ethereum",
//     // You still need a standard RPC provider (Alchemy/Infura/Public)
//     provider: "https://ethereum-sepolia-rpc.publicnode.com", 
    
//     // Pimlico Infrastructure
//     bundlerUrl: "https://api.pimlico.io/v2/11155111/rpc?apikey=pim_TZ1bdEPGR3Zd4bFgFKn6Zo",
//     paymasterUrl: "https://api.pimlico.io/v2/11155111/rpc?apikey=pim_TZ1bdEPGR3Zd4bFgFKn6Zo",
    
//     // Pimlico's standard Verifying Paymaster address for Sepolia
//     paymasterAddress: "0x777777777777AeC03fd955926DbF81597e66834C", 

//     transferMaxFee: 5000000,
//     swapMaxFee: 5000000,
//     bridgeMaxFee: 5000000,
    
//     // Optional: EntryPoint version (WDK defaults to 0.7 for modern apps)
//     entrypointAddress: "0x0000000071727De22E5E9d8BAf0edAc6f37da032",

//     paymasterToken: {
//         address: "0x7169D38820dfd117C3fa1f22a697dba58d90BA06", // Sepolia USDT
//          symbol: "USDT",
//          decimals: 6
//         }
//   }
// };

export const CHAINS_CONFIG = {
  ethereum: {
    chainId: 11155111, // Sepolia Testnet ID
    blockchain: 'ethereum',
    provider: 'https://sepolia.gateway.tenderly.co',
    // Pimlico Infrastructure
    bundlerUrl: 'https://public.pimlico.io/v2/11155111/rpc?apikey=pim_TZ1bdEPGR3Zd4bFgFKn6Zo',
    paymasterUrl: 'https://public.pimlico.io/v2/11155111/rpc?apikey=pim_TZ1bdEPGR3Zd4bFgFKn6Zo',
    paymasterAddress: '0x777777777777AeC03fd955926DbF81597e66834C',
    entrypointAddress: '0x0000000071727De22E5E9d8BAf0edAc6f37da032',
    paymasterToken: {
      address: '0xd077a400968890eacc75cdc901f0356c943e4fdb', // Sepolia USDT
    },
    transferMaxFee: 5000000,
    swapMaxFee: 5000000,
    bridgeMaxFee: 5000000,
  },
};