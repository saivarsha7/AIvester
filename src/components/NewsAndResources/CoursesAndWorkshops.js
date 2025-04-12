import React from "react";
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Workshops from "./Workshops";
import AdditionalContent from "./AdditionalContent";

export default function CoursesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Back Button & Help Icon */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="info" size={22} color="white" />
        </TouchableOpacity>
      </View>

      {/* Scrollable Section */}
      <ScrollView 
        style={styles.scrollContainer} 
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <Text style={styles.title}>Course & Workshops</Text>
        <Text style={styles.subtitle}>
          Explore courses curated by financial professionals worldwide.
        </Text>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Feather name="search" size={20} color="gray" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for a workshop..."
            placeholderTextColor="gray"
          />
          <TouchableOpacity>
            <Feather name="sliders" size={20} color="gray" />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryRow}>
          {[
            { name: "Money", icon: "dollar" },
            { name: "Saving", icon: "bank" },
            { name: "Investing", icon: "line-chart" },
          ].map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryChip}>
              <FontAwesome name={category.icon} size={14} color="white" style={styles.categoryIcon} />
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Featured Workshop Section */}
        <Text style={styles.featuredTitle}>Featured Workshop</Text>
        <TouchableOpacity style={styles.featuredCard}>
          {/* Course Image */}
          <View style={styles.imageWrapper}>
            <Image source={require("../../../assets/workshop-image.jpeg")} style={styles.workshopImage} />
            {/* Play Button Overlay */}
            <View style={styles.playButtonWrapper}>
              <TouchableOpacity style={styles.playButton}>
                <Feather name="play" size={28} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Course Details */}
          <View style={styles.courseInfo}>
            <Text style={styles.courseTitle}>Grow Wealth With AI/ML Tech</Text>
            <Text style={styles.courseInstructor}>By Razor D. Delorean</Text>
          </View>
        </TouchableOpacity>

        {/* Workshops & Additional Content */}
        <Workshops />
        <AdditionalContent />
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 16,
    paddingTop: 0,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
  },
  subtitle: {
    color: "gray",
    fontSize: 14,
    marginTop: 5,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2D2D2D",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    color: "white",
    marginLeft: 8,
  },
  categoryRow: {
    flexDirection: "row",
    marginTop: 20,
  },
  categoryChip: {
    backgroundColor: "#2D2D2D",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  categoryIcon: {
    marginRight: 6,
  },
  categoryText: {
    color: "white",
    fontSize: 14,
  },
  featuredTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
  },
  featuredCard: {
    backgroundColor: "#1E1E1E",
    padding: 14,
    borderRadius: 12,
    marginTop: 10,
  },
  imageWrapper: {
    position: "relative",
  },
  workshopImage: {
    width: "100%",
    height: 160,
    borderRadius: 10,
  },
  playButtonWrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -22 }, { translateY: -22 }],
  },
  playButton: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 12,
    borderRadius: 50,
  },
  courseInfo: {
    marginTop: 10,
  },
  courseTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  courseInstructor: {
    color: "gray",
    fontSize: 12,
    marginTop: 4,
  },
});

