import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import AdditionalContent from "./AdditionalContent";
import Workshops from "./Workshops";
import Events from "./Events";

const NewsScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF", padding: 20 }}>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={[styles.header, styles.box]}>
          <MaterialIcons name="menu-book" size={32} color="#F57C00" />
          <Text style={styles.headerText}>Investing Resources, Made Only For You.</Text>
          <Text style={styles.subHeaderText}>Explore 3,295 resources from us.</Text>
        </View>

        {/* Search Bar */}
        <View style={[styles.searchContainer, styles.box]}>
          <Ionicons name="search" size={20} color="#A0A0A0" style={styles.searchIcon} />
          <TextInput
            placeholder="Search for a resource..."
            placeholderTextColor="#A0A0A0"
            style={styles.searchInput}
          />
        </View>

        {/* Categories */}
        <View style={[styles.categoryHeader, styles.box]}>
          <Text style={styles.sectionTitle}>Browse Category</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("CoursesAndWorkshops")}
            style={styles.iconButton}
          >
            <Ionicons name="school" size={20} color="#F57C00" />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
          {[
            { name: "Investing", icon: "business" },
            { name: "ETFs", icon: "trending-up" },
            { name: "Credit", icon: "credit-card" },
            { name: "Saving", icon: "savings" },
            { name: "Stocks", icon: "show-chart" },
          ].map((item, index) => (
            <View key={index} style={[styles.categoryItem, styles.box]}>
              <MaterialIcons name={item.icon} size={24} color="#F57C00" />
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Featured Article */}
        <View style={[styles.sectionHeader, styles.box]}>
          <Text style={styles.sectionTitle}>Featured Article</Text>
          <TouchableOpacity onPress={() => navigation.navigate("ArticleScreen")}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.articleCard, styles.box]}>
          <Image
            source={require("../../../assets/financial-freedom.jpeg")}
            style={styles.articleImage}
          />
          <Text style={styles.articleTag}>Long-Term Investing • Inflation</Text>
          <Text style={styles.articleTitle}>
            How to Fight Inflation with Long-Term Investing with RoboAdvisor
          </Text>
          <View style={styles.authorContainer}>
            <Ionicons name="person-circle" size={18} color="#F57C00" />
            <Text style={styles.authorText}>Alisha Yee</Text>
          </View>
        </View>

        {/* Additional Content, Workshops, and Events */}
        <AdditionalContent />
        <Workshops />
        <Events />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  box: {
    backgroundColor: "#FAF0E6", // Light orange shade for all boxes
    borderRadius: 10,
    marginBottom: 20,
  },
  header: {
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  subHeaderText: {
    color: "#666666",
    fontSize: 14,
    marginTop: 5,
    textAlign: "center",
  },
  searchContainer: {
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "#000000",
  },
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconButton: {
    padding: 5,
    marginLeft: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAll: {
    color: "#F57C00",
    fontSize: 14,
  },
  categories: {
    flexDirection: "row",
  },
  categoryItem: {
    padding: 15,
    alignItems: "center",
    marginRight: 10,
  },
  categoryText: {
    color: "#000000",
    marginTop: 5,
    fontSize: 12,
  },
  articleCard: {
    padding: 15,
  },
  articleImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  articleTag: {
    color: "#666666",
    fontSize: 12,
  },
  articleTitle: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  authorText: {
    color: "#000000",
    marginLeft: 5,
    fontSize: 14,
  },
});

export default NewsScreen;
