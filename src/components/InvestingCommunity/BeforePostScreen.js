import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const BeforePostScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/rules.jpeg")} style={styles.image} />
      <Text style={styles.title}>Before you post...</Text>
      <Text style={styles.subtitle}>
        Please read our terms and conditions and ensure the following:
      </Text>
      <View style={styles.rule}>
        <Text>Respect Others</Text>
        <Icon name="check-circle" size={20} color="#F4A000" />
      </View>
      <View style={styles.rule}>
        <Text>Don’t Share Sensitive Info</Text>
        <Icon name="error" size={20} color="red" />
      </View>
      <View style={styles.rule}>
        <Text>Don’t be Toxic</Text>
        <Icon name="check-circle" size={20} color="green" />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.replace("PostFeedScreen")}>
        <Text style={styles.buttonText}>Understood, let’s post</Text>
      </TouchableOpacity>
      <View style={styles.terms}>
        <Text style={{ color: "#F4A000" }}>Terms & Conditions</Text>
        <Text style={{ color: "#F4A000" }}>Privacy Policy</Text>
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
  rule: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  terms: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
});

export default BeforePostScreen;
