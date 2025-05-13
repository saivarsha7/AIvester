import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

let DatePicker;
if (Platform.OS === "web") {
  DatePicker = require("react-datepicker").default;
  // import "react-datepicker/dist/react-datepicker.css"; // Commented out due to bundling issues
}

const PersonalDetailsScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nationality, setNationality] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.card}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Image
            source={{
              uri: "https://png.pngtree.com/png-clipart/20230423/original/pngtree-modern-finance-investment-logo-png-image_9077777.png",
            }}
            style={styles.profileIcon}
          />

          <Text style={styles.header}>
            Please fill & confirm your personal details.
          </Text>
          <Text style={styles.subText}>
            Please enter your personal details truthfully.
          </Text>

          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="#666" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="First Legal Name"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="#666" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Last Legal Name"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="card-outline" size={20} color="#666" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Tax Number (Optional)"
              value={taxNumber}
              onChangeText={setTaxNumber}
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="calendar-outline" size={20} color="#666" style={styles.icon} />
            {Platform.OS === "web" && DatePicker ? (
              <DatePicker
                selected={dateOfBirth}
                onChange={(date) => setDateOfBirth(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select Date of Birth"
                customInput={
                  <TextInput
                    style={styles.input}
                    value={dateOfBirth ? dateOfBirth.toDateString() : ""}
                    placeholder="Select Date of Birth"
                  />
                }
              />
            ) : null}
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="call-outline" size={20} color="#666" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="globe-outline" size={20} color="#666" style={styles.icon} />
            <Picker
              selectedValue={nationality}
              style={styles.picker}
              onValueChange={(itemValue) => setNationality(itemValue)}
            >
              <Picker.Item label="Select Nationality" value="" />
              <Picker.Item label="India" value="India" />
              <Picker.Item label="USA" value="USA" />
              <Picker.Item label="UK" value="UK" />
              <Picker.Item label="Canada" value="Canada" />
            </Picker>
          </View>

          <Text style={styles.privacyText}>
            Your personal data is safe and stored securely.
          </Text>

          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => navigation.navigate("ProfileAvatarSetup")}
          >
            <Text style={styles.buttonText}>Continue →</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fafafa",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  card: {
    width: "100%",
    maxWidth: 480,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    maxHeight: "95vh",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  profileIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: "center",
    marginBottom: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 4,
  },
  subText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 12,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    height: 44,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  picker: {
    flex: 1,
    fontSize: 14,
    height: 44,
  },
  privacyText: {
    fontSize: 11,
    color: "#777",
    marginVertical: 8,
    textAlign: "center",
  },
  continueButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default PersonalDetailsScreen;
