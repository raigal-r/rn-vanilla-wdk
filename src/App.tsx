import { Text } from 'react-native';
import { WalletProvider } from "@tetherto/wdk-react-native-provider";
import { CHAINS_CONFIG } from "./chains";
import { WalletScreen } from "./WalletScreen";

export default function App() {
  //return <AppContent />
  return withWalletProvider(AppContent);
}

function AppContent() {
  return (
    <Text>Hello there!</Text>
  );
}

function withWalletProvider(content: React.ComponentType) {
  return <WalletProvider
    config={{
      indexer: {
        apiKey: "f1ca88e1a6e376314e13d623c879a13da61eae6f7c90c082bfb94f4918ef006a",
        url: "https://wdk-api.tether.io",
      },
      chains: CHAINS_CONFIG,
      enableCaching: true,
    }}>
      <Content />
  </WalletProvider>;
}
