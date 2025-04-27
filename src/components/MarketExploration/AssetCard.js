import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const AssetCard = ({ asset }) => {
  return (
    <View style={styles.card}>
      <Image source={asset.icon} style={styles.icon} />
      <View>
        <Text style={styles.name}>{asset.name} ({asset.ticker})</Text>
        <Text style={styles.price}>{asset.price}</Text>
      </View>
      <Text style={[styles.change, asset.change.includes("-") ? styles.negative : styles.positive]}>
        {asset.change}
      </Text>
    </View>
  );
};

export default AssetCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "ffffff",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  name: {
    color: "black",
    fontSize: 16,
  },
  price: {
    color: "#aaa",
    fontSize: 14,
  },
  change: {
    marginLeft: "auto",
    fontSize: 14,
  },
  positive: {
    color: "green",
  },
  negative: {
    color: "red",
  },
});
