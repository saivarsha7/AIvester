import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';

const articles = [
  {
    id: '1',
    category: ['Budgeting', 'Inflation'],
    title: 'How to Fight Inflation with Long-Term Investing with Roboadvisor',
    author: 'Alisha Yee',
    image: require('../../../assets/article-image.jpeg'),
    profile: require('../../../assets/profile-pic.jpeg'),
  },
  {
    id: '2',
    category: ['Budgeting', 'Inflation'],
    title: 'Top Investment Trends to Watch in 2024',
    author: 'Julia DeMartens',
    image: require('../../../assets/article-image2.jpeg'),
    profile: require('../../../assets/profile-pic2.jpeg'),
  },
  {
    id: '3',
    category: ['Budgeting', 'Inflation'],
    title: 'Is Now the Right Time to Mortgage a House? Our Insights',
    author: 'Ayesha Blanc',
    image: require('../../../assets/article-image3.jpeg'),
    profile: require('../../../assets/profile-pic3.jpeg'),
  },
];

const ArticleScreen = () => {
  const renderHeader = () => (
    <View>
      {/* Header */}
      <Text style={styles.header}>Articles</Text>
      <Text style={styles.subHeader}>Browse weekly articles curated exclusively from our team.</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#888" />
        <TextInput placeholder="Search for an article..." placeholderTextColor="#888" style={styles.searchInput} />
        <Feather name="filter" size={20} color="#888" />
      </View>

      {/* Filters */}
      <View style={styles.filterContainer}>
        {['Money', 'Saving', 'Investing'].map((tag, index) => (
          <TouchableOpacity key={index} style={styles.filterButton}>
            <Text style={styles.filterText}>💰 {tag}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Sorting Option */}
      <View style={styles.sortContainer}>
        <Text style={styles.allArticlesText}>All Articles</Text>
        <TouchableOpacity style={styles.sortButton}>
          <Text style={styles.sortText}>Most Popular</Text>
          <MaterialIcons name="keyboard-arrow-down" size={18} color="gold" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        renderItem={({ item }) => (
          <View style={styles.articleCard}>
            {/* Article Image */}
            <Image source={item.image} style={styles.articleImage} />

            {/* Article Details */}
            <View style={styles.articleContent}>
              <Text style={styles.articleCategory}>{item.category.join(' • ')}</Text>
              <Text style={styles.articleTitle}>{item.title}</Text>

              {/* Author Info */}
              <View style={styles.authorContainer}>
                <Image source={item.profile} style={styles.profilePic} />
                <Text style={styles.articleAuthor}>{item.author}</Text>
              </View>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  header: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subHeader: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 10,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    marginLeft: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  filterButton: {
    backgroundColor: '#1E1E1E',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  filterText: {
    color: '#ccc',
    fontSize: 14,
  },
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  allArticlesText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    color: 'gold',
    fontSize: 14,
    marginRight: 5,
  },
  articleCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
  },
  articleImage: {
    width: '100%',
    height: 150,
  },
  articleContent: {
    padding: 10,
  },
  articleCategory: {
    color: '#999',
    fontSize: 12,
  },
  articleTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  articleAuthor: {
    color: '#888',
    fontSize: 12,
  },
});

export default ArticleScreen;
