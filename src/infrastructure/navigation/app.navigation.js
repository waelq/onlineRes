import React from "react";
import { Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import screens
import { RestaurantsNavigator } from "./restaurant.navigation";
import { MapScreen } from "../../features/map/screens/map.screens";
// import icons
import Ionicons from "@expo/vector-icons/Ionicons";
// import components
import { SafeArea } from "../../components/saveArea/saveArea.component";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurnats: "md-restaurant-sharp",
  Settings: "md-settings",
  Map: "md-map"
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerShown: false
  };
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray"
        }}
      >
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
