import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import { Ionicons } from '@expo/vector-icons';

const InvestmentInsightsScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.title}>Portfolio Insight</Text>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate('EditPortfolio')}>
                                <Ionicons name="create-outline" size={24} color="#ff8c00" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name="calendar-outline" size={24} color="#ff8c00" style={styles.calendarIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Portfolio Overview */}
                    <View style={styles.section}>
                        <View style={styles.card}>
                            <Text style={styles.value}>$33,790</Text>
                            <Text style={styles.percentageChange}>+6.08%</Text>
                            <Ionicons name="stats-chart-outline" size={28} color="#ff8c00" />
                            <Text style={styles.subText}>24.5% Diversification</Text>
                        </View>
                    </View>

                    {/* Portfolio Performance */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Portfolio Performance</Text>
                        <BarChart
                            data={{
                                labels: ['Last Month', 'This Month'],
                                datasets: [{ data: [20000, 25000] }],
                            }}
                            width={350}
                            height={220}
                            yAxisLabel="$"
                            chartConfig={{
                                backgroundColor: '#fff',
                                backgroundGradientFrom: '#fff',
                                backgroundGradientTo: '#fff',
                                color: (opacity = 1) => `rgba(255, 140, 0, ${opacity})`,
                            }}
                            style={styles.chart}
                        />
                    </View>

                    {/* Asset Allocation */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Avg Asset Allocation</Text>
                        <PieChart
                            data={[
                                { name: 'Stocks', population: 60, color: '#ff8c00', legendFontColor: '#333', legendFontSize: 14 },
                                { name: 'Bonds', population: 25, color: '#ffd700', legendFontColor: '#333', legendFontSize: 14 },
                                { name: 'Cash', population: 15, color: '#32cd32', legendFontColor: '#333', legendFontSize: 14 },
                            ]}
                            width={350}
                            height={220}
                            chartConfig={{ color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})` }}
                            accessor="population"
                            backgroundColor="transparent"
                        />
                    </View>

                    {/* Portfolio Projection */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Portfolio Projection</Text>
                        <LineChart
                            data={{
                                labels: ['Now', '5Y', '10Y'],
                                datasets: [{ data: [33000, 50000, 85000] }],
                            }}
                            width={350}
                            height={220}
                            yAxisLabel="$"
                            chartConfig={{
                                backgroundColor: '#fff',
                                backgroundGradientFrom: '#fff',
                                backgroundGradientTo: '#fff',
                                color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                            }}
                            style={styles.chart}
                        />
                    </View>

                    {/* Diversification Score */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Diversification Score</Text>
                        <View style={styles.card}>
                            <Text style={styles.value}>85%</Text>
                            <Text style={styles.subText}>Your portfolio is well-diversified!</Text>
                        </View>
                    </View>

                    {/* Top Holdings */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Top Holdings</Text>
                        <View style={styles.card}>
                            <Text>Apple Inc. +2.91%</Text>
                            <Text>Tesla -1.22%</Text>
                        </View>
                    </View>

                    {/* Sector Categories */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Your Sector Categories</Text>
                        <View style={styles.card}>
                            <Text>Technology - 50%</Text>
                            <Text>Finance - 30%</Text>
                            <Text>Health - 20%</Text>
                        </View>
                    </View>

                    {/* Transaction Records */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Transaction Records</Text>
                        <View style={styles.card}>
                            <Text>Total Transactions: $454.35</Text>
                            <Text>Apple Inc.: +$200</Text>
                            <Text>Tesla: -$98</Text>
                        </View>
                    </View>

                    {/* Button to navigate */}
                    <TouchableOpacity style={styles.createBtn} onPress={() => navigation.navigate('CreatePortfolio')}>
                        <Text style={styles.createBtnText}>Portfolio Dashboard</Text>
                    </TouchableOpacity>
                </ScrollView>

                {/* Navigation Bar */}
                <View style={styles.navBar}>
                    <TouchableOpacity onPress={() => navigation.navigate('PortfolioDashboard')}>
                        <Ionicons name="home-outline" size={28} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="wallet-outline" size={28} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="trending-up-outline" size={28} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="person-outline" size={28} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default InvestmentInsightsScreen;
