//apis
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

//screens
import BottomTabs from "./BottomTabs";
import Login from "../screens/login";
import Register from "../screens/Register";
import Onboarding from "../screens/onboarding";

//drawer
import DrawerContent from "./Drawer";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, View, Alert, BackHandler } from "react-native";
import Polls from "../screens/Polls";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

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
    const v = this.state.lo === "true" ? "tt" : "ff";
    console.log(this.state.start);

    if (this.state.start == "true") {
      return (
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            <Drawer.Screen name="Home" component={BottomTabs} />
            <Drawer.Screen name="Polls" component={Polls} />
          </Drawer.Navigator>
        </NavigationContainer>
      );
    } else if (this.state.start == "undefined") {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large"></ActivityIndicator>
        </View>
      );
    } else {
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
}

export default InitialStack;
