import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "Xamuel" };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={{ flexDirection: "row" }}>
              <Feather
                style={{ marginTop: 5 }}
                name="more-vertical"
                size={25}
                color="#000"
                onPress={() => {
                  this.props.navigation.openDrawer();
                }}
              />
              <Text style={styles.headerText}>TheBeacon</Text>
            </View>
            <View style={styles.headerIcons}>
              <Icon
                style={{ paddingHorizontal: 10 }}
                name="cog"
                size={24}
                color="#009783"
              />
              <Icon
                style={{ paddingHorizontal: 10 }}
                name="user"
                size={20}
                color="#009783"
                onPress={() => {
                  this.props.navigation.openDrawer();
                }}
              />
            </View>
          </View>
          <View style={styles.logo}>
            <Animatable.View animation="bounceIn" delay={500}>
              <TouchableOpacity
                style={styles.imageWrapper}
                onPress={() => {
                  this.props.navigation.navigate("Attend");
                }}
              >
                <LinearGradient
                  style={styles.image}
                  colors={["rgba(0,0,0,0.5)", "transparent"]}
                >
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "bold",
                      color: "#fff",
                      textAlign: "center",
                    }}
                  >
                    Attend
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </Animatable.View>
            <View>
              <Text
                style={{ fontSize: 17, textAlign: "center" }}
              >{`Hi, ${this.state.user}`}</Text>
            </View>
          </View>
          <View style={styles.actions}>
            <View style={styles.saveCtr}>
              <TouchableOpacity
                style={styles.save}
                onPress={() => {
                  this.props.navigation.navigate("ClassNotes");
                }}
              >
                <LinearGradient
                  style={styles.saveIconCtr}
                  colors={["rgba(0,0,0,0.5)", "transparent"]}
                >
                  <Feather name="file-text" size={24} color="#fff" />
                </LinearGradient>
                <Text style={{ fontSize: 16 }}>Notes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.save}
                onPress={() => {
                  this.props.navigation.navigate("CourseWork");
                }}
              >
                <LinearGradient
                  style={styles.saveIconCtr}
                  colors={["rgba(0,0,0,0.5)", "transparent"]}
                >
                  <Feather name="file-plus" size={24} color="#fff" />
                </LinearGradient>
                <Text style={{ fontSize: 16 }}>Course Work</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.saveCtr}>
              <TouchableOpacity
                style={styles.save}
                onPress={() => {
                  this.props.navigation.navigate("ClassFeed");
                }}
              >
                <LinearGradient
                  style={styles.saveIconCtr}
                  colors={["rgba(0,0,0,0.5)", "transparent"]}
                >
                  <Feather name="plus-circle" size={24} color="#fff" />
                </LinearGradient>
                <Text style={{ fontSize: 16 }}>Feed</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.save}
                onPress={() => {
                  this.props.navigation.navigate("ClassChat");
                }}
              >
                <LinearGradient
                  style={styles.saveIconCtr}
                  colors={["rgba(0,0,0,0.5)", "transparent"]}
                >
                  <Feather name="message-square" size={24} color="#fff" />
                </LinearGradient>
                <Text style={{ fontSize: 16 }}>Chat</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 25,
    paddingHorizontal: 25,
  },
  headerIcons: {
    display: "flex",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  logo: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    borderColor: "#009783",
    borderWidth: 2,
    borderRadius: Dimensions.get("window").width * 0.3,
    padding: 5,
  },
  image: {
    backgroundColor: "#009783",
    height: Dimensions.get("window").width * 0.4,
    width: Dimensions.get("window").width * 0.4,
    borderRadius: Dimensions.get("window").width * 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  //for actions
  actions: {
    flex: 5,
    // borderTopWidth: 1,
    // borderTopColor: "rgba(0,0,0,0.3)",
    // borderTopLeftRadius: 5,
    // borderTopRightRadius: 5,
  },
  saveCtr: {
    flexDirection: "row",
    justifyContent: "center",
  },
  save: {
    width: Dimensions.get("window").width * 0.45,
    height: Dimensions.get("window").width * 0.35,
    margin: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  saveIconCtr: {
    backgroundColor: "#0dd940",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 25,
    height: 50,
    width: 50,
  },
});

export default Home;
