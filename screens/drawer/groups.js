import React, { Component } from "react";
import { View, Button, Text } from "react-native";

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Hello, Xamuel</Text>
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

export default Groups;
