import React, { useState, useEffect, useRef } from 'react'; // Added useEffect and useRef
import { View, TextInput, Button, Text, ScrollView, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { GoogleGenerativeAI } from '@google/generative-ai';

// IMPORTANT: Replace with your actual API key
const API_KEY = 'AIzaSyDJRB69RIypamo3mY4-pfZBgNbzRykAN-M';

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  systemInstruction: {
    parts: [{ text: "You are AIVESTOR, a financial advisor specializing in stock market analysis and recommendations. Provide insights on stock performance, market trends, and investment strategies. Do not give direct financial advice to buy or sell specific stocks, but rather educate the user on how to make informed decisions. Always remind the user that stock investments carry risk and they should consult with a professional financial advisor before making any investment decisions." }],
    role: "model"
  }
});

const GeminiChatbot = () => {
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentChat, setCurrentChat] = useState(null); // New state for the chat session
  const scrollViewRef = useRef(); // Added for scrolling

  // Initialize the chat session
  useEffect(() => {
    const chat = model.startChat({
      history: [], // Start with an empty history; system prompt is in the model
      generationConfig: {
        maxOutputTokens: 500,
      },
    });
    setCurrentChat(chat);
  }, []); // Empty dependency array ensures this runs once on mount

  // Scroll to bottom when chat history changes
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [chatHistory]);

  const sendMessage = async () => {
    if (!inputText.trim()) {
      return;
    }

    // Ensure chat is initialized
    if (!currentChat) {
      setError("Chat session is not ready. Please try again in a moment.");
      setIsLoading(false);
      return;
    }

    const userMessage = { role: 'user', parts: [{ text: inputText }] };
    const textToSend = inputText; // Capture inputText before clearing for the async call

    setChatHistory(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);
    setError(null);

    try {
      // Use the persistent chat session
      const result = await currentChat.sendMessage(textToSend);
      const response = result.response;
      const botMessage = { role: 'model', parts: [{ text: response.text() }] };
      setChatHistory(prev => [...prev, botMessage]);
    } catch (e) {
      console.error('Error sending message:', e);
      setError('Sorry, something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoidingContainer}
    >
      <View style={styles.container}>
        <ScrollView
          ref={scrollViewRef} // Added ref
          style={styles.chatContainer}
        >
          {chatHistory.map((message, index) => (
            <View
              key={index}
              style={[
                styles.messageBubble,
                message.role === 'user' ? styles.userMessage : styles.botMessage,
              ]}
            >
              <Text style={styles.messageText}>{message.parts[0].text}</Text>
            </View>
          ))}
          {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
          {error && <Text style={styles.errorText}>{error}</Text>}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Type your message..."
            onSubmitEditing={sendMessage} // Allows sending with the return key
          />
          <Button title="Send" onPress={sendMessage} disabled={isLoading} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  chatContainer: {
    flex: 1,
    marginBottom: 10,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#FFD580', // Updated color
    alignSelf: 'flex-end',
    marginLeft: '20%',
  },
  botMessage: {
    backgroundColor: '#e2e3e5',
    alignSelf: 'flex-start',
    marginRight: '20%',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    padding: 10,
  },
});

export default GeminiChatbot;
