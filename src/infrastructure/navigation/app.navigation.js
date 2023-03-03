import React, { useContext } from "react";
import { Text, Button } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import screens
import { RestaurantsNavigator } from "./restaurant.navigation";
import { MapScreen } from "../../features/map/screens/map.screens";
// import icons
import Ionicons from "@expo/vector-icons/Ionicons";
// import components
import { SafeArea } from "../../components/saveArea/saveArea.component";
import { AuthenticationContext } from "../../services/authentication/authContext";
// import context
import { RestaurantsContextProvider } from "../../services/restaurants/resturants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurnats: "md-restaurant-sharp",
  Settings: "md-settings",
  Map: "md-map"
};
const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeArea>
  );
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerShown: false,
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray"
  };
};

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
