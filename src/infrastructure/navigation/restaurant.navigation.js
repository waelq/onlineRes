import React from "react";
import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack";
// TransitionPresets for native animations

import { RestaurnatsScreen } from "../../features/restaurants/screens/restaurant.screen";
import { RestaurantDetailsScreens } from "../../features/restaurants/screens/restaurant.detials";
const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS // TransitionPresets for native animations as ios 13
      }}
    >
      <RestaurantStack.Screen name="Restaurant" component={RestaurnatsScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreens}
      />
    </RestaurantStack.Navigator>
  );
};
