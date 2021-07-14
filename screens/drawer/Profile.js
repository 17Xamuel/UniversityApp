import React, { Component } from "react";
import { View, Button, Text } from "react-native";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Hello, Xamuel - Profile</Text>
        <Button
          title="Drawer"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
      </View>
    );
  }
}

export default Profile;
