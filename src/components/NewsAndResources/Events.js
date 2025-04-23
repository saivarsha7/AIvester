import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
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
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Workshops</Text>
        <TouchableOpacity onPress={() => navigation.navigate("CoursesAndWorkshops")}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {workshops.map((workshop, index) => (
          <View key={index} style={styles.workshopCard}>
            <View style={styles.textContainer}>
              <Text style={styles.workshopDate}>
                {workshop.date} • {workshop.category}
              </Text>
              <Text style={styles.workshopTitle}>{workshop.title}</Text>
              <View style={styles.statsContainer}>
                <Ionicons name="eye" size={14} color="#FF8C00" />
                <Text style={styles.statsText}>{workshop.views}</Text>
                <Ionicons name="heart" size={14} color="#FF4500" style={styles.heartIcon} />
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
  container: {
    backgroundColor: "#FFF4E6", // Lightish orange background
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    flex: 1,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sectionTitle: {
    color: "#FF8C00",
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    color: "#FFA500",
    fontWeight: "600",
  },
  workshopCard: {
    backgroundColor: "#FFECD1", // Soft card background that complements main bg
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 2,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  workshopDate: {
    color: "#A0522D",
    fontSize: 12,
  },
  workshopTitle: {
    color: "#333333",
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
    color: "#A0522D",
    marginLeft: 5,
    fontSize: 12,
  },
  workshopImage: {
    width: 60,
    height: 60,
    borderRadius: 6,
  },
});

export default Workshops;
