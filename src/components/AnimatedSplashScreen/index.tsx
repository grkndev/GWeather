import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import Animated, { FadeOut, ZoomOut } from "react-native-reanimated";
export default function AnimatedSplashScreen({
  onAnimationFinish = (isCancelled) => {},
}: {
  onAnimationFinish?: (isCancelled: boolean) => void;
}) {
  const animation = useRef<LottieView>(null);
  return (
    <Animated.View
      // exiting={ZoomOut}
      exiting={FadeOut.duration(300)}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <LottieView     
        source={require("@assets/lottie/appIcon.json")}
        autoPlay
        ref={animation}
        onAnimationFinish={onAnimationFinish}
        loop={false}
        style={{width: 200, height:200}}
      />
    </Animated.View>
  );
}
