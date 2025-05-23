import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Import components and screens
import WelcomeScreen from "../components/WelcomeScreen/WelcomeScreen";
import OnboardingScreen from "../components/OnboardingScreen/OnboardingScreen";
import AuthenticationScreen from "../screens/AuthenticationScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import PasswordResetSentScreen from "../screens/PasswordResetSentScreen";
import MarketScreen from "../components/MarketExploration/MarketScreen";
import AllStocks from "../components/MarketExploration/Stocks/AllStocks";
import MostPopularScreen from "../components/MarketExploration/Stocks/MostPopularScreen";
import NewsAndResourcesScreen from "../components/NewsAndResources/NewsAndResourcesScreen";
import NewsScreen from "../components/NewsAndResources/NewsScreen";
import ArticleScreen from "../components/NewsAndResources/ArticleScreen";
import CoursesAndWorkshops from "../components/NewsAndResources/CoursesAndWorkshops";

// Comprehensive Financial Assessment screens
import NameScreen from "../components/ComprehensiveFinancialAssessment/NameScreen";
import GenderScreen from "../components/ComprehensiveFinancialAssessment/GenderScreen";
import DOBScreen from "../components/ComprehensiveFinancialAssessment/DOBScreen";
import InvestmentExperienceScreen from "../components/ComprehensiveFinancialAssessment/InvestmentExperienceScreen";
import InvestmentRiskScreen from "../components/ComprehensiveFinancialAssessment/InvestmentRiskScreen";
import InvestmentDurationScreen from "../components/ComprehensiveFinancialAssessment/InvestmentDurationScreen";
import AssetSelectionScreen from "../components/ComprehensiveFinancialAssessment/AssetSelectionScreen";
import InvestmentPercentageScreen from "../components/ComprehensiveFinancialAssessment/InvestmentPercentageScreen";
import MonthlyIncomeScreen from "../components/ComprehensiveFinancialAssessment/MonthlyIncomeScreen";
import HomeScreen from "../components/ComprehensiveFinancialAssessment/HomeScreen";
import PortfolioTypeSelectionScreen from "../components/ComprehensiveFinancialAssessment/PortfolioTypeSelectionScreen";

// Homes and Activities
import HomesAndActivitiesScreen from "../components/HomesAndActivities/HomesAndActivitiesScreen";
import BottomNavigation from "../components/HomesAndActivities/BottomNavigation";
import HomeHeader from "../components/HomesAndActivities/HomeHeader";
import NetWorthGraph from "../components/HomesAndActivities/NetWorthGraph";

// Smart AI Robo Advisor screens
import PortfolioAIProjectionScreen from "../components/SmartAIRoboAdvisor/PortfolioAIProjectionScreen";
import AIHomeScreen from "../components/SmartAIRoboAdvisor/AIHomeScreen";
import PrecautionsScreen from "../components/SmartAIRoboAdvisor/PrecautionsScreen";
import ChatScreen from "../components/SmartAIRoboAdvisor/ChatScreen";
import PortfolioAllocationScreen from "../components/SmartAIRoboAdvisor/PortfolioAllocationScreen";
import GeminiChatScreen from "../components/GeminiChatbot/GeminiChatScreen"; // Added import

// Other screens
import ProfileSetupScreen from "../screens/ProfileSetupScreen";
import PersonalDetailsScreen from "../screens/PersonalDetailsScreen";
import ProfileAvatarSetup from "../screens/ProfileAvatarSetup";
import AddBankAccount from "../screens/AddBankAccount";
import SelectBankScreen from "../screens/SelectBankScreen";
import BankLinkedSuccessScreen from "../screens/BankLinkedSuccessScreen";
import SelectAccountScreen from "../screens/SelectAccountScreen";
import NotificationScreen from "../components/SearchAndNotification/NotifficationScreen";
import EmptyNotificationScreen from "../components/SearchAndNotification/EmptyNotificationScreen";
import SearchScreen from "../components/SearchAndNotification/SearchScreen";
import BeforePostScreen from "../components/InvestingCommunity/BeforePostScreen";
import CreatePostScreen from "../components/InvestingCommunity/CreatePostSCreen";
import PostFeedScreen from "../components/InvestingCommunity/PostFeedScreen";
import CommunityHomeScreen from "../screens/CommunityHomeScreen";
import DebtLevelScreen from "../screens/DebtLevelScreen";
import PasswordSetupScreen from "../screens/PasswordSetupScreen"

