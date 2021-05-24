import React from "react";
import { Button, Image, SafeAreaView, Text, View } from "react-native";

export default function Blank(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("../assets/blank.svg")}
        resizeMode="cover"
        style={{ width: 180, height: 180, borderRadius: 5 }}
      />
      <Text style={{ fontSize: 15 }}>{props.title}</Text>
      {/* <Button
          title="Home"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        /> */}
    </View>
  );
}
