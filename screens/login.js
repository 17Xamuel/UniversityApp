import { StatusBar } from "expo-status-bar";
import Feather from "react-native-vector-icons/Feather";
import React from "react";
import {
  TouchableOpacity,
  Button,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/teaching-hospital-lira.jpg")}
        style={styles.imgBackground}
      >
        <View style={styles.loginCtr}>
          <View style={styles.loginLogoCtr}>
            <Image
              source={require("../assets/lira-logo.png")}
              style={styles.loginLogo}
            />
          </View>
          <View style={styles.inputsCtr}>
            <View style={styles.inputCtr}>
              <Feather
                name="user"
                size={20}
                color="#000"
                style={styles.text_input_icon}
              />
              <TextInput
                placeholder="Username"
                autoCapitalize="none"
                style={styles.text_input}
              />
            </View>
            <View style={styles.inputCtr}>
              <Feather
                name="lock"
                size={20}
                color="#000"
                style={styles.text_input_icon}
              />
              <TextInput
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={true}
                style={styles.text_input}
              />
            </View>
            <View
              style={{
                width: Dimensions.get("window").width * 0.75,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                  await AsyncStorage.setItem("hasBoarding", "true");
                  props.navigation.navigate("BottomTabs");
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "#fff",
                    paddingBottom: 5,
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  OR
                </Text>
              </View>
              <TouchableOpacity
                style={styles.register_button}
                onPress={() => {
                  props.navigation.navigate("Register");
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "#fff",
                    paddingBottom: 5,
                  }}
                >
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  loginCtr: {
    flex: 1,
    alignItems: "center",
  },
  imgBackground: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  inputCtr: {
    backgroundColor: "#fff",
    flexDirection: "row",
    width: Dimensions.get("window").width * 0.75,
    marginHorizontal: "auto",
    marginVertical: 20,
    borderRadius: 5,
  },
  text_input: {
    paddingLeft: 10,
    paddingVertical: 10,
    fontSize: 17,
  },
  text_input_icon: {
    paddingLeft: 10,
    paddingVertical: 10,
    marginTop: 3,
  },
  button: {
    borderRadius: 5,
    backgroundColor: "#0053FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "75%",
    marginVertical: 20,
    paddingVertical: 5,
  },
  register_button: {
    borderRadius: 5,
    backgroundColor: "#0053FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    marginVertical: 20,
    paddingVertical: 5,
  },
  loginLogoCtr: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
  },
  loginLogo: {
    height: 120,
    width: 120,
  },
});
