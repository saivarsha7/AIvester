import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const ProfileAvatarSetup = ({ navigation }) => {
  const [image, setImage] = useState(null);

  // Function to pick an image
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1], // Square Image
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // Store image URI
    }
  };

  // Function to handle Upload & Navigate
  const handleUploadAndContinue = () => {
    if (image) {
      navigation.navigate("AddBankAccount"); // Move to next screen after upload
    } else {
      Alert.alert("Upload Required", "Please upload a profile picture before continuing.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Let’s Set Up Your Profile Avatar</Text>

      {/* Profile Image Placeholder */}
      <View style={styles.imageContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.profileImage} />
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>No Image</Text>
          </View>
        )}
      </View>

      {/* Upload Profile Button */}
      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <Text style={styles.buttonText}>Upload Profile</Text>
      </TouchableOpacity>

      {/* Continue Button (Enabled Only if Image is Selected) */}
      <TouchableOpacity
        style={[styles.continueButton, !image && styles.disabledButton]}
        onPress={handleUploadAndContinue}
        disabled={!image}
      >
        <Text style={styles.buttonText}>Continue →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center", padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", color: "#333", marginBottom: 20 },
  imageContainer: { width: 120, height: 120, borderRadius: 60, marginBottom: 20, overflow: "hidden" },
  profileImage: { width: "100%", height: "100%", borderRadius: 60 },
  placeholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: { color: "#777" },
  uploadButton: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
    marginBottom: 10,
  },
  continueButton: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  disabledButton: { backgroundColor: "#ccc" },
  buttonText: { color: "#000", fontWeight: "bold", fontSize: 16 },
});

export default ProfileAvatarSetup;
