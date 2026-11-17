import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import styles from './styles';

const ChatDetailScreen = ({ route, navigation }) => {
  const name = route?.params?.name || 'Leilani Angel';


  const [messageText, setMessageText] = useState('');

  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm available to pick you up. I'll be there in about",
      sender: 'me',
      time: '02:00 PM',
    },
    {
      text: 'Thankyou Sir',
      sender: 'other',
      time: '02:00 PM',
    },
    {
      text: "I've arrived at Location. Look for a Red Car with the license plate .",
      sender: 'me',
      time: '02:00 PM',
    },
    {
      text: "Great! I'll be there in a minute.",
      sender: 'other',
      time: '02:00 PM',
    },
  ]);

  const sendMessage = () => {
    if (messageText.trim() === '') {
      return;
    }

    setMessages([
      ...messages,
      {
        text: messageText.trim(),
        sender: 'me',
        time: '02:00 PM',
      },
    ]);

    setMessageText('');
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}> ‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerName}>{name}</Text>

        <TouchableOpacity
          style={styles.callButton}
          onPress={() => {}}
        >
          <Text style={styles.callText}>☎</Text>
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <ScrollView
        style={styles.messageArea}
        contentContainerStyle={styles.messageContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.today}>Today</Text>

        {messages.map((item, index) => (
          <View
            key={index}
            style={[
              styles.messageRow,
              item.sender === 'other'
                ? styles.otherRow
                : styles.myRow,
            ]}
          >
            {item.sender === 'me' && (
              <View style={styles.profileContainer}>
                <Image
                  source={require('../../../assets/img.png')}
                  style={styles.profileImage}
                />
                <Text style={styles.time}>{item.time}</Text>
              </View>
            )}

            <View
              style={[
                styles.messageBubble,
                item.sender === 'me'
                  ? styles.myBubble
                  : styles.otherBubble,
              ]}
            >
              <Text style={styles.messageText}>
                {item.text}
              </Text>
            </View>

            {item.sender === 'other' && (
              <View style={styles.profileContainer}>
                <Image
                  source={require('../../../assets/img2.png')}
                  style={styles.profileImage}
                />
                <Text style={styles.time}>{item.time}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>

      {/* Message Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type Your Message"
          placeholderTextColor="#777777"
          value={messageText}
          onChangeText={setMessageText}
          onSubmitEditing={sendMessage}
          returnKeyType="send"
        />

        <TouchableOpacity
          style={styles.sendButton}
          onPress={sendMessage}
        >
          <Text style={styles.sendText}>➤</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default ChatDetailScreen;