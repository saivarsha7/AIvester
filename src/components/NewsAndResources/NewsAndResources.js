import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomNavigation from "../HomesAndActivities/BottomNavigation"; // Import BottomNavigation

const NewsAndResources = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View style={styles.content}>
        {/* Illustration */}
        <Image 
          source={require("../../../assets/news-illustration.png")} 
          style={styles.illustration} 
        />

        {/* Title & Description */}
        <Text style={styles.title}>
          Investing News, Stocks, And Financial Growth.
        </Text>
        <Text style={styles.description}>
          Explore our exclusively curated news updated daily from our team.
        </Text>

        {/* Button */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("NewsScreen")}
        >
          <Text style={styles.buttonText}>Explore News</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    paddingHorizontal: 20,
  },
  content: {
    flex: 1, // Takes up the remaining space
    alignItems: "center",
    justifyContent: "center",
  },
  illustration: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    color: "#B0B0B0",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#F5A623",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default NewsAndResources;
