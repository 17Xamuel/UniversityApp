import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabs from "./BottomTabs";
import Login from "../screens/login";
import Register from "../screens/Register";
import Onboarding from "../screens/onboarding";

const Stack = createStackNavigator();

class InitialStack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ header: () => null }}>
          <Stack.Screen name="Onboard" component={Onboarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default InitialStack;
