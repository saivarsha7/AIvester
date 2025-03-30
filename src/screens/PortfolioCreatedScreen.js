import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const PortfolioCreatedScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Header Illustration */}
            <Image 
    source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/014/333/767/small_2x/businessman-in-white-shirt-blue-tie-celebrating-with-clenched-fists-in-front-of-positive-growing-bar-chart-with-coin-ornament-3d-rendering-of-business-investment-concept-png.png" }} 
    style={styles.illustration} 
    resizeMode="contain"
/>


            {/* Success Message */}
            <Text style={styles.title}>Portfolio Created!</Text>
            <Text style={styles.description}>
                Your retirement portfolio is successfully created. Let’s edit your investment and adjust your investment goals.
            </Text>

            {/* Portfolio Overview Card */}
            <View style={styles.portfolioCard}>
                <Text style={styles.portfolioName}>Retirement</Text>
                <Text style={styles.portfolioTimeFrame}>Time Frame: 10 Years</Text>
                <Text style={styles.currentValue}>$0.00</Text>
                <Text style={styles.performanceIndicator}>+$0.00 (+0%)</Text>
            </View>

            {/* Adjust Investment Button */}
            <TouchableOpacity 
                style={styles.adjustButton} 
                onPress={() => navigation.navigate("EditPortfolioScreen")}
            >
                <Text style={styles.buttonText}>Adjust Investment</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f5f1e8", alignItems: "center", justifyContent: "center", padding: 20 },
    illustration: { width: 250, height: 180, marginBottom: 20 },
    title: { fontSize: 22, fontWeight: "bold", color: "#333", marginBottom: 10 },
    description: { fontSize: 16, textAlign: "center", color: "#666", marginBottom: 20 },
    portfolioCard: { backgroundColor: "#fff", padding: 20, borderRadius: 10, alignItems: "center", width: "90%", elevation: 3 },
    portfolioName: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
    portfolioTimeFrame: { fontSize: 14, color: "#777" },
    currentValue: { fontSize: 24, fontWeight: "bold", marginVertical: 10 },
    performanceIndicator: { fontSize: 16, color: "green" },
    adjustButton: { backgroundColor: "#ff8c00", padding: 15, borderRadius: 10, alignItems: "center", width: "90%", marginTop: 20 },
    buttonText: { fontSize: 18, fontWeight: "bold", color: "#fff" }
});

export default PortfolioCreatedScreen;
