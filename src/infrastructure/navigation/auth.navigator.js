import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "../../components/typography/text.component";
const Stack = createStackNavigator();
export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      //   screenOptions={{
      //     ...TransitionPresets.ModalPresentationIOS // TransitionPresets for native animations as ios 13
      //   }}
    >
      <Stack.Screen name="Main" component={() => <Text>Main</Text>} />
    </Stack.Navigator>
  );
};
