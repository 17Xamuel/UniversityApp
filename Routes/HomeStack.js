import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import Attend from "../screens/Attend";
import ClassChat from "../screens/ClassChat";
import ClassFeed from "../screens/ClassFeed";
import ClassNotes from "../screens/ClassNotes";
import CourseWork from "../screens/CourseWork";
import Home from "../screens/Home";

const Stack = createStackNavigator();
class HomeStack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Home}
          options={{ header: () => null }}
        />
        <Stack.Screen name="Attend" component={Attend} />
        <Stack.Screen name="CourseWork" component={CourseWork} />
        <Stack.Screen name="ClassNotes" component={ClassNotes} />
        <Stack.Screen name="ClassChat" component={ClassChat} />
        <Stack.Screen name="ClassFeed" component={ClassFeed} />
      </Stack.Navigator>
    );
  }
}

export default HomeStack;
