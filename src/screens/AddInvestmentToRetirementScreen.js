import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const AddInvestmentToRetirementScreen = ({ navigation }) => {
    const [selectedInvestment, setSelectedInvestment] = useState(null);

    const investmentOptions = [
        { id: "stock", icon: "chart-line", title: "Stock", description: "High-growth equity investments, tech, and science." },
        { id: "bond", icon: "file-invoice-dollar", title: "Bond", description: "Stable government and corporate fixed-income securities." },
        { id: "cash", icon: "money-bill-wave", title: "Cash", description: "Low-risk liquid investments like savings and CDs." },
        { id: "other", icon: "ellipsis-h", title: "Other", description: "Alternative investments like REITs, commodities, and more." },
    ];

    return (
        <ScrollView style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <FontAwesome5 name="chart-pie" size={40} color="#ff8c00" />
                <Text style={styles.title}>Add New Investment to Retirement</Text>
                <Text style={styles.subtitle}>Please choose what investment type to add.</Text>
            </View>

            {/* Investment Options Section */}
            {investmentOptions.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    style={[
                        styles.card,
                        selectedInvestment === item.id && styles.selectedCard
                    ]}
                    onPress={() => setSelectedInvestment(item.id)}
                >
                    <FontAwesome5 name={item.icon} size={24} color="#333" style={styles.icon} />
                    <View style={styles.cardTextContainer}>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardDescription}>{item.description}</Text>
                    </View>
                    <View style={[
                        styles.radioButton,
                        selectedInvestment === item.id && styles.selectedRadio
                    ]} />
                </TouchableOpacity>
            ))}

            {/* Footer Section */}
            <TouchableOpacity
                style={styles.proceedButton}
                onPress={() => navigation.navigate("StockSelection")}
            >
                <Text style={styles.proceedButtonText}>Set & Proceed</Text>
            </TouchableOpacity>

            {/* Drag Handle for Scrollability */}
            <View style={styles.dragHandle} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f5f1e8", padding: 20 },
    header: { alignItems: "center", marginBottom: 20 },
    title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginTop: 10 },
    subtitle: { fontSize: 14, color: "#666", textAlign: "center", marginTop: 5 },

    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        elevation: 3
    },
    selectedCard: { borderColor: "#ff8c00", borderWidth: 2, backgroundColor: "#ffebcc" },
    icon: { marginRight: 15 },
    cardTextContainer: { flex: 1 },
    cardTitle: { fontSize: 16, fontWeight: "bold" },
    cardDescription: { fontSize: 13, color: "#666", marginTop: 5 },
    radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#999"
    },
    selectedRadio: { borderColor: "#ff8c00", backgroundColor: "#ff8c00" },

    proceedButton: { backgroundColor: "#ff8c00", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 20 },
    proceedButtonText: { fontSize: 18, fontWeight: "bold", color: "#fff" },

    dragHandle: { width: 50, height: 5, backgroundColor: "#ccc", borderRadius: 3, alignSelf: "center", marginTop: 10 }
});

export default AddInvestmentToRetirementScreen;
