// import React, { useState } from "react";
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
// import AssetCard from "./AssetCard";

// const categories = ["Stocks", "ETFs", "Crypto"];

// const assets = [
//   { id: "1", name: "Bitcoin", ticker: "BTC", price: "$58,000", change: "+2.3%", icon: require("../../../assets/bitcoin.png") },
//   { id: "2", name: "Tesla", ticker: "TSLA", price: "$720", change: "-1.2%", icon: require("../../../assets/tesla.png") },
//   { id: "3", name: "Google", ticker: "GOOGL", price: "$2,950", change: "+1.5%", icon: require("../../../assets/google.png") },
// ];

// const PopularMovements = () => {
//   const [selectedCategory, setSelectedCategory] = useState("Stocks");

//   return (
//     <View>
//       {/* Category Filter */}
//       <View style={styles.categoryContainer}>
//         {categories.map((category) => (
//           <TouchableOpacity key={category} onPress={() => setSelectedCategory(category)}>
//             <Text style={[styles.categoryText, selectedCategory === category && styles.activeCategory]}>
//               {category}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Asset List */}
//       <FlatList
//         data={assets}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => <AssetCard asset={item} />}
//       />
//     </View>
//   );
// };

// export default PopularMovements;

// const styles = StyleSheet.create({
//   categoryContainer: {
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     marginVertical: 10,
//   },
//   categoryText: {
//     color: "#aaa",
//     fontSize: 14,
//   },
//   activeCategory: {
//     color: "orange",
//     fontWeight: "bold",
//   },
// });


import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import AssetCard from "./AssetCard";
import { useNavigation } from "@react-navigation/native";

const categories = ["Stocks", "ETFs", "Crypto"];

const assets = [
  { id: "1", name: "Bitcoin", ticker: "BTC", price: "$58,000", change: "+2.3%", icon: require("../../../assets/bitcoin.png") },
  { id: "2", name: "Tesla", ticker: "TSLA", price: "$720", change: "-1.2%", icon: require("../../../assets/tesla.png") },
  { id: "3", name: "Google", ticker: "GOOGL", price: "$2,950", change: "+1.5%", icon: require("../../../assets/google.png") },
];

const PopularMovements = () => {
  const [selectedCategory, setSelectedCategory] = useState("Stocks");
  const navigation = useNavigation();

  return (
    <View>
      {/* Category Filter */}
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity key={category} onPress={() => setSelectedCategory(category)}>
            <Text style={[styles.categoryText, selectedCategory === category && styles.activeCategory]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Asset List */}
      <FlatList
        data={[...assets, { id: "show_more", name: "Show More Stocks" }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          item.id !== "show_more" ? (
            <AssetCard asset={item} />
          ) : (
            <TouchableOpacity style={styles.showMoreButton} onPress={() => navigation.navigate("AllStocks")}>
              <Text style={styles.showMoreText}>Show More Stocks</Text>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
};

export default PopularMovements;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  categoryText: {
    color: "#aaa",
    fontSize: 14,
  },
  activeCategory: {
    color: "orange",
    fontWeight: "bold",
  },
  showMoreButton: {
    padding: 15,
    alignItems: "center",
    backgroundColor: "#333",
    marginVertical: 10,
    borderRadius: 8,
  },
  showMoreText: {
    color: "orange",
    fontSize: 16,
    fontWeight: "bold",
  },
});
