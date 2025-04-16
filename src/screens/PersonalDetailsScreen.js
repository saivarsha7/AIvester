import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

let DatePicker;
if (Platform.OS === "web") {
  DatePicker = require("react-datepicker").default;
}

const PersonalDetailsScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nationality, setNationality] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (date) => {
    setDateOfBirth(date);
    setShowDatePicker(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
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
              onChange={(date) => handleDateChange(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select Date of Birth"
              className="date-picker"
            />
          ) : (
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={{ flex: 1 }}>
              <Text style={[styles.input, { color: dateOfBirth ? "#333" : "#888" }]}>
                {dateOfBirth ? dateOfBirth.toDateString() : "Select Date of Birth"}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {showDatePicker && Platform.OS !== "web" && (
          <DateTimePicker
            value={dateOfBirth || new Date()}
            mode="date"
            display="spinner"
            onChange={(event, selectedDate) => {
              if (selectedDate) setDateOfBirth(selectedDate);
              setShowDatePicker(false);
            }}
          />
        )}

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
      </ScrollView>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("ProfileAvatarSetup")}
      >
        <Text style={styles.buttonText}>Continue →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f0e1",
  },
  scrollContainer: {
    padding: 20,
    alignItems: "center",
  },
  profileIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  subText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    width: "100%",
    height: 50,
    marginBottom: 12,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  picker: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  privacyText: {
    fontSize: 12,
    color: "#777",
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  continueButton: {
    backgroundColor: "orange",
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    bottom: 20,
    borderRadius: 8,
    alignSelf: "center",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default PersonalDetailsScreen;
