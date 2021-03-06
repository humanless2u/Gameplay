import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/home";
import { SignIn } from "../screens/signin";
import { AppointmentsDetails } from "../screens/AppointmentsDetails";
import { AppointmentsCreate } from "../screens/AppointmentsCreate";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
      initialRouteName="SignIn"
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentsDetails" component={AppointmentsDetails} />
      <Screen name="AppointmentsCreate" component={AppointmentsCreate} />
    </Navigator>
  );
}
