import * as React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
// import screens
import { RestaurnatsScreen } from "./src/features/restaurants/screens/restaurant.screen";
// import themes
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurnatsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
