import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import BottomTabs from "./BottomTabs";
import Login from "../screens/login";
import Register from "../screens/Register";
import Onboarding from "../screens/onboarding";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, BackHandler } from "react-native";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

class InitialStack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.loData();
  }
  loData = async () => {
    try {
      const value = await AsyncStorage.getItem("isLoadingFirstTime");
      if (value !== null) {
        this.setState({ ...this.state, start: value });
      } else {
        this.setState({ ...this.state, start: null });
      }
    } catch (error) {
      if (error) {
        Alert.alert(
          "App Crash",
          "Your App Crashed Due to initialization Error, Try Unistalling and Install Again",
          [
            {
              text: "Ok",
              onPress: () => {
                BackHandler.exitApp();
              },
            },
          ]
        );
      }
    }
  };
  render() {
    if (this.props.isLoadingFirstTime == true) {
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
    } else {
      return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={BottomTabs} />
          </Drawer.Navigator>
        </NavigationContainer>
      );
    }
  }
}

export default InitialStack;
