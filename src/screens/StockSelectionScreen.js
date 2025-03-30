import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    FlatList
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const stocks = [
    { id: "1", name: "Google", symbol: "GOOGL", price: "$2,345.00", change: "+3.21%", logo: "search" },
    { id: "2", name: "Apple", symbol: "AAPL", price: "$174.50", change: "-1.45%", logo: "apple" },
    { id: "3", name: "Microsoft", symbol: "MSFT", price: "$320.78", change: "+2.11%", logo: "windows" },
    { id: "4", name: "Amazon", symbol: "AMZN", price: "$3,285.10", change: "+1.89%", logo: "shopping-cart" },
];

const StockSelectionScreen = ({ navigation }) => {
    const [selectedStocks, setSelectedStocks] = useState([]);

    const toggleStockSelection = (id) => {
        if (selectedStocks.includes(id)) {
            setSelectedStocks(selectedStocks.filter((stockId) => stockId !== id));
        } else {
            setSelectedStocks([...selectedStocks, id]);
        }
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.title}>What stock would you like to invest?</Text>
                <View style={{ width: 24 }} />
            </View>

            <Text style={styles.subtitle}>Please choose what stocks to add.</Text>

            {/* Filter Options */}
            <View style={styles.filterRow}>
                <TextInput style={styles.searchBar} placeholder="Search Stocks..." />
                <TouchableOpacity style={styles.sortButton}>
                    <MaterialIcons name="sort" size={20} color="#fff" />
                    <Text style={styles.sortText}>Sort</Text>
                </TouchableOpacity>
            </View>

            {/* Stock List */}
            <FlatList
                data={stocks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.stockCard,
                            selectedStocks.includes(item.id) && styles.selectedStock
                        ]}
                        onPress={() => toggleStockSelection(item.id)}
                    >
                        <Ionicons name={item.logo} size={30} color="#333" style={styles.stockIcon} />
                        <View style={styles.stockInfo}>
                            <Text style={styles.stockName}>{item.name}</Text>
                            <Text style={styles.stockSymbol}>{item.symbol}</Text>
                        </View>
                        <View style={styles.stockPriceContainer}>
                            <Text style={styles.stockPrice}>{item.price}</Text>
                            <Text style={[styles.stockChange, item.change.includes("+") ? styles.positiveChange : styles.negativeChange]}>
                                {item.change}
                            </Text>
                        </View>
                        <View style={styles.checkbox}>
                            {selectedStocks.includes(item.id) && <Ionicons name="checkmark-circle" size={24} color="#ff8c00" />}
                        </View>
                    </TouchableOpacity>
                )}
            />

            {/* Select All Stocks Button */}
            <TouchableOpacity 
                onPress={() => alert("Stocks Selected: " + selectedStocks.length)} 
                style={styles.selectButton}
            >
                <Text style={styles.selectButtonText}>Select All Stocks</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f5f1e8", padding: 15 },
    header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10 },
    title: { fontSize: 18, fontWeight: "bold", flex: 1, textAlign: "center" },
    subtitle: { fontSize: 14, color: "#666", textAlign: "center", marginBottom: 15 },
    filterRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 15 },
    searchBar: { flex: 1, backgroundColor: "#fff", padding: 10, borderRadius: 5, borderWidth: 1, borderColor: "#ddd", marginRight: 10 },
    sortButton: { flexDirection: "row", backgroundColor: "#ff8c00", padding: 10, borderRadius: 5, alignItems: "center" },
    sortText: { color: "#fff", marginLeft: 5 },
    stockCard: { flexDirection: "row", alignItems: "center", backgroundColor: "#fff", padding: 15, borderRadius: 10, marginBottom: 10 },
    selectedStock: { borderColor: "#ff8c00", borderWidth: 2 },
    stockIcon: { marginRight: 10 },
    stockInfo: { flex: 1 },
    stockName: { fontSize: 16, fontWeight: "bold" },
    stockSymbol: { fontSize: 14, color: "#666" },
    stockPriceContainer: { alignItems: "flex-end" },
    stockPrice: { fontSize: 16, fontWeight: "bold" },
    stockChange: { fontSize: 14 },
    positiveChange: { color: "green" },
    negativeChange: { color: "red" },
    checkbox: { marginLeft: 10 },
    selectButton: { backgroundColor: "#ff8c00", padding: 15, borderRadius: 10, alignItems: "center", marginVertical: 20 },
    selectButtonText: { fontSize: 18, fontWeight: "bold", color: "#fff" }
});

export default StockSelectionScreen;
