import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

class onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "" };
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.ctr}>
          <View style={styles.imgCtr}>
            <Image
              source={require("../assets/lira-logo.png")}
              style={styles.startLogo}
            />
          </View>
          <View style={styles.textCtr}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "500",
                marginVertical: 10,
                textAlign: "left",
              }}
            >
              Welcome to TheBeacon
            </Text>
            <Text
              style={{
                marginVertical: 10,
                textAlign: "left",
              }}
            >
              Hello, Friend. LUAC presents TheBeacon. This is a free App for
              sharing information around campus. Feel Free to share your data
              with us. For more information about your data privacy, refer to
              our privacy policy.
            </Text>
          </View>
          <View style={styles.btnCtr}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#0053FF" }]}
              onPress={() => {
                this.props.navigation.navigate("Login");
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  paddingBottom: 5,
                  marginRight: 15,
                }}
              >
                Accept
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  ctr: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
  },
  imgCtr: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  startLogo: {
    paddingTop: 30,
    height: 100,
    width: 100,
  },
  textCtr: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  btnCtr: {
    flex: 3,
  },
  button: {
    width: Dimensions.get("window").width * 0.75,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    marginVertical: 15,
  },
});

export default onboarding;
