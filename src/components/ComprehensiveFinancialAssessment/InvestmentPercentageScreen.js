import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import Slider from '@react-native-community/slider';

export default function InvestmentPercentageScreen({ navigation }) {
  const [percentage, setPercentage] = useState(25);
  const income = 5000; // Example monthly income
  const radius = 60; // Circle radius
  const strokeWidth = 12;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (percentage / 100) * circumference;

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>How much income do you invest month?</Text>

      {/* Circular Progress Bar */}
      <View style={styles.chartContainer}>
        <Svg width={180} height={180} viewBox="0 0 180 180">
          {/* Background Circle */}
          <Circle
            cx="90"
            cy="90"
            r={radius}
            stroke="#EAEAEA"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress Arc */}
          <Circle
            cx="90"
            cy="90"
            r={radius}
            stroke="#F7941D"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={progressOffset}
            strokeLinecap="round"
          />
        </Svg>
        <Text style={styles.percentageText}>{percentage}%</Text>
      </View>

      {/* Drag Instruction */}
      <Text style={styles.dragText}>ⓘ Drag the chart to adjust</Text>

      {/* Investment Caption */}
      <Text style={styles.caption}>
        I save <Text style={{ fontWeight: 'bold' }}>{percentage}%</Text> of my income (${((percentage / 100) * income).toLocaleString()}).
      </Text>

      {/* Slider for Adjusting Percentage */}
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={percentage}
        onValueChange={(value) => setPercentage(value)}
        minimumTrackTintColor="#F7941D"
        thumbTintColor="#F7941D"
      />

      {/* Continue Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PortfolioTypeSelectionScreen')}>
        <Text style={styles.buttonText}>Continue →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  chartContainer: { alignItems: 'center', marginBottom: 10 },
  percentageText: { fontSize: 32, fontWeight: 'bold', color: '#F7941D', position: 'absolute', top: '43%' },
  dragText: { textAlign: 'center', color: '#777', fontSize: 12, marginVertical: 8 },
  caption: { textAlign: 'center', fontSize: 16, marginVertical: 10 },
  slider: { width: '80%', alignSelf: 'center', marginVertical: 10 },
  button: { backgroundColor: '#F7941D', padding: 15, borderRadius: 10, marginTop: 20, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
