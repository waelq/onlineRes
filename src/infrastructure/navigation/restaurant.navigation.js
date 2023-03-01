import React from "react";
import { Text } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

import { RestaurnatsScreen } from "../../features/restaurants/screens/restaurant.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none">
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurnatsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={() => <Text>RestaurantDetails</Text>}
      />
    </RestaurantStack.Navigator>
  );
};
