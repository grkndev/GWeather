/// <reference types="nativewind/types" />
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import {
  useFonts,
  Nunito_900Black,
  Nunito_700Bold,
  Nunito_600SemiBold,
  Nunito_400Regular,
} from "@expo-google-fonts/nunito";
import * as SplashScreen from "expo-splash-screen";
import AnimatedSplashScreen from "@/components/AnimatedSplashScreen/index";
import { StatusBar } from "expo-status-bar";

// SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

  const [fontLoaded, fonterr] = useFonts({
    Nunito: Nunito_400Regular,
    NunitoSemi: Nunito_600SemiBold,
    NunitoBold: Nunito_700Bold,
    NunitoBlack: Nunito_900Black,
  });

  useEffect(() => {
    if (fontLoaded || fonterr) {
      SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [fontLoaded, fonterr]);

  if (!appReady || !splashAnimationFinished) {
    return (
      <AnimatedSplashScreen
        onAnimationFinish={(isCancelled) => {
          if (!isCancelled) {
            setSplashAnimationFinished(true);
          }
        }}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "GWeather", headerShown: false }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;
