import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TextInput } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
class Attend extends Component {
  constructor(props) {
    super(props);
    this.state = { checking: false };
  }
  handleCheck = () => {
    this.setState({ ...this.state, checking: true });
    setTimeout(() => {
      this.setState({ ...this.state, checking: false });
    }, 3000);
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.formCtr}>
          <TextInput variant="outlned" mode="outlined" label="Class" />
          <TextInput
            variant="outlned"
            mode="outlined"
            multiline={true}
            label="Any Comment"
          />
          <Button title="Scan QR" onPress={this.handleCheck} />
          <View style={styles.resultCtr}>
            <View style={styles.logo}>
              <View
                style={
                  this.state.checking
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                <Text>Checking...</Text>
              </View>
              <Animatable.View
                animation="bounceIn"
                delay={500}
                style={[
                  this.state.checking
                    ? { display: "none" }
                    : { display: "flex" },
                  { marginVertical: 15 },
                ]}
              >
                <View style={styles.imageWrapper}>
                  <LinearGradient
                    style={styles.image}
                    colors={["rgba(0,0,0,0.5)", "transparent"]}
                  >
                    <Feather name="check" size={18} color="#fff" />
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "500",
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      Attended
                    </Text>
                  </LinearGradient>
                </View>
              </Animatable.View>
              <Button
                title="Continue"
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Attend;

const styles = StyleSheet.create({
  formCtr: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: Dimensions.get("window").width * 0.05,
    marginVertical: Dimensions.get("window").width * 0.05,
    justifyContent: "space-around",
    height: Dimensions.get("window").height * 0.7,
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    borderColor: "#009783",
    borderWidth: 1,
    borderRadius: Dimensions.get("window").width * 0.3,
    padding: 5,
  },
  image: {
    backgroundColor: "#007bff",
    height: Dimensions.get("window").width * 0.25,
    width: Dimensions.get("window").width * 0.25,
    borderRadius: Dimensions.get("window").width * 0.125,
    alignItems: "center",
    justifyContent: "center",
  },
});
