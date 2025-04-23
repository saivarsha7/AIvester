import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CreatePostScreen = ({ navigation }) => {
  const [postText, setPostText] = useState("");

  return (
    <View style={styles.container}>
      {/* Header with Back and Home */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add New Post (Text)</Text>
        <TouchableOpacity onPress={() => navigation.navigate("NewsAndResourcesScreen")}>
          <Ionicons name="home-outline" size={24} color="orange" />
        </TouchableOpacity>
      </View>

      {/* Profile Picture & Input */}
      <View style={styles.inputContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/50" }}
          style={styles.profileImage}
        />
        <TextInput
          style={styles.input}
          placeholder="Write your post..."
          placeholderTextColor="#aaa"
          multiline
          value={postText}
          onChangeText={setPostText}
        />
      </View>

      {/* Location */}
      <View style={styles.locationContainer}>
        <Ionicons name="location-outline" size={18} color="orange" />
        <Text style={styles.locationText}>New York, NY</Text>
      </View>

      {/* Tags */}
      <View style={styles.tagContainer}>
        <TouchableOpacity style={styles.tag}>
          <Text style={styles.tagText}># buildandgrow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tag}>
          <Text style={styles.tagText}># opportunity</Text>
        </TouchableOpacity>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Submit Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf6ec",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    minHeight: 60,
    textAlignVertical: "top",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  locationText: {
    fontSize: 14,
    color: "orange",
    marginLeft: 5,
  },
  tagContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  tag: {
    backgroundColor: "#ffedd5",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  tagText: {
    fontSize: 14,
    color: "#ff8c00",
  },
  submitButton: {
    backgroundColor: "#ff8c00",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },
  submitText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default CreatePostScreen;
