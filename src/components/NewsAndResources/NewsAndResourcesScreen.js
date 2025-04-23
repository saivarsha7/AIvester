import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomNavigation from "../HomesAndActivities/BottomNavigation"; // Import BottomNavigation
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for community icon

const NewsAndResourcesScreen = () => {
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

      {/* Bottom Navigation with Community Icon */}
      <BottomNavigation />
      
      {/* Community Icon as Transfer Icon */}
      <TouchableOpacity
        style={styles.communityIcon}
        onPress={() => navigation.navigate("CommunityHomeScreen")}
      >
        <Ionicons name="people" size={30} color="#F5A623" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // Set background to white
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
    color: "#333333", // Dark text for better contrast on white
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    color: "#666666", // Light gray text
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
  communityIcon: {
    position: "absolute", // Position the icon on the screen
    bottom: 30, // Adjust position from the bottom
    left: "50%", // Center the icon horizontally
    transform: [{ translateX: -20 }], // Adjust slightly to align properly
    backgroundColor: "#FFFFFF", // Background color for visibility
    padding: 15,
    borderRadius: 50, // Circular background
    elevation: 5, // Shadow for the icon
  }
});

export default NewsAndResourcesScreen;
