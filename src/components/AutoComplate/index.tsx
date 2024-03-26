import { View, Text, FlatList, Pressable, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import * as Location from "expo-location";
import axios from "axios";
const BASEURL =
  `https://api.openweathermap.org/geo/1.0/direct?q={{CITY_NAME}}&limit=5&appid=${process.env.EXPO_PUBLIC_OPENWEATHER_KEY}`;
export type City = {
  country: string;
  lat: number;
  local_names: {};
  lon: number;
  name: string;
};
export default function AutoComplate({
  cityname,
  onCitySelected = (city: City) => {},
}: {
  cityname: string;
  onCitySelected: (city: City) => void;
}) {
  const [data, setData] = useState<City[]>();
  useEffect(() => {
    if (cityname.length < 3) return setData([]);
    axios.get(BASEURL.replace("{{CITY_NAME}}", cityname))
      .then(({data}) => {
        setData(data);
      });
  }, [cityname]);
  return (
    <View className="w-3/4 h-full">
      
      <FlashList
        data={data}
        estimatedItemSize={14}
        ListHeaderComponent={
          <Pressable
            onPress={async () => {
              let { status } =
                await Location.requestForegroundPermissionsAsync();
              if (status !== "granted") {
                Alert.alert("Permission to access location was denied");
                return;
              }
              let location = await Location.getCurrentPositionAsync({});
              onCitySelected({
                lat: location.coords.latitude,
                lon: location.coords.longitude,
                name: "Current Location",
                country: "",
                local_names: {},
              });
            }}
            className="bg-gray-700 p-2 rounded my-1"
          >
            <Text className="text-white text-sm text-center">
              Current Location
            </Text>
          </Pressable>
        }
        renderItem={({ item }) => (
          <Pressable
            onPress={() => onCitySelected(item)}
            className="bg-gray-600 p-4 rounded my-1"
          >
            <Text className="text-white text-lg">
              {item.name}, {item.country}
            </Text>
          </Pressable>
        )}
        centerContent={true}
        contentContainerStyle={{ paddingVertical: 10 }}
        className="justify-center flex items-center"
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}
      />
    </View>
  );
}
