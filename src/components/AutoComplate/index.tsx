import { View, Text, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
const BASEURL =
  "https://api.openweathermap.org/geo/1.0/direct?q={{CITY_NAME}}&limit=5&appid=192f8cb1644bb6e824e1968bec6113a9";
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
    fetch(BASEURL.replace("{{CITY_NAME}}", cityname))
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  }, [cityname]);
  return (
    <View className="w-3/4 h-full">
      <FlashList
        data={data}
        estimatedItemSize={14}
        
        renderItem={({ item }) => (
          <Pressable
            onPress={() => onCitySelected(item)}
            className="bg-gray-500 p-4 rounded my-1"
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
