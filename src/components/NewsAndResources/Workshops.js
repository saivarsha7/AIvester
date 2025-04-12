import React from "react";
import { View, Text, ScrollView, Image, StyleSheet,TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const workshops = [
  {
    date: "Jan 16, 2025",
    category: "Investing",
    title: "Building a Strong Investment Foundation: Basics for Beginner",
    views: "878",
    likes: "3",
    image: require("../../../assets/workshop1.png"),
  },
  {
    date: "Jan 16, 2025",
    category: "Investing",
    title: "Mastering Portfolio Diversification: Strategies for Every Investor",
    views: "8,158",
    likes: "21",
    image: require("../../../assets/workshop2.jpeg"),
  },
  {
    date: "Jan 16, 2025",
    category: "Investing",
    title: "Maximizing Long-Term Growth: Advanced Stock & ETF Insights",
    views: "211,158",
    likes: "22",
    image: require("../../../assets/workshop3.jpeg"),
  },
];

const Workshops = () => {
  const navigation=useNavigation();
  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Workshops</Text>
        <TouchableOpacity onPress={() => navigation.navigate("CoursesAndWorkshops")}>
                    <Text style={styles.seeAll}>See All</Text>
                  </TouchableOpacity>
      </View>
      <ScrollView>
        {workshops.map((workshop, index) => (
          <View key={index} style={styles.workshopCard}>
            <View style={styles.textContainer}>
              <Text style={styles.workshopDate}>
                {workshop.date} • {workshop.category}
              </Text>
              <Text style={styles.workshopTitle}>{workshop.title}</Text>
              <View style={styles.statsContainer}>
                <Ionicons name="eye" size={14} color="white" />
                <Text style={styles.statsText}>{workshop.views}</Text>
                <Ionicons name="heart" size={14} color="red" style={styles.heartIcon} />
                <Text style={styles.statsText}>{workshop.likes}</Text>
              </View>
            </View>
            <Image source={workshop.image} style={styles.workshopImage} />
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
  workshopCard: {
    backgroundColor: "#2C2C2C",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 1,
  },
  workshopDate: {
    color: "#A0A0A0",
    fontSize: 12,
  },
  workshopTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  statsContainer: {
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
  workshopImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
});

export default Workshops;
