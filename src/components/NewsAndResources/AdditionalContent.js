import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AdditionalContent = () => {
  const courseData = [
    {
      title: "2026 Technology Sector Outlook",
      author: "Eddie Yong",
      views: "5.5k",
      image: require("../../../assets/tech-outlook.jpeg"),
    },
    {
      title: "First Time Technology Investing",
      author: "Francis Bard",
      views: "512.1k",
      image: require("../../../assets/tech-investment.jpeg"),
    },
    {
      title: "How To Avoid Investing FO...",
      author: "Eri Whittaker",
      views: "87.1k",
      image: require("../../../assets/finance-course.jpeg"),
    },
  ];

  return (
    <View>
      {/* Latest News Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Latest News</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <View style={styles.newsCard}>
        <Text style={styles.newsDate}>2d ago • Debt</Text>
        <Text style={styles.newsTitle}>
          Mastering Credit Scores: Tips to Boost Your Financial Health
        </Text>
        <View style={styles.newsStats}>
          <Ionicons name="eye" size={16} color="white" />
          <Text style={styles.statsText}>25,222</Text>
          <Ionicons name="heart" size={16} color="red" style={styles.heartIcon} />
          <Text style={styles.statsText}>22</Text>
        </View>
      </View>

      {/* Short Courses Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Short Courses</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {courseData.map((course, index) => (
          <View key={index} style={styles.courseCard}>
            <Image source={course.image} style={styles.courseImage} />
            <Text style={styles.courseTime}>01:40</Text>
            <Text style={styles.courseTitle}>{course.title}</Text>
            <Text style={styles.courseAuthor}>{course.author}</Text>
            <View style={styles.courseStats}>
              <Ionicons name="eye" size={14} color="white" />
              <Text style={styles.statsText}>{course.views}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  sectionTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAll: {
    color: "#F5A623",
  },
  newsCard: {
    backgroundColor: "#2C2C2C",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  newsDate: {
    color: "#A0A0A0",
    fontSize: 12,
  },
  newsTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  newsStats: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  heartIcon: {
    marginLeft: 10,
  },
  statsText: {
    color: "white",
    marginLeft: 5,
  },
  courseCard: {
    backgroundColor: "#2C2C2C",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    width: 150,
  },
  courseImage: {
    width: "100%",
    height: 80,
    borderRadius: 5,
  },
  courseTime: {
    position: "absolute",
    top: 5,
    left: 5,
    backgroundColor: "black",
    color: "white",
    paddingHorizontal: 5,
    fontSize: 10,
    borderRadius: 3,
  },
  courseTitle: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
  },
  courseAuthor: {
    color: "#A0A0A0",
    fontSize: 10,
  },
  courseStats: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
});

export default AdditionalContent;
