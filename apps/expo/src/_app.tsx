import { StatusBar } from "expo-status-bar";
import React from "react";
import { TRPCProvider } from "./utils/api";
import { Main } from "./screens/main";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const App = () => {
  return (
    <TRPCProvider>
      <SafeAreaProvider>
        <Main />
        <StatusBar />
      </SafeAreaProvider>
    </TRPCProvider>
  );
};
