import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

const DebtLevelScreen = ({ navigation }) => {
    const [debtLevel, setDebtLevel] = useState(3); // Default value
    const debtLabels = ['None', 'Low', 'Moderate', 'High', 'Excessive'];
    const debtColors = ['#2ecc71', '#27ae60', '#f39c12', '#e67e22', '#e74c3c'];

    return (
        <View style={styles.container}>
            {/* Icon + Question */}
            <View style={styles.header}>
                <Text style={styles.icon}>💰</Text>
                <Text style={styles.question}>Do you have any debt?</Text>
                <Text style={styles.subText}>On a scale of 1–5, what is your current debt level?</Text>
            </View>

            {/* Debt Level Display */}
            <Text style={[styles.debtLevel, { color: debtColors[debtLevel - 1] }]}>
                {debtLabels[debtLevel - 1]}
            </Text>

            {/* Slider */}
            <Slider
                style={styles.slider}
                minimumValue={1}
                maximumValue={5}
                step={1}
                value={debtLevel}
                minimumTrackTintColor={debtColors[debtLevel - 1]}
                maximumTrackTintColor="#ddd"
                thumbTintColor={debtColors[debtLevel - 1]}
                onValueChange={setDebtLevel}
            />

            {/* Slider Numbers */}
            <View style={styles.sliderLabels}>
                {[1, 2, 3, 4, 5].map((num) => (
                    <Text key={num} style={styles.sliderText}>{num}</Text>
                ))}
            </View>

            {/* Continue Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('PortfolioProjectionScreen')} // Replace with actual next screen name
            >
                <Text style={styles.buttonText}>Continue →</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DebtLevelScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f0e1', // Light beige
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    icon: {
        fontSize: 40,
        marginBottom: 10,
    },
    question: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#7f8c8d',
        marginTop: 5,
    },
    debtLevel: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    slider: {
        width: '90%',
        marginBottom: 10,
    },
    sliderLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },
    sliderText: {
        fontSize: 14,
        color: '#7f8c8d',
    },
    button: {
        backgroundColor: '#e67e22', // Orange
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 20,
        width: '90%',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});
