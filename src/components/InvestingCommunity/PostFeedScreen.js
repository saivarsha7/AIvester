import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const posts = [
  { id: "1", title: "Investment Tips", description: "How to start investing smartly." },
  { id: "2", title: "Stock Market News", description: "Latest updates in the stock market." },
  { id: "3", title: "Crypto Insights", description: "Is Bitcoin still a good investment?" },
];

const PostFeedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.heading}>Community Posts</Text>

      {/* Post List */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postDescription}>{item.description}</Text>
          </View>
        )}
      />

      {/* Create Post Button */}
      <TouchableOpacity style={styles.createPostButton} onPress={() => navigation.navigate("CreatePostScreen")}>
        <Ionicons name="create-outline" size={24} color="white" />
        <Text style={styles.createPostText}>Create Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  postCard: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  postDescription: {
    fontSize: 14,
    color: "#555",
  },
  createPostButton: {
    flexDirection: "row",
    backgroundColor: "orange",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  createPostText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default PostFeedScreen;
