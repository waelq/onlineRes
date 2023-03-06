import React from "react";
import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack";
// TransitionPresets for native animations
import { SettingsScreens } from "../../features/settings/screens/setting.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
const SettingtStack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingtStack.Navigator
      screenOptions={{
        headerShown: "screen"
        // ...TransitionPresets.ModalPresentationIOS // TransitionPresets for native animations as ios 13
      }}
    >
      <SettingtStack.Screen
        options={{
          header: () => null
        }}
        name="Setting"
        component={SettingsScreens}
      />
      <SettingtStack.Screen name="Favourites" component={FavouritesScreen} />
    </SettingtStack.Navigator>
  );
};
