import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PortfolioCompletionScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Celebration Illustration */}
            <Image
                source={{ uri: 'https://thumbs.dreamstime.com/b/successful-team-celebrating-achievements-vector-happy-employees-taking-selfie-success-teamwork-office-workplace-books-167547962.jpg' }}
                style={styles.image}
            />
            {/* Heading & Subtext */}
            <Text style={styles.title}>Portfolio Set Up!</Text>
            <Text style={styles.subtitle}>Great job! Remember, you can edit everything later on.</Text>

            {/* Portfolio Details Card */}
            <View style={styles.card}>
                <Text style={styles.detail}><Text style={styles.label}>Risk Level:</Text> Moderate</Text>
                <Text style={styles.detail}><Text style={styles.label}>Initial Investment:</Text> $10,000</Text>
                <Text style={styles.status}>Status: <Text style={styles.positive}>+$2,000</Text></Text>
            </View>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('PortfolioDashboardScreen')} // Navigate to Dashboard
            >
                <Text style={styles.buttonText}>Start Investing →</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PortfolioCompletionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f0e1', // Light beige background
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#2c3e50',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#7f8c8d',
        marginBottom: 20,
    },
    card: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
        alignItems: 'center',
        marginBottom: 20,
    },
    detail: {
        fontSize: 16,
        color: '#2c3e50',
        marginBottom: 5,
    },
    label: {
        fontWeight: 'bold',
        color: '#34495e',
    },
    status: {
        fontSize: 16,
        color: '#2c3e50',
        marginTop: 10,
    },
    positive: {
        color: '#27ae60', // Green color for positive status
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#e67e22', // Orange button
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        width: '90%',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});
