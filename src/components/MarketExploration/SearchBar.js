import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color="white" />
      <TextInput
        style={styles.input}
        placeholder="Search stocks, trends, ETFs..."
        placeholderTextColor="#aaa"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    padding: 10,
    borderRadius: 10,
  },
  input: {
    color: "white",
    marginLeft: 10,
    flex: 1,
  },
});
