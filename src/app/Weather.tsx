import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, router } from "expo-router";
import { City } from "@/components/AutoComplate";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import Icons from "@/components/Icons";
import {
  ThermometerSimple,
  Drop,
  SunDim,
  CloudRain,
  Wind,
  IconContext,
  StarFour,
  Sun,
} from "phosphor-react-native";
import { FlashList } from "@shopify/flash-list";
const BASE_URL = `https://api.openweathermap.org/data/2.5`;

type MainWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};
type Weather = {
  name: string;
  main: MainWeather;
  weather: [
    {
      id: string;
      main: string;
      description: string;
      icon: string;
    }
  ];
};
export type WeatherForecast = {
  main: MainWeather;
  dt: number;
};

const data = [
  { title: "Temperature", value: "26ºc", icon: <ThermometerSimple /> },
  { title: "Rain %", value: "0%", icon: <CloudRain /> },
  { title: "Wind", value: "8 km/h", icon: <Wind /> },
  { title: "Humidity", value: "40%", icon: <Drop /> },
  { title: "UV Index", value: "5", icon: <Sun /> },
];

export default function Weather() {
  const navigation = useNavigation();
  //   const [weather, setWeather] = useState<Weather>();
  //   const [forecast, setForecast] = useState<WeatherForecast[]>();
  //   const [errorMsg, setErrorMsg] = useState<string>();

  const { city }: { city: City } = navigation
    .getState()
    .routes.find((route) => route.name === "Weather")?.params;

  return (
    <SafeAreaView className="flex-1 bg-gray-900 p-4 ">
      <ScrollView
        showsVerticalScrollIndicator={false}
        horizontal={false}
        className="flex flex-1 flex-col gap-y-2 rounded-xl"
      >
        <View className="bg-gray-800 p-4 w-full aspect-square rounded-xl">
          <ImageBackground
            resizeMode="stretch"
            height={1000}
            width={1000}
            className="w-full h-full rounded-xl overflow-hidden"
            source={require("@assets/Backgorunds/Clear/night.png")}
          >
            <View className="p-7 flex flex-col items-start justify-between h-full w-full">
              <View className="flex flex-col">
                <Text className="text-white font-semibold text-[8vw]">
                  Istanbul, TR
                </Text>
                <Text className="text-white">Monday, May 15, 2023</Text>
              </View>

              <View className="w-full flex flex-row justify-between items-center">
                <View className="gap-y-1">
                  <Text style={{
                    // fontSize: Dimensions.get("screen").width / 8,
                  }} className="text-white font-bold  text-[15vw]">28ºc</Text>
                  <View>
                    <Text className="text-white font-semibold">
                      26ºc / 32ºc
                    </Text>
                    <Text className="text-white">Few Clouds</Text>
                  </View>
                </View>
                <View className="left-8">
                  <Icons name="Clear" type="night" />
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View className="bg-gray-800 w-full rounded-xl p-4 justify-center items-center">
          <IconContext.Provider
            value={{
              color: "#3b3b54",
              size: 32,
              weight: "light",
            }}
          >
            <FlatList
              horizontal
              data={data}
              renderItem={({ item }) => (
                <DetailView
                  title={item.title}
                  value={item.value}
                  icon={item.icon}
                />
              )}
              className="w-full"
              contentContainerStyle={{
                justifyContent: "space-around",

                alignItems: "center",
                flex: 1,
                gap: 10,
              }}
            />
          </IconContext.Provider>
        </View>
        {/* forecast */}
        <View className="bg-gray-800 rounded-xl h-24 w-full">
          <FlatList
            horizontal
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => <ForecastView />}
            className="w-full h-full"
            contentContainerStyle={{
              paddingHorizontal: 12,
              paddingVertical: 10,
              justifyContent: "space-around",
              alignItems: "center",
              flex: 1,
            }}
          />
        </View>
        
        <View className="bg-gray-800 w-full p-4 justify-center items-start rounded-xl">
          {/* AI generated suggestion */}
          <View className="flex flex-row justify-center items-center gap-x-2 ">
            <StarFour weight="light" color="limegreen" size={16} />
            <Text className="text-white text-sm font-light ">Suggestion</Text>
          </View>
          <View className="mt-2">
            <Text className="text-white ">Wear a jacket</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const DetailView = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.JSX.Element;
}) => {
  return (
    <View className="flex flex-col items-center p-2 justify-center gap-y-1">
      <View className="flex flex-col gap-x-2 items-center justify-center">
        {icon}
        <Text className="text-gray-500 font-bold text-wrap flex-wrap flex w-20 text-center text-[10px]">
          {title}
        </Text>
      </View>
      <View>
        <Text className="text-white text-xs font-bold">{value}</Text>
      </View>
    </View>
  );
};

const ForecastView = () => {
  return (
    <View className="flex flex-col justify-between items-center p-2  rounded-xl">
      <View className="flex flex-row items-center gap-x-2">
        <Text className="text-gray-200 font-bold text-lg">Mon</Text>
      </View>
      <View>{/* <Icons name="Clear" type="day" /> */}</View>
      <View className="flex flex-col">
        <Text className="text-white text-xs font-bold">28ºc</Text>
        <Text className="text-gray-400 text-xs font-bold">28ºc</Text>
      </View>
    </View>
  );
};
