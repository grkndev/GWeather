import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import AutoComplate, { City } from "../AutoComplate";
import { useNavigation } from "expo-router";
export default function WeatherInput() {
  const navigation = useNavigation();
  const [inputValue, setInput] = useState<string>("");
  const [outputValue, setOutput] = useState<string>("");
  const onCityReceived = (city: City) => {
    navigation.navigate("Weather", { city });

  };
  const debouncedValue = useDebounce(inputValue, 150);

  useEffect(() => {
    setOutput(inputValue);
  }, [debouncedValue]);

  return (
    <View className="w-full h-full justify-start items-center mt-5">
      <TextInput
        className="bg-gray-600 w-3/4 text-white rounded p-4"
        placeholder="Search Location"
        placeholderTextColor={"#7F7F98"}
        inputMode="text"
        value={inputValue}
        onChangeText={(text) => setInput(text)}
      />
      <AutoComplate
        onCitySelected={(city) => onCityReceived(city)}
        cityname={outputValue}
      />
    </View>
  );
}

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
