import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "@/components/Icons";

export default function MainPage() {
  return (
    <SafeAreaView>
      <Text>MainPage</Text>
      <Icons name="Clear" type="day" />
    </SafeAreaView>
  );
}
