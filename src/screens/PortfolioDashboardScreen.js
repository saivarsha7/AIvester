import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const PortfolioDashboardScreen = ({ navigation }) => {
    const [selectedTimeRange, setSelectedTimeRange] = useState('1M'); // Default time filter

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Portfolio Value & Performance */}
                <View style={styles.portfolioHeader}>
                    <Text style={styles.portfolioValue}>$385,115.02</Text>
                    <Text style={[styles.portfolioChange, { color: '#e74c3c' }]}>-2.05%</Text> 
                </View>

                {/* Portfolio Performance Graph */}
                <View style={styles.graphContainer}>
                    <LineChart
                        data={{
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                            datasets: [{ data: [400000, 420000, 410000, 395000, 390000, 385000] }]
                        }}
                        width={350}
                        height={220}
                        chartConfig={{
                            backgroundColor: '#fff',
                            backgroundGradientFrom: '#f5f0e1',
                            backgroundGradientTo: '#f5f0e1',
                            decimalPlaces: 2,
                            color: (opacity = 1) => `rgba(231, 76, 60, ${opacity})`, // Red graph line
                            labelColor: (opacity = 1) => `rgba(44, 62, 80, ${opacity})`
                        }}
                        bezier
                    />
                    
                    {/* Time Range Filters */}
                    <View style={styles.filters}>
                        {['1D', '1W', '1M', '3M', '1Y', 'All'].map((range) => (
                            <TouchableOpacity
                                key={range}
                                style={[styles.filterButton, selectedTimeRange === range && styles.activeFilter]}
                                onPress={() => setSelectedTimeRange(range)}
                            >
                                <Text style={[styles.filterText, selectedTimeRange === range && styles.activeFilterText]}>
                                    {range}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Quick Action Buttons */}
                <View style={styles.actionsContainer}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="add-circle" size={24} color="#e67e22" />
                        <Text style={styles.actionText}>Deposit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="arrow-down-circle" size={24} color="#e67e22" />
                        <Text style={styles.actionText}>Withdraw</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="swap-horizontal" size={24} color="#e67e22" />
                        <Text style={styles.actionText}>Transfer</Text>
                    </TouchableOpacity>
                </View>

                {/* Asset Allocation */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Asset Allocation</Text>
                    <View style={styles.assetContainer}>
                        <View style={styles.assetItem}>
                            <FontAwesome5 name="chart-line" size={20} color="#3498db" />
                            <Text style={styles.assetLabel}>Stocks</Text>
                            <Text style={styles.assetValue}>50%</Text>
                        </View>
                        <View style={styles.assetItem}>
                            <FontAwesome5 name="hand-holding-usd" size={20} color="#e67e22" />
                            <Text style={styles.assetLabel}>Bonds</Text>
                            <Text style={styles.assetValue}>25%</Text>
                        </View>
                        <View style={styles.assetItem}>
                            <FontAwesome5 name="chart-pie" size={20} color="#2ecc71" />
                            <Text style={styles.assetLabel}>ETFs</Text>
                            <Text style={styles.assetValue}>15%</Text>
                        </View>
                        <View style={styles.assetItem}>
                            <FontAwesome5 name="wallet" size={20} color="#9b59b6" />
                            <Text style={styles.assetLabel}>Cash</Text>
                            <Text style={styles.assetValue}>10%</Text>
                        </View>
                    </View>
                </View>

                {/* Portfolio Insights */}
                <View style={styles.section}>
                    <Text style={styles.insightText}>You haven’t made any stock investments in Trade</Text>
                    <TouchableOpacity 
    style={styles.insightButton} 
    onPress={() => navigation.navigate('InvestmentInsights')} // Navigate to Investment Insights
>
    <Text style={styles.insightButtonText}>See All Insights →</Text>
</TouchableOpacity>

                </View>

                {/* Portfolio Categories */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Your Portfolios</Text>
                    {[
                        { title: 'Retirement', value: '$120,000', change: '+$12,500 (+11.6%)', icon: 'briefcase', color: '#27ae60' },
                        { title: 'Savings', value: '$50,000', change: '-$2,000 (-4.0%)', icon: 'piggy-bank', color: '#e74c3c' },
                        { title: 'Trips & Ticks', value: '$15,200', change: '+$900 (+6.3%)', icon: 'plane', color: '#3498db' }
                    ].map((item, index) => (
                        <View key={index} style={styles.portfolioCard}>
                            <FontAwesome5 name={item.icon} size={24} color={item.color} />
                            <View>
                                <Text style={styles.portfolioTitle}>{item.title}</Text>
                                <Text style={styles.portfolioValue}>{item.value}</Text>
                                <Text style={{ color: item.change.includes('-') ? '#e74c3c' : '#27ae60' }}>{item.change}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default PortfolioDashboardScreen;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f0e1' },
    portfolioHeader: { alignItems: 'center', marginVertical: 20 },
    portfolioValue: { fontSize: 26, fontWeight: 'bold', color: '#2c3e50' },
    portfolioChange: { fontSize: 16, marginTop: 5 },
    graphContainer: { alignItems: 'center' },
    filters: { flexDirection: 'row', justifyContent: 'center', marginVertical: 10 },
    filterButton: { padding: 8, marginHorizontal: 5 },
    activeFilter: { borderBottomWidth: 2, borderBottomColor: '#e67e22' },
    activeFilterText: { fontWeight: 'bold', color: '#e67e22' },
    actionsContainer: { flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 20 },
    actionButton: { alignItems: 'center' },
    actionText: { marginTop: 5, fontSize: 14 },
    section: { paddingHorizontal: 20, marginBottom: 20 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
    insightText: { textAlign: 'center', color: '#7f8c8d' },
    insightCTA: { color: '#e67e22', textAlign: 'center', marginTop: 5 },
    portfolioCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10 },
    portfolioTitle: { fontSize: 16, fontWeight: 'bold' }
});
