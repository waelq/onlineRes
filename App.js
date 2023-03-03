import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";

// import font
import {
  useFonts as useOswald,
  Oswald_400Regular
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
// import firebase in new virsion like this
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import context
import { RestaurantsContextProvider } from "./src/services/restaurants/resturants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authContext";

const firebaseConfig = {
  apiKey: "AIzaSyBv794JF7wEgIk7-XnkT6BlCEM6UieVJqM",
  authDomain: "onlineres-f9d4a.firebaseapp.com",
  projectId: "onlineres-f9d4a",
  storageBucket: "onlineres-f9d4a.appspot.com",
  messagingSenderId: "819596151518",
  appId: "1:819596151518:web:e79e4d66ef3e0f432b904f"
};

// to enable hot-reloded
if (!firebase.apps.length) {
  // console.log("test", firebase.apps.length);
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });

  const [latoLoaded] = useLato({
    Lato_400Regular
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
