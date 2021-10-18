import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../constants/palette";
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { OnboardingStack } from "./OnboardingStack";
import { SettingsStack } from "./SettingsStack";

export function BottomTabs({ navigation }) {
  const BottomTabsNav = createBottomTabNavigator();
  const navigationRef = React.useRef(null);
  // const type = useSelector((state) => state?.user?.userType);

  return (
      <NavigationContainer
        ref={navigationRef}
      >
      <BottomTabsNav.Navigator
        initialRouteName="HomeScreen"
        tabBarOptions={{
          activeTintColor: colors.primary_dark,
          inactiveTintColor: colors.background,
          showLabel: true,
          allowFontScaling: false,
          keyboardHidesTabBar: true,
          shadowColor: '#FFF',
          labelStyle: {
            fontWeight: "bold",
            fontSize: 10,
          },
        }}
      >
        <BottomTabsNav.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"home"}
                size={28}
                color={color}
              />
            ),
          }}
        />
        <BottomTabsNav.Screen
          name="SettingsScreen"
          component={SettingsStack}
          options={{
            title: 'Settings',
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"cog"}
                size={28}
                color={color}
              />
            ),
          }}
        />
      </BottomTabsNav.Navigator>
    </NavigationContainer>
  );
}
