import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const newsData = [
  {
    id: "1",
    title: "Stocks recover in the US after a strong performance at the Nasdaq 100",
    source: "Bloomberg",
    time: "2 days ago",
    image: require("../../../assets/news1.png"), // Replace with actual image path
    change: "+1.5%",
  },
  {
    id: "2",
    title: "European Bond Yields Dropping Due to Lower Demand",
    source: "Reuters",
    time: "3 days ago",
    image: require("../../../assets/news2.png"), // Replace with actual image path
    change: "-0.75%",
  },
  {
    id: "3",
    title: "Market rallies as FED shows stable investment",
    source: "Forbes",
    time: "4 days ago",
    image: require("../../../assets/news3.png"), // Replace with actual image path
    change: "+2.1%",
  },
];

const NewsArticles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>News & Articles</Text>
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.textContainer}>
              <Text style={styles.changeText(item.change)}>
                {item.change}
              </Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.meta}>
                {item.source} • {item.time}
              </Text>
            </View>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NewsArticles;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e1e1e",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#2a2a2a",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  title: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  meta: {
    color: "#aaa",
    fontSize: 12,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 6,
  },
  changeText: (change) => ({
    color: change.includes("+") ? "#4caf50" : "#ff4d4d",
    fontSize: 13,
    marginBottom: 5,
  }),
});
