import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Import components and screens
import WelcomeScreen from "../components/WelcomeScreen/WelcomeScreen";
import OnboardingScreen from "../components/OnboardingScreen/OnboardingScreen";
import AuthenticationScreen from "../screens/AuthenticationScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import PasswordResetSentScreen from "../screens/PasswordResetSentScreen";
import HomesAndActivities from "../components/HomesAndActivities/HomesAndActivities";
import MarketScreen from "../components/MarketExploration/MarketScreen";
import AllStocks from "../components/MarketExploration/Stocks/AllStocks";
import MostPopularScreen from "../components/MarketExploration/Stocks/MostPopularScreen";
import NewsAndResources from "../components/NewsAndResources/NewsAndResources";
import NewsScreen from "../components/NewsAndResources/NewsScreen";
import ArticleScreen from "../components/NewsAndResources/ArticleScreen";
import CoursesAndWorkshops from "../components/NewsAndResources/CoursesAndWorkshops";

// Comprehensive Financial Assessment screens
import NameScreen from "../components/ComprehensiveFinancialAssessment/NameScreen";
import GenderScreen from "../components/ComprehensiveFinancialAssessment/GenderScreen";
import DOBScreen from "../components/ComprehensiveFinancialAssessment/DOBScreen";
import InvestmentExperienceScreen from "../components/ComprehensiveFinancialAssessment/InvestmentExperienceScreen";
import InvestmentRiskScreen from "../components/ComprehensiveFinancialAssessment/InvestmentRiskScreen";
import IndustrySelection from "../components/ComprehensiveFinancialAssessment/IndustrySelectionScreen";
import DebtLevelScreen from "../components/ComprehensiveFinancialAssessment/DebtLevelScreen";
import InvestmentDurationScreen from "../components/ComprehensiveFinancialAssessment/InvestmentDurationScreen";

// Smart AI Robo Advisor screens
import PortfolioProjectionScreen from "../components/SmartAIRoboAdvisor/PortfolioProjectionScreen";
import AIHomeScreen from "../components/SmartAIRoboAdvisor/AIHomeScreen";
import PrecautionsScreen from "../components/SmartAIRoboAdvisor/PrecautionsScreen";
import ChatScreen from "../components/SmartAIRoboAdvisor/ChatScreen";

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

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {/* Welcome and onboarding screens */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        
        {/* Authentication related screens */}
        <Stack.Screen name="Authentication" component={AuthenticationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordResetSentScreen" component={PasswordResetSentScreen} />
        
        {/* Homes and Activities */}
        <Stack.Screen name="HomesAndActivities" component={HomesAndActivities} />
        
        {/* Market Exploration */}
        <Stack.Screen name="MarketScreen" component={MarketScreen} />
        <Stack.Screen name="AllStocks" component={AllStocks} />
        <Stack.Screen name="MostPopularScreen" component={MostPopularScreen} />
        
        {/* News and Resources */}
        <Stack.Screen name="NewsAndResources" component={NewsAndResources} />
        <Stack.Screen name="NewsScreen" component={NewsScreen} />
        <Stack.Screen name="ArticleScreen" component={ArticleScreen} />
        <Stack.Screen name="CoursesAndWorkshops" component={CoursesAndWorkshops} />
        
        {/* Comprehensive Financial Assessment */}
        <Stack.Screen name="NameScreen" component={NameScreen} />
        <Stack.Screen name="GenderScreen" component={GenderScreen} />
        <Stack.Screen name="DOBScreen" component={DOBScreen} />
        <Stack.Screen name="InvestmentExperienceScreen" component={InvestmentExperienceScreen} />
        <Stack.Screen name="InvestmentRiskScreen" component={InvestmentRiskScreen} />
        <Stack.Screen name="IndustrySelection" component={IndustrySelection} />
        <Stack.Screen name="DebtLevel" component={DebtLevelScreen} />
        <Stack.Screen name="InvestmentDuration" component={InvestmentDurationScreen} />
        
        {/* Smart AI Robo Advisor */}
        <Stack.Screen name="PortfolioProjection" component={PortfolioProjectionScreen} />
        <Stack.Screen name="AIHomeScreen" component={AIHomeScreen} />
        <Stack.Screen name="PrecautionsScreen" component={PrecautionsScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        
        {/* Profile Setup */}
        <Stack.Screen name="ProfileSetupScreen" component={ProfileSetupScreen} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetailsScreen} />
        <Stack.Screen name="ProfileAvatarSetup" component={ProfileAvatarSetup} />
        
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
        
        {/* Legal and Privacy */}
        <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
        
        {/* Investment Setup */}
        <Stack.Screen name="InvestmentSetup" component={InvestmentAppSetupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="InvestmentSelection" component={InvestmentSelectionScreen} options={{ headerShown: false }} />
        
        {/* Retirement and Savings */}
        <Stack.Screen name="RetirementPlanning" component={RetirementPlanningScreen} />
        <Stack.Screen name="SavingsTracking" component={SavingsTrackingScreen} />
        
        {/* Portfolio Management */}
        <Stack.Screen name="PortfolioDashboard" component={PortfolioDashboardScreen} />
        <Stack.Screen name="InvestmentInsights" component={InvestmentInsightsScreen} />
        <Stack.Screen name="EditPortfolio" component={EditPortfolioScreen} />
        <Stack.Screen name="AddNewPortfolio" component={AddNewPortfolioScreen} />
        <Stack.Screen name="PortfolioCreated" component={PortfolioCreatedScreen} />
        <Stack.Screen name="AddInvestmentToRetirement" component={AddInvestmentToRetirementScreen} />
        <Stack.Screen name="StockSelection" component={StockSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
