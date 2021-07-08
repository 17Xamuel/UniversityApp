import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Links from "../screens/Links";
import FeedStack from "./FeedStack";
import News from "../screens/News";
import HomeStack from "./HomeStack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator activeColor="#fff" shifting="true" initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarColor: "#0dd940",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedStack}
        options={{
          tabBarLabel: "Posts",
          tabBarColor: "#ce03fc",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="post" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarLabel: "CampusNews",
          tabBarColor: "#051E58",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Links"
        component={Links}
        options={{
          tabBarLabel: "More",
          tabBarColor: "#0053FF",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="more" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabs;
