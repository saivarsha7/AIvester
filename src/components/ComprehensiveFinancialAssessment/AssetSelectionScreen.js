import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const assets = ['Stocks', 'Bond', 'Real Estate', 'ETFs', 'Mutual Fund', 'Commodity', 'Cryptocurrency', 'Other'];

export default function AssetSelectionScreen({ navigation }) {
  const [selectedAssets, setSelectedAssets] = useState([]);

  const toggleAsset = (asset) => {
    setSelectedAssets((prev) =>
      prev.includes(asset) ? prev.filter((a) => a !== asset) : [...prev, asset].slice(0, 3)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Which assets are you most interested in?</Text>
      <View style={styles.assetContainer}>
        {assets.map((asset) => (
          <TouchableOpacity
            key={asset}
            style={[styles.assetButton, selectedAssets.includes(asset) && styles.selected]}
            onPress={() => toggleAsset(asset)}
          >
            <Text style={[styles.assetText, selectedAssets.includes(asset) && styles.selectedText]}>{asset}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MonthlyIncomeScreen')}>
        <Text style={styles.buttonText}>Continue →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  assetContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  assetButton: { padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 20, margin: 5 },
  selected: { backgroundColor: '#F7941D', borderColor: '#F7941D' },
  assetText: { color: '#000' },
  selectedText: { color: '#fff' },
  button: { backgroundColor: '#F7941D', padding: 15, borderRadius: 10, marginTop: 20, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18 },
});
