import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const MyListings = () => {
  return (
    <View style={styles.container}>
      {/* My Listings Section */}
      <Text style={styles.heading}>My Listings</Text>
      <View style={styles.listingsContainer}>
        {[
          { name: "US Tech", icon: require("../../../assets/us_flag.png") },
          { name: "Oil Stocks", icon: require("../../../assets/oil.png") },
          { name: "EU Markets", icon: require("../../../assets/eu_flag.png") },
          { name: "Top Gainers", icon: require("../../../assets/gainers.png") },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.listingItem}>
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.listingText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Investment Overview */}
      <Text style={styles.heading}>Investment Overview</Text>
      <View style={styles.investmentContainer}>
        <View style={styles.investmentBox}>
          <Icon name="line-chart" size={20} color="white" />
          <View>
            <Text style={styles.investmentTitle}>Financials & Assets</Text>
            <Text style={styles.lossText}>-0.67% last week</Text>
          </View>
        </View>
        <View style={styles.investmentBox}>
          <Icon name="bar-chart" size={20} color="white" />
          <View>
            <Text style={styles.investmentTitle}>Technology</Text>
            <Text style={styles.gainText}>+4.85% this week</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyListings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fffff",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginBottom: 8,
  },
  listingsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 15,
  },
  listingItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  listingText: {
    color: "#fff",
    fontSize: 14,
  },
  investmentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  investmentBox: {
    backgroundColor: "#2a2a2a",
    padding: 12,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  investmentTitle: {
    color: "#ccc",
    fontSize: 14,
    marginLeft: 10,
  },
  lossText: {
    color: "#ff4d4d",
    fontSize: 13,
    marginTop: 5,
  },
  gainText: {
    color: "#4caf50",
    fontSize: 13,
    marginTop: 5,
  },
});
