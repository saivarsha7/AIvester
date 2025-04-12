import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const CommunityHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/community.jpeg")} style={styles.image} />
      <Text style={styles.title}>AIvester Finance & Investing Community</Text>
      <Text style={styles.subtitle}>
        Let’s join and explore our finance community.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BeforePostScreen")}
      >
        <Text style={styles.buttonText}>Explore Community</Text>
      </TouchableOpacity>
      <View style={styles.navbar}>
        <Icon name="home" size={24} color="#333" />
        <Icon name="bar-chart" size={24} color="#333" />
        <Icon name="people" size={24} color="#F4A000" />
        <Icon name="sync-alt" size={24} color="#333" />
        <Icon name="person" size={24} color="#333" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: 250,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#F4A000",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
    bottom: 20,
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
});

export default CommunityHomeScreen;
