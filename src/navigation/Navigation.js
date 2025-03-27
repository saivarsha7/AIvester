import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../components/WelcomeScreen/WelcomeScreen";
import OnboardingScreen from "../components/OnboardingScreen/OnboardingScreen";
import AuthenticationScreen from "../screens/AuthenticationScreen"; 
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen"; 
import ProfileSetupScreen from "../screens/ProfileSetupScreen"; 
import PersonalDetailsScreen from "../screens/PersonalDetailsScreen";
import ProfileAvatarSetup from "../screens/ProfileAvatarSetup";
import AddBankAccount from "../screens/AddBankAccount"; // Import the new screen
import SelectBankScreen from "../screens/SelectBankScreen";
import BankLinkedSuccessScreen from "../screens/BankLinkedSuccessScreen";
import SelectAccountScreen from '../screens/SelectAccountScreen';
import PasswordSetupScreen from "../screens/PasswordSetupScreen";
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen";
import InvestingAssessmentResultScreen from "../screens/InvestingAssessmentResultScreen";
import InvestingStrategyRecommendationScreen from "../screens/InvestingStrategyRecommendationScreen";
import InvestmentSetupScreen from "../screens/InvestmentSetupScreen";
import InvestmentSelectionScreen from "../screens/InvestmentSelectionScreen";
import RetirementPlanningScreen from "../screens/RetirementPlanningScreen";
import SavingsTrackingScreen from "../screens/SavingsTrackingScreen";
import InvestmentDurationScreen from "../screens/InvestmentDurationScreen";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Authentication" component={AuthenticationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="PersonalDetails" component={PersonalDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileAvatarSetup" component={ProfileAvatarSetup} />
        <Stack.Screen name="AddBankAccount" component={AddBankAccount} />
        <Stack.Screen name="SelectBankScreen" component={SelectBankScreen} /> 
        <Stack.Screen name="BankLinkedSuccessScreen" component={BankLinkedSuccessScreen} />
        <Stack.Screen name="SelectAccountScreen" component={SelectAccountScreen} />
        <Stack.Screen name="PasswordSetupScreen" component={PasswordSetupScreen} />  
        <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
        <Stack.Screen name="InvestingAssessmentResultScreen" component={InvestingAssessmentResultScreen} />
        <Stack.Screen name="InvestingStrategyRecommendationScreen" component={InvestingStrategyRecommendationScreen} />
        <Stack.Screen name="InvestmentSetup" component={InvestmentSetupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="InvestmentSelection" component={InvestmentSelectionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RetirementPlanning" component={RetirementPlanningScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SavingsTracking" component={SavingsTrackingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="InvestmentDuration" component={InvestmentDurationScreen} />

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
