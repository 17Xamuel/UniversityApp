import { createStackNavigator } from "@react-navigation/stack";
import Feather from "react-native-vector-icons/Feather";
import React, { Component } from "react";
import FeedDetails from "../screens/FeedDetails";
import Feed from "../screens/Feed";

const Stack = createStackNavigator();
class FeedStack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Posts"
          component={Feed}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen name="FeedDetails" component={FeedDetails} />
      </Stack.Navigator>
    );
  }
}

export default FeedStack;
