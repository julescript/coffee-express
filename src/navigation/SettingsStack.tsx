import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { colors } from "../constants/palette";

export function SettingsStack() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
      <RootStackNav.Navigator >

        <RootStackNav.Screen
          name="LoginScreen"
          component={LoginScreen}
        />
        
        <RootStackNav.Screen
          name="RegisterScreen"
          component={RegisterScreen}
        />

      </RootStackNav.Navigator>
  );
}