// Investment and Strategy screens
import InvestingAssessmentResultScreen from "../screens/InvestingAssessmentResultScreen";
import InvestingStrategyRecommendationScreen from "../screens/InvestingStrategyRecommendationScreen";
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen";
import InvestmentAppSetupScreen from "../screens/InvestmentSetupScreen";
import InvestmentSelectionScreen from "../screens/InvestmentSelectionScreen";
import RetirementPlanningScreen from "../screens/RetirementPlanningScreen";
import SavingsTrackingScreen from "../screens/SavingsTrackingScreen";

// Portfolio-related screens
import PortfolioDashboardScreen from "../screens/PortfolioDashboardScreen";
import InvestmentInsightsScreen from "../screens/InvestmentInsightsScreen";
import EditPortfolioScreen from "../screens/EditPortfolioScreen";
import AddNewPortfolioScreen from "../screens/AddNewPortfolioScreen";
import PortfolioCreatedScreen from "../screens/PortfolioCreatedScreen";
import AddInvestmentToRetirementScreen from "../screens/AddInvestmentToRetirementScreen";
import StockSelectionScreen from "../screens/StockSelectionScreen";
import IndustrySelectionScreen from "../screens/IndustrySelectionScreen";
import PortfolioProjectionScreen from "../screens/PortfolioProjectionScreen";
import PortfolioCompletionScreen from "../screens/PortfolioCompletionScreen";

import WebViewScreen from '../screens/WebViewScreen';


