import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim().toLowerCase();
    if (trimmedQuery === 'news') {
      navigation.navigate('NewsScreen');
    }
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <Text style={styles.heading}>Search Anything...</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
      />

      {/* Trending Searches */}
      <Text style={styles.subHeading}>Trending Searches</Text>
      <View style={styles.tagsContainer}>
        {['$TSLA', '$VOO', '$ETF', '$VTI', '$GOOG'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.tag}>
            <Text style={styles.tagText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Go to Community Button */}
      <TouchableOpacity style={styles.communityButton} onPress={() => navigation.navigate('CommunityHomeScreen')}>
        <Text style={styles.communityButtonText}>Go to Community</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f8f8' },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  searchInput: { backgroundColor: '#fff', padding: 12, borderRadius: 8, fontSize: 16, marginBottom: 20 },
  subHeading: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  tagsContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 },
  tag: { backgroundColor: '#eee', padding: 8, borderRadius: 8, marginRight: 10, marginBottom: 10 },
  tagText: { fontSize: 14, color: '#333' },
  communityButton: { backgroundColor: '#F7941D', padding: 12, borderRadius: 10, alignItems: 'center', marginTop: 20 },
  communityButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
