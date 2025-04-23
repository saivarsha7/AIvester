// NetWorthGraph.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NetWorthGraph = () => {
  return (
    <View style={styles.graphContainer}>
      {/* Placeholder for a future chart/graph */}
      <Text style={styles.graphText}>[Net Worth Graph will go here]</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  graphContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdf3e6',
    borderRadius: 10,
    marginVertical: 20,
  },
  graphText: {
    color: '#aaa',
    fontStyle: 'italic',
  },
});

export default NetWorthGraph;
