import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Plugs } from "phosphor-react-native";

export default function NoConnection() {
  return (
    <SafeAreaView className="flex-1 bg-gray-900 justify-center items-center gap-y-5">
      <Plugs color="white" weight="bold" size={64} />
      <View>
        <Text className="text-white font-semibold text-3xl text-center">
          You don't have an internet connection
        </Text>
        <Text className="text-white  text-center">
          Connect your device to the internet to continue
        </Text>
      </View>
    </SafeAreaView>
  );
}
