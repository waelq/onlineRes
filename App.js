import * as React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
// import screens
import { RestaurnatsScreen } from "./src/features/restaurants/screens/restaurant.screen";
// import themes
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
// import Fonts
import {
  useFonts as useOswald,
  Oswald_400Regular
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurnatsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
