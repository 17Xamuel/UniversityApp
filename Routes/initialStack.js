import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabs from "./BottomTabs";
import Login from "../screens/login";
import Register from "../screens/Register";
import Onboarding from "../screens/onboarding";
import Attend from "../screens/Attend";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, View } from "react-native";

const Stack = createStackNavigator();

class InitialStack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.loData();
  }
  loData = async () => {
    try {
      const value = await AsyncStorage.getItem("hasBoarding");

      if (value !== null) {
        this.setState({ ...this.state, start: value });
      } else {
        this.setState({ ...this.state, start: null });
      }
    } catch (e) {}
  };
  render() {
    const v = this.state.lo === "true" ? "tt" : "ff";
    console.log(v);
    if (this.state.start == "true") {
      console.log(this.state.start);
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ header: () => null }}>
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
            <Stack.Screen name="Attend" component={Attend} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ header: () => null }}>
            <Stack.Screen name="Onboard" component={Onboarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Attend" component={Attend} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }
}

export default InitialStack;
