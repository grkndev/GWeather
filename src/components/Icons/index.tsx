import React from "react";
import Clear from "./Clear/Day";
import ClearNight from "./Clear/Night";
import Clouds from "./Clouds/Day";
import CloudsNight from "./Clouds/Night";
import Rain from "./Rain/Day";
import RainNight from "./Rain/Night";
import Storm from "./Storm/Day";
import StormNight from "./Storm/Night";
import Cloudly from "./Cloudly/Day";
import CloudlyNight from "./Cloudly/Night";
import { Image, ImageBackground } from "react-native";

//https://openweathermap.org/weather-conditions
//ICON LIST
export default function Icons({
  name,
  type,
}: {
  // name: "clear " | "few clouds" | "scattered clouds" | "broken clouds" | "	shower rain" | "rain" | "thunderstorm" | "snow" | "mist";
  name: string; // "01" | "02" | "03" | "04" | "09" | "10" | "11" | "13" | "50";
  type: string; // "d" | "n";
}) {
  if (name === "04") name = "03";
  if (name === "09") name = "10";
  switch (name) {
    case "01":
      return type === "d" ? <Clear /> : <ClearNight />;
      case "02":
      return type === "d" ? <Clouds /> : <CloudsNight />;
    case "03":
      return type === "d" ? <Cloudly /> : <CloudlyNight />;
    case "10":
      return type === "d" ? <Rain /> : <RainNight />;
    case "11":
      return type === "d" ? <Storm /> : <StormNight />;
    default:
      return <Clear />;
  }
}

export function WeatherBackground({
  children,
  name,
}: {
  // name: "clear " | "few clouds" | "scattered clouds" | "broken clouds" | "	shower rain" | "rain" | "thunderstorm" | "snow" | "mist";
  children: React.ReactNode;
  name: string; // "01" | "02" | "03" | "04" | "09" | "10" | "11" | "13" | "50";
}) {

  var path = WeatherTypes[`${name}` as keyof typeof WeatherTypes];
  //WeatherTypes[name as keyof typeof WeatherTypes]
  return (
    <ImageBackground
      resizeMode="stretch"
      height={1000}
      width={1000}
      className="w-full h-full rounded-xl overflow-hidden"
      source={path}
    >
      {children}
    </ImageBackground>
  );
}

const WeatherTypes = {
  "01d": require("@assets/Backgorunds/Clear/day.png"),
  "01n": require("@assets/Backgorunds/Clear/night.png"),
  
  "02d": require("@assets/Backgorunds/Cloudly/day.png"),
  "02n": require("@assets/Backgorunds/Cloudly/night.png"),

  "03d": require("@assets/Backgorunds/Clouds/day.png"),
  "03n": require("@assets/Backgorunds/Clouds/night.png"),

  "04d": require("@assets/Backgorunds/Clouds/day.png"),
  "04n": require("@assets/Backgorunds/Clouds/night.png"),

  "09d": require("@assets/Backgorunds/Rain/day.png"),
  "09n": require("@assets/Backgorunds/Rain/night.png"),

  "10d": require("@assets/Backgorunds/Rain/day.png"),
  "10n": require("@assets/Backgorunds/Rain/night.png"),

  "11d": require("@assets/Backgorunds/Storm/day.png"),
  "11n": require("@assets/Backgorunds/Storm/night.png"),

  "13d": require("@assets/Backgorunds/Rain/day.png"),
  "13n": require("@assets/Backgorunds/Rain/night.png"),

  "50d": require("@assets/Backgorunds/Clouds/day.png"),
  "50n": require("@assets/Backgorunds/Clouds/night.png"),
};
