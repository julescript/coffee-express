import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { DrawerStack } from './DrawerStack';
import {OnboardingStack} from './OnboardingStack';
import { BottomTabs } from './TabsStack';

export function StackSwitcher() {
  const user = useSelector((state) => state?.user);

  // for drawer navigation
  return user?.userProfile ? <DrawerStack /> : <OnboardingStack />;

  // for bottom tabs navigation
  // return user?.userProfile ? <BottomTabs /> : <OnboardingStack />;

  // multi user
  // return loggedIn ? userType == "type1" ? <DrawerStack/> : <BottomTabs/> : <OnboardingStack />
}
