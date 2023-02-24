import * as React from "react";
import { Text } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
// import icons
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurnats: "md-restaurant",
  Settings: "md-settings",
  Map: "md-map"
};
const Map = () => <Text>Map</Text>;
const Settings = () => <Text>Settings</Text>;

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    )
  };
};

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={screenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray"
            }}
          >
            <Tab.Screen name="Restaurnats" component={RestaurnatsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
