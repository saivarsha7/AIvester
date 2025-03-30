import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

const EditPortfolioScreen = ({ navigation }) => {
    const [portfolioName, setPortfolioName] = useState("Retirement");
    const [investmentAmount, setInvestmentAmount] = useState("385000");
    const [targetDate, setTargetDate] = useState("July 01, 2035");
    const [selectedIcon, setSelectedIcon] = useState("suitcase");
    const [selectedColor, setSelectedColor] = useState("#ff8c00");
    const [riskLevel, setRiskLevel] = useState(3);
    const [theme, setTheme] = useState("Standard Portfolio");

    const icons = ["suitcase", "piggy-bank", "chart-line", "wallet", "university"];
    const colors = ["#ff8c00", "#ffd700", "#1e90ff", "#32cd32"];

    return (
        <ScrollView style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.title}>Edit Portfolio</Text>
                <View style={{ width: 24 }} />
            </View>

            {/* Section 1: General Information */}
            <View style={styles.section}>
                <Text style={styles.label}>Portfolio Name</Text>
                <TextInput
                    style={styles.input}
                    value={portfolioName}
                    onChangeText={setPortfolioName}
                />

                <Text style={styles.label}>Investment Amount ($)</Text>
                <TextInput
                    style={styles.input}
                    value={investmentAmount}
                    onChangeText={setInvestmentAmount}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>Target Date</Text>
                <TextInput
                    style={styles.input}
                    value={targetDate}
                    onChangeText={setTargetDate}
                />
            </View>

            {/* Section 2: Portfolio Icon */}
            <View style={styles.section}>
                <Text style={styles.label}>Portfolio Icon</Text>
                <View style={styles.iconRow}>
                    {icons.map((icon, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setSelectedIcon(icon)}
                            style={[
                                styles.iconWrapper,
                                selectedIcon === icon && styles.selectedIcon
                            ]}
                        >
                            <FontAwesome5 name={icon} size={24} color="#555" />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Section 3: Portfolio Color */}
            <View style={styles.section}>
                <Text style={styles.label}>Portfolio Color</Text>
                <View style={styles.colorRow}>
                    {colors.map((color, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setSelectedColor(color)}
                            style={[
                                styles.colorSwatch,
                                { backgroundColor: color },
                                selectedColor === color && styles.selectedColorSwatch
                            ]}
                        />
                    ))}
                </View>
            </View>

            {/* Section 4: Theme */}
            <View style={styles.section}>
                <Text style={styles.label}>Theme</Text>
                <View style={styles.themeCard}>
                    <Text style={styles.themeText}>{theme}</Text>
                    <Text style={styles.themeDescription}>
                        A standard portfolio that prioritizes stability over returns.
                    </Text>
                    <TouchableOpacity style={styles.themeButton}>
                        <Text style={styles.buttonText}>Change Portfolio Theme</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Section 5: Risk Level */}
            <View style={styles.section}>
                <Text style={styles.label}>Risk Level</Text>
                <View style={styles.riskCard}>
                    <Text style={styles.riskText}>Risk Level: {riskLevel}</Text>
                    <Slider
                        style={{ width: "100%", height: 40 }}
                        minimumValue={1}
                        maximumValue={5}
                        step={1}
                        value={riskLevel}
                        onValueChange={(value) => setRiskLevel(value)}
                        minimumTrackTintColor="#ff8c00"
                        maximumTrackTintColor="#ccc"
                        thumbTintColor="#ff8c00"
                    />
                    <Text style={styles.helperText}>
                        Adjust based on your comfort with risk.
                    </Text>
                </View>
            </View>

            {/* Footer Section: Buttons */}
            <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save Portfolio</Text>
            </TouchableOpacity>

            {/* Add New Portfolio Button */}
            <TouchableOpacity 
                style={styles.addButton} 
                onPress={() => navigation.navigate("AddNewPortfolio")}
            >
                <Text style={styles.addButtonText}>+ Add New Portfolio</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f5f1e8", padding: 15 },
    header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 },
    title: { fontSize: 20, fontWeight: "bold" },
    section: { marginBottom: 20 },
    label: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
    input: { backgroundColor: "#fff", padding: 10, borderRadius: 5, borderWidth: 1, borderColor: "#ddd" },
    iconRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
    iconWrapper: { padding: 10, borderRadius: 10, backgroundColor: "#fff" },
    selectedIcon: { borderColor: "#ff8c00", borderWidth: 2 },
    colorRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
    colorSwatch: { width: 40, height: 40, borderRadius: 20 },
    selectedColorSwatch: { borderWidth: 3, borderColor: "#333" },
    themeCard: { backgroundColor: "#fff", padding: 15, borderRadius: 10, elevation: 3 },
    themeText: { fontSize: 16, fontWeight: "bold" },
    themeDescription: { fontSize: 14, color: "#666", marginTop: 5 },
    themeButton: { backgroundColor: "#ff8c00", padding: 10, borderRadius: 5, marginTop: 10, alignItems: "center" },
    buttonText: { color: "#fff", fontWeight: "bold" },
    riskCard: { backgroundColor: "#fff", padding: 15, borderRadius: 10, elevation: 3 },
    riskText: { fontSize: 16, fontWeight: "bold" },
    helperText: { fontSize: 12, color: "#666", marginTop: 5 },
    saveButton: { backgroundColor: "#ff8c00", padding: 15, borderRadius: 10, alignItems: "center", marginVertical: 10 },
    saveButtonText: { fontSize: 18, fontWeight: "bold", color: "#fff" },
    addButton: { backgroundColor: "#008080", padding: 15, borderRadius: 10, alignItems: "center", marginVertical: 10 },
    addButtonText: { fontSize: 18, fontWeight: "bold", color: "#fff" }
});

export default EditPortfolioScreen;
