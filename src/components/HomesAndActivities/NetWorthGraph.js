import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const NetWorthGraph = () => {
  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{ data: [0, 50, 25, 75, 100, 50] }],
        }}
        width={350}
        height={200}
        yAxisLabel="$"
        chartConfig={{
          backgroundGradientFrom: '#1E1E1E',
          backgroundGradientTo: '#1E1E1E',
          color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`,
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  chart: {
    borderRadius: 10,
  },
});

export default NetWorthGraph;
