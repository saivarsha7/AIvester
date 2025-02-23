import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

const { width } = Dimensions.get("window");

// Sample stock images (Replace with your own)
const slides = [
  { id: "1", image: require("../../assets/stocks1.JPEG") },
  { id: "2", image: require("../../assets/stocks2.JPEG") },
  { id: "3", image: require("../../assets/stocks3.JPEG") },
  { id: "4", image: require("../../assets/stocks4.JPEG") },
];

const OnboardingScreen = ({ navigation }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>Invest in over 3,500 Global Stocks & ETFs</Text>
      <Text style={styles.subText}>Options for everyone, from beginner to pros. Start with as little as $1.</Text>

      {/* Carousel */}
      <Carousel
        data={slides}
        renderItem={({ item }) => <Image source={item.image} style={styles.stockImage} />}
        sliderWidth={width}
        itemWidth={width * 0.7}
        onSnapToItem={(index) => setActiveSlide(index)}
      />

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View key={index} style={[styles.dot, { backgroundColor: index === activeSlide ? "orange" : "gray" }]} />
        ))}
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue →</Text>
      </TouchableOpacity>

      {/* Already have an account */}
      <TouchableOpacity>
        <Text style={styles.loginText}>I already have an account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212", alignItems: "center", paddingHorizontal: 20, paddingTop: 60 },
  heading: { fontSize: 22, fontWeight: "bold", color: "#fff", textAlign: "center", marginBottom: 10 },
  subText: { fontSize: 14, color: "#bbb", textAlign: "center", marginBottom: 20 },
  stockImage: { width: width * 0.7, height: 200, borderRadius: 10 },
  pagination: { flexDirection: "row", marginVertical: 10 },
  dot: { width: 10, height: 10, borderRadius: 5, marginHorizontal: 5 },
  continueButton: { backgroundColor: "orange", paddingVertical: 12, width: "100%", borderRadius: 8, alignItems: "center", marginBottom: 10 },
  continueText: { color: "#000", fontWeight: "bold", fontSize: 16 },
  loginText: { color: "orange", fontSize: 14, textDecorationLine: "underline" },
});

export default OnboardingScreen;
