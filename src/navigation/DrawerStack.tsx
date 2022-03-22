import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../screens/HomeScreen";
import CustomDrawer from "../components/CustomDrawer";
import { SettingsStack } from "./SettingsStack";

export function DrawerStack() {
  const Drawer = createDrawerNavigator();
  const navigationRef = useRef(null);

  return (
    <NavigationContainer
      ref={navigationRef}
    >
      <Drawer.Navigator 
        initialRouteName="Home" 
        drawerContent={CustomDrawer} 
        // drawerContentOptions={{
        //   activeTintColor: '#000000',
        //   activeBackgroundColor: '#e6e6e6',
        // }}
        // drawerType='slide'
        // edgeWidth={0}
      >
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Settings" component={SettingsStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );

}
