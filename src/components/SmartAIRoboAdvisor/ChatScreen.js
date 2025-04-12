// ChatScreen.js
import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image
} from 'react-native';

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: '1',
      sender: 'ai',
      text: "Hello 👋 I'm Midas, your smart roboadvisor to help your investment.\nHow can I make you wealthier today?",
    },
    {
      id: '2',
      sender: 'user',
      text: 'Amazing!',
    },
  ]);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = { id: Date.now().toString(), sender: 'user', text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiReply = {
        id: Date.now().toString() + '_ai',
        sender: 'ai',
        text: 'Thanks for your message. Let me help you with that!',
      };
      setMessages((prev) => [...prev, aiReply]);
      setIsTyping(false);
    }, 1500);
  };

  const renderItem = ({ item }) => {
    if (item.sender === 'typing') {
      return (
        <View style={styles.aiBubble}>
          <Text style={styles.typingDots}>● ● ●</Text>
        </View>
      );
    }

    const isUser = item.sender === 'user';
    return (
      <View style={[styles.bubbleContainer, isUser ? styles.rightAlign : styles.leftAlign]}>
        <View style={isUser ? styles.userBubble : styles.aiBubble}>
          <Text style={styles.messageText}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Midas AI RoboAdvisor</Text>
          <Text style={styles.chatStatus}>GPT-3.5 | 25 Chats Left</Text>
        </View>
        <Image
          source={require('../../../assets/profile-icon.png')} // Replace with your icon
          style={styles.profileIcon}
        />
      </View>

      {/* Messages */}
      <FlatList
        data={[...messages, ...(isTyping ? [{ id: 'typing', sender: 'typing' }] : [])]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 15 }}
      />

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type to start chatting..."
          placeholderTextColor="#aaa"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendIcon}>➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  chatStatus: {
    fontSize: 12,
    color: '#999',
    marginTop: 3,
  },
  profileIcon: { width: 30, height: 30, borderRadius: 15 },
  bubbleContainer: { marginVertical: 5 },
  leftAlign: { alignSelf: 'flex-start' },
  rightAlign: { alignSelf: 'flex-end' },
  aiBubble: {
    backgroundColor: '#F8F8F8',
    padding: 10,
    borderRadius: 15,
    maxWidth: '80%',
  },
  userBubble: {
    backgroundColor: '#F7941D',
    padding: 10,
    borderRadius: 15,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 15,
    color: '#000',
  },
  typingDots: {
    fontSize: 18,
    color: '#aaa',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: '#eee',
    borderTopWidth: 1,
    padding: 10,
  },
  textInput: {
    flex: 1,
    height: 45,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#F7941D',
    padding: 10,
    borderRadius: 25,
  },
  sendIcon: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
