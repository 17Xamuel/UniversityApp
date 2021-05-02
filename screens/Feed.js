import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import Animated from "react-native-reanimated";
import Feather from "react-native-vector-icons/Feather";
import Post from "../Components/post";
import posts from "../data/feedData";

const DATA = [
  {
    id: "1",
    user: "Xamuel",
    post_text: `Hey guys, I would like to welcome you to the TheBeacon, Our socialApp for Sharing stuff Hey guys, I would like to welcome you to the TheBeacon, Our social App for Sharing stuff`,
    posted_by: "Dean's Office",
    date_posted: "2/05/2021",
    post_image: require("../assets/post.jpg"),
    post_dp: require("../assets/lira-logo.png"),
  },
  {
    id: "2",
    user: "Xamuel",
    post_text: `Hey guys, I would like to welcome you to the TheBeacon, Our socialApp for Sharing stuff Hey guys, I would like to welcome you to the TheBeacon, Our social App for Sharing stuff`,
    posted_by: "Dean's Office",
    date_posted: "2/05/2021",
    post_image: require("../assets/post.jpg"),
    post_dp: require("../assets/lira-logo.png"),
  },
];

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderItem = ({ item }) => <Post post={item} />;
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.ctr}>
          <View style={styles.header}>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>Posts</Text>
            <View style={styles.plusIconCtr}>
              <Feather name="plus" size={20} color="#fff" />
            </View>
          </View>
          <View style={styles.postsCtr}>
            <FlatList
              data={DATA}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  ctr: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomColor: "#a3a3a3",
    borderBottomWidth: 1,
  },
  plusIconCtr: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#ce03fc",
    alignItems: "center",
    justifyContent: "center",
  },
  postsCtr: {
    backgroundColor: "#e3e3e3",
  },
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
export default Feed;