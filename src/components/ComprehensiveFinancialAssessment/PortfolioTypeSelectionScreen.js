import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PortfolioTypeScreen = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      id: 'socially_responsible',
      title: 'Socially Responsible',
      description: 'Invests in companies committed to sustainability.',
      image: require('../../assets/socially_responsible.png'), // Update the correct path
    },
    {
      id: 'hi_growth',
      title: 'High Growth',
      description: 'Targets investments in companies with rapid growth.',
      image: require('../../assets/favicon.png'),
    },
    {
      id: 'passive_income',
      title: 'Passive Income',
      description: 'Prioritizes assets that generate consistent income.',
      image: require('../../assets/favicon.png'),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>{'<'}</Text>
        </TouchableOpacity>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
        <TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>What portfolio type do you prefer?</Text>

      {/* Options List */}
      {options.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={[
            styles.option,
            selectedOption === option.id && styles.selectedOption,
          ]}
          onPress={() => setSelectedOption(option.id)}
        >
          <View>
            <Text style={styles.optionTitle}>{option.title}</Text>
            <Text style={styles.optionDescription}>{option.description}</Text>
          </View>
          <Image source={option.image} style={styles.optionImage} />
        </TouchableOpacity>
      ))}

      {/* Continue Button */}
      <TouchableOpacity
        style={[
          styles.continueButton,
          !selectedOption && styles.disabledButton,
        ]}
        onPress={() => navigation.navigate('AIHomeScreen')} // Update screen name
        disabled={!selectedOption}
      >
        <Text style={styles.continueText}>Continue →</Text>
      </TouchableOpacity>

      {/* Prefer Not to Say Button */}
      <TouchableOpacity style={styles.preferNotToSay}>
        <Text style={styles.preferText}>Prefer not to say ✖</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20, paddingTop: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  backText: { fontSize: 20, color: 'black' },
  skipText: { color: 'orange', fontSize: 16 },
  progressBar: { flex: 1, height: 5, backgroundColor: '#ddd', marginHorizontal: 10 },
  progressFill: { width: '40%', height: 5, backgroundColor: 'orange' },
  title: { fontSize: 22, fontWeight: 'bold', marginVertical: 20 },
  option: { flexDirection: 'row', padding: 15, marginVertical: 5, borderRadius: 10, borderWidth: 1, borderColor: '#ddd' },
  selectedOption: { borderColor: 'orange', backgroundColor: '#FFF5E1' },
  optionTitle: { fontSize: 18, fontWeight: 'bold' },
  optionDescription: { fontSize: 14, color: '#666' },
  optionImage: { width: 50, height: 50, marginLeft: 'auto' },
  continueButton: { backgroundColor: 'orange', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20 },
  disabledButton: { backgroundColor: '#ddd' },
  continueText: { fontSize: 18, color: '#fff' },
  preferNotToSay: { alignItems: 'center', padding: 10, marginTop: 10 },
  preferText: { fontSize: 16, color: 'orange' },
});

export default PortfolioTypeScreen;
