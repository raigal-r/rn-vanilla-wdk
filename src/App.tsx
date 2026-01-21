import { Text, View } from 'react-native';
import { WalletProvider } from "@tetherto/wdk-react-native-provider";
import { CHAINS_CONFIG } from "./chains";

export default function App() {
  return withWalletProvider(AppContent);
  //return <AppContent />;
}

function AppContent() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello there!</Text>
    </View>
  );
}

function withWalletProvider(Content: React.ComponentType) {
  return (
    <WalletProvider 
      config={{
        indexer: {
          apiKey: "f1ca88e1a6e376314e13d623c879a13da61eae6f7c90c082bfb94f4918ef006a",
          url: "https://wdk-api.tether.io",
        },
        chains: CHAINS_CONFIG,
        enableCaching: true,
      }}
    >
      <Content />
    </WalletProvider>
  );
}