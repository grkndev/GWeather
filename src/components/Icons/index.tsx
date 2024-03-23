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
export default function Icons({
  name,
  type,
}: {
  name: "Clear" | "Clouds" | "Rain" | "Storm" | "Cloudly";
  type: "day" | "night";
}) {
  switch (name) {
    case "Clear":
      return type === "day" ? <Clear /> : <ClearNight />;
    case "Clouds":
      return type === "day" ? <Clouds /> : <CloudsNight />;
    case "Rain":
      return type === "day" ? <Rain /> : <RainNight />;
    case "Storm":
      return type === "day" ? <Storm /> : <StormNight />;
    case "Cloudly":
      return type === "day" ? <Cloudly /> : <CloudlyNight />;
    default:
      return <Clear />;
  }
}
