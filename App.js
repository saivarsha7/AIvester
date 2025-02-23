// import WelcomeScreen from './src/components/WelcomeScreen/WelcomeScreen';
// import { Button, StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View>
//       <WelcomeScreen />
//     </View>
//   );
// }
import React from "react";
import { View, StyleSheet } from "react-native";
import WelcomeScreen from "./src/components/WelcomeScreen/WelcomeScreen";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <WelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Makes sure the view takes up the full screen
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
