import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Feedback = () => {
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const feedbackOptions = [
    { id: 1, image: require('../../../assets/sad.png'), label: 'Very Bad' },
    { id: 2, image: require('../../../assets/slightly-sad.png'), label: 'Bad' },
    { id: 3, image: require('../../../assets/neutral.png'), label: 'Neutral' },
    { id: 4, image: require('../../../assets/smile.png'), label: 'Good' },
    { id: 5, image: require('../../../assets/happy.png'), label: 'Very Good' }
  ];

  return (
    <View style={styles.feedbackSection}>
      <Text style={styles.title}>How are you liking our app?</Text>
      <Text style={styles.description}>Your feedback helps us improve.</Text>
      
      <View style={styles.feedbackIcons}>
        {feedbackOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            onPress={() => setSelectedFeedback(option.id)}
            style={[
              styles.feedbackButton,
              selectedFeedback === option.id && styles.selectedFeedback
            ]}
          >
            <Image source={option.image} style={styles.feedbackImage} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feedbackSection: {
    alignItems: 'center',
    marginTop: 20,
    padding: 15,
    backgroundColor: '#1E1E1E',
    borderRadius: 10
  },
  feedbackIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15
  },
  feedbackButton: {
    padding: 8,
    borderRadius: 50
  },
  selectedFeedback: {
    backgroundColor: '#333',
    borderRadius: 50
  },
  feedbackImage: {
    width: 40,
    height: 40,
    marginHorizontal: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  description: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 10
  }
});

export default Feedback;
