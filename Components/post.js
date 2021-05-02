import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";

export default function Post({ post }) {
  return (
    <View style={styles.post}>
      <View style={styles.dp}>
        <Image
          source={require("../assets/lira-logo.png")}
          resizeMode="contain"
          style={{ height: 60, width: 60 }}
        />
      </View>
      <View style={styles.postContent}>
        <View style={styles.postAccount}>
          <Text style={{ fontWeight: "600" }}>Samuel Wekobosya</Text>
        </View>
        <View style={styles.postText}>
          <Text style={{ fontWeight: "300" }}>
            Hey guys, I would like to welcome you to the TheBeacon, Our social
            App for Sharing stuff Hey guys, I would like to welcome you to the
            TheBeacon, Our social App for Sharing stuff Hey guys, I would like
            to welcome you to the TheBeacon, Our social App for Sharing stuff
          </Text>
          <Text>Beacon TV: youtube.com/linktovideo</Text>
          <Text>Read More: campusweekly.herokuapp.com</Text>
        </View>
        <View style={styles.postImage}>
          <Image
            source={require("../assets/post.jpg")}
            resizeMode="cover"
            style={{ width: "100%", height: "100%", borderRadius: 5 }}
          />
        </View>
        <View style={styles.date}>
          <Text>14/04/2021 {"\u2022"} Dean's Office</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 10,
    width: Dimensions.get("window").width * 0.85,
    paddingHorizontal: Dimensions.get("window").width * 0.05,
  },
  dp: {
    paddingTop: 3,
  },
  postContent: {
    paddingHorizontal: 5,
  },
  postText: {
    marginVertical: 5,
  },
  postImage: {
    width: "100%",
    height: 180,
    marginVertical: 5,
  },
  date: {
    marginVertical: 5,
  },
});
