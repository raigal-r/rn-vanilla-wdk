const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const {
  configureMetroForWDK,
} = require("@tetherto/wdk-react-native-provider/metro-polyfills");

const config = getDefaultConfig(__dirname);
const configWdk = configureMetroForWDK(config);

module.exports = mergeConfig(config, configWdk);