const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {/* Welcome and onboarding */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />

        {/* Authentication */}
        <Stack.Screen name="Authentication" component={AuthenticationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordResetSentScreen" component={PasswordResetSentScreen} />

        {/* Homes and Activities */}
        <Stack.Screen name="HomesAndActivitiesScreen" component={HomesAndActivitiesScreen} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="HomeHeader" component={HomeHeader} />
        <Stack.Screen name="NetWorthGraph" component={NetWorthGraph} />
       

        {/* Market Exploration */}
        <Stack.Screen name="MarketScreen" component={MarketScreen} />
        <Stack.Screen name="AllStocks" component={AllStocks} />
        <Stack.Screen name="MostPopularScreen" component={MostPopularScreen} />

        {/* News and Resources */}
        <Stack.Screen name="NewsAndResourcesScreen" component={NewsAndResourcesScreen} />
        <Stack.Screen name="NewsScreen" component={NewsScreen} />
        <Stack.Screen name="ArticleScreen" component={ArticleScreen} />
        <Stack.Screen name="CoursesAndWorkshops" component={CoursesAndWorkshops} />

        {/* Comprehensive Financial Assessment */}
        <Stack.Screen name="NameScreen" component={NameScreen} />
        <Stack.Screen name="GenderScreen" component={GenderScreen} />
        <Stack.Screen name="DOBScreen" component={DOBScreen} />
        <Stack.Screen name="InvestmentExperienceScreen" component={InvestmentExperienceScreen} />
        <Stack.Screen name="InvestmentRiskScreen" component={InvestmentRiskScreen} />
        <Stack.Screen name="IndustrySelectionScreen" component={IndustrySelectionScreen} />
        <Stack.Screen name="DebtLevelScreen" component={DebtLevelScreen} />
        <Stack.Screen name="InvestmentDurationScreen" component={InvestmentDurationScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="MonthlyIncomeScreen" component={MonthlyIncomeScreen} />
        <Stack.Screen name="AssetSelectionScreen" component={AssetSelectionScreen} />
        <Stack.Screen name="InvestmentPercentageScreen" component={InvestmentPercentageScreen} />
        <Stack.Screen name="PortfolioTypeSelectionScreen" component={PortfolioTypeSelectionScreen} />

        {/* Smart AI Robo Advisor */}
        <Stack.Screen name="PortfolioAIProjectionScreen" component={PortfolioAIProjectionScreen} />
        <Stack.Screen name="PortfolioAllocationScreen" component={PortfolioAllocationScreen} />
        <Stack.Screen name="AIHomeScreen" component={AIHomeScreen} />
        <Stack.Screen name="PrecautionsScreen" component={PrecautionsScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="GeminiChatScreen" component={GeminiChatScreen} options={{ headerShown: false }} />

        {/* Profile Setup */}
        <Stack.Screen name="ProfileSetupScreen" component={ProfileSetupScreen} />
        <Stack.Screen name="PersonalDetailsScreen" component={PersonalDetailsScreen} />
        <Stack.Screen name="ProfileAvatarSetup" component={ProfileAvatarSetup} />
        <Stack.Screen name="PasswordSetupScreen" component={PasswordSetupScreen} />

        {/* Banking Setup */}
        <Stack.Screen name="AddBankAccount" component={AddBankAccount} />
        <Stack.Screen name="SelectBankScreen" component={SelectBankScreen} />
        <Stack.Screen name="BankLinkedSuccessScreen" component={BankLinkedSuccessScreen} />
        <Stack.Screen name="SelectAccountScreen" component={SelectAccountScreen} />

        {/* Notifications */}
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="EmptyNotificationsScreen" component={EmptyNotificationScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />

        {/* Community */}
        <Stack.Screen name="BeforePostScreen" component={BeforePostScreen} />
        <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} />
        <Stack.Screen name="PostFeedScreen" component={PostFeedScreen} />
        <Stack.Screen name="CommunityHomeScreen" component={CommunityHomeScreen} />

        {/* Investment Strategy */}
        <Stack.Screen name="InvestingAssessmentResultScreen" component={InvestingAssessmentResultScreen} />
        <Stack.Screen name="InvestingStrategyRecommendationScreen" component={InvestingStrategyRecommendationScreen} />

        {/* Legal */}
        <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
        


        {/* Investment Setup */}
        <Stack.Screen name="InvestmentSetupScreen" component={InvestmentAppSetupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="InvestmentSelectionScreen" component={InvestmentSelectionScreen} options={{ headerShown: false }} />

        {/* Retirement and Savings */}
        <Stack.Screen name="RetirementPlanningScreen" component={RetirementPlanningScreen} />
        <Stack.Screen name="SavingsTrackingScreen" component={SavingsTrackingScreen} />

        {/* Portfolio Management */}
        <Stack.Screen name="PortfolioDashboardScreen" component={PortfolioDashboardScreen} />
        <Stack.Screen name="InvestmentInsightsScreen" component={InvestmentInsightsScreen} />
        <Stack.Screen name="EditPortfolioScreen" component={EditPortfolioScreen} />
        <Stack.Screen name="AddNewPortfolioScreen" component={AddNewPortfolioScreen} />
        <Stack.Screen name="PortfolioCreatedScreen" component={PortfolioCreatedScreen} />
        <Stack.Screen name="AddInvestmentToRetirementScreen" component={AddInvestmentToRetirementScreen} />
        <Stack.Screen name="StockSelectionScreen" component={StockSelectionScreen} />
        <Stack.Screen name="PortfolioProjectionScreen" component={PortfolioProjectionScreen} />
        <Stack.Screen name="PortfolioCompletionScreen" component={PortfolioCompletionScreen} />

        <Stack.Screen name="WebViewScreen" component={WebViewScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
