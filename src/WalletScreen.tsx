// src/screens/WalletScreen.tsx
import React from "react";
import { View, Text, Button } from "react-native";
import { useWallet } from "@tetherto/wdk-react-native-provider";

export function WalletScreen() {
  const {
    wallet,
    balances,
    transactions,
    isInitialized,
    isUnlocked,
    createWallet,
    unlockWallet,
    refreshWalletBalance,
  } = useWallet();

  // Create a new wallet
  const handleCreateWallet = async () => {
    try {
      const wallet = await createWallet({
        name: "Imported Wallet",
        mnemonic: "one two three four five six seven eight nine ten eleven twelve", // Example mnemonic
      });
      console.log("Wallet created:", wallet);
      console.log("Wallet address:", wallet?.id);
    } catch (error) {
      console.error("Failed to create wallet:", error);
    }
  };

  // Unlock wallet
  const handleUnlockWallet = async () => {
    try {
      await unlockWallet();
      console.log("Wallet unlocked");
    } catch (error) {
      console.error("Failed to unlock wallet:", error);
    }
  };

  if (!isInitialized) {
    return <Text>Initializing WDK...</Text>;
  }

  if (!wallet) {
    return (
      <View>
        <Text>Create or Import a Wallet</Text>
        <Button title="Create New Wallet" onPress={handleCreateWallet} />
      </View>
    );
  }

  if (!isUnlocked) {
    return (
      <View>
        <Text>Wallet Locked</Text>
        <Button title="Unlock Wallet" onPress={handleUnlockWallet} />
      </View>
    );
  }

  return (
    <View>
      <Text>Wallet: {wallet.name}</Text>
      {/* Display balances */}
      {balances.list.map((balance, index) => (
        <Text key={index}>
          {balance.denomination}: {balance.value}
        </Text>
      ))}

      <Button
        title="Refresh Balance"
        onPress={refreshWalletBalance}
        disabled={balances.isLoading}
      />

      {balances.isLoading && <Text>Loading balances...</Text>}
    </View>
  );
}