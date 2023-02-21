import * as React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
// import screens
import { RestaurnatsScreen } from "./src/features/restaurants/screens/restaurant.screen";

export default function App() {
  return (
    <>
      <RestaurnatsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
