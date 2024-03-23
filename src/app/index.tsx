import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "@/components/Icons";
import WeatherInput from "@/components/WeatherInput";

export default function MainPage() {
  return (
    <SafeAreaView className="bg-gray-900 flex-1 h-full">
      <View className="flex flex-row justify-center items-center">
        <Image
          source={require("@assets/adaptive-icon.png")}
          width={500}
          height={500}
          className="w-24 h-24"
        />
        <Text className="text-white text-2xl">GWeather</Text>
      </View>

      <View className="flex justify-center items-center top-[20%] h-full">
        <Text className="text-white text-2xl font-bold text-center">
          Welcome to <Text className="text-blue-light">GWeather</Text>
        </Text>
        <Text className="text-white text-sm text-center">
          Choose a location to see the weather forecast
        </Text>
        <WeatherInput />
      </View>
    </SafeAreaView>
  );
}
