import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Plugs } from "phosphor-react-native";
import { StatusBar } from "expo-status-bar";

export default function NoConnection() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView className="flex-1 bg-gray-900 justify-center items-center gap-y-5 p-4">
        <View className="bg-gray-700 p-10 rounded-full">
          <Plugs color="white" weight="bold" size={64} />
        </View>
        <View>
          <Text className="text-white font-semibold text-3xl text-center">
            You don't have an internet connection
          </Text>
          <Text className="text-white  text-center">
            Connect your device to the internet to continue
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}
