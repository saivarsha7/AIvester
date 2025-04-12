import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const events = [
  {
    date: "THU 1",
    title: "HSBC Corp. Q3 Earnings",
    logo: require("../../../assets/hsbc.png"),
  },
  {
    date: "THU 1",
    title: "Coca Cola Corp. Q3 Earnings",
    logo: require("../../../assets/cocacola.jpeg"),
  },
  {
    date: "THU 1",
    title: "Walmart Q3 Earnings Call",
    logo: require("../../../assets/walmartlogo.png"),
  },
];

const Events = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Events</Text>
        <View style={styles.dateContainer}>
          <Ionicons name="calendar" size={16} color="#F5A623" />
          <Text style={styles.dateText}>January 2025</Text>
        </View>
      </View>

      <ScrollView>
        {events.map((event, index) => (
          <View key={index} style={styles.eventCard}>
            <Text style={styles.eventDate}>{event.date}</Text>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Image source={event.logo} style={styles.eventLogo} />
          </View>
        ))}
      </ScrollView>

      <Text style={styles.showAll}>Show All →</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateText: {
    color: "#F5A623",
    marginLeft: 5,
  },
  eventCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2C2C2C",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  eventDate: {
    color: "#F5A623",
    fontWeight: "bold",
  },
  eventTitle: {
    color: "white",
    fontSize: 14,
    flex: 1,
    marginLeft: 10,
  },
  eventLogo: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  showAll: {
    color: "#F5A623",
    textAlign: "center",
    marginTop: 10,
  },
});

export default Events;
