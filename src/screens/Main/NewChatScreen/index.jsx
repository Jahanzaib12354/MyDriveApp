
import React, { useState } from 'react';
import {View,Text,Image,TouchableOpacity,ScrollView,
} from 'react-native';

import styles from './styles';

const chatData = [
  {
    name: 'Leilani Angel',
    status: '(your rider now)',
    message: "Hello! I'm available to pick you up. I'll be ther...",
    date: '2m ago',
    image: require('../../../assets/img.png'),
    active: true,
  },
  {
    name: 'Alex Wheeler',
    status: 'No New Message',
    message: "Hello! I'm available to pick you up. I'll be th..",
    date: '09/27/24',
    image: require('../../../assets/img2.png'),
  },
  {
    name: 'Jasmine Cruz',
    status: '2 New Message',
    message: 'Hello sir, good day. Is your front house ..',
    date: '09/25/24',
    image: require('../../../assets/img.png'),
  },
  {
    name: 'Olivia Parker',
    status: 'No New Message',
    message: "Hello! I'm available to pick you up. I'll be ther...",
    date: '09/24/24',
    image: require('../../../assets/img2.png'),
  },
  {
    name: 'Marcus Anderson',
    status: '2 New Message',
    message: "Hello! I'm available to pick you up. I'll be ther...",
    date: '09/23/24',
    image: require('../../../assets/img.png'),
  },
  {
    name: 'Raj Patel',
    status: 'No New Message',
    message: "Hello! I'm available to pick you up. I'll be ther...",
    date: '09/22/24',
    image: require('../../../assets/img2.png'),
  },
  {
    name: 'Emily Turner',
    status: 'No New Message',
    message: "Hello! I'm available to pick you up. I'll be ther...",
    date: '09/19/24',
    image: require('../../../assets/img.png'),
  },
  {
    name: 'Javier Ramirez',
    status: 'No New Message',
    message: "Hello! I'm available to pick you up. I'll be ther...",
    date: '09/19/24',
    image: require('../../../assets/img2.png'),
  },
];

const NewChatScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Messages');

  // Open chat details screen
  const openChat = (item) => {
    navigation.navigate('ChatDetailScreen', {
      name: item.name,
      image: item.image,
      message: item.message,
    });
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Chat</Text>

        <View style={styles.headerSpace} />
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {['Messages', 'Call History', 'Group Chat'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              selectedTab === tab && styles.activeTab,
            ]}
            // onPress={() => setSelectedTab(tab)}
//             onPress={() => {
//   if (tab === 'Call History') {
//     navigation.navigate('IncomingCallScreen');
//   } else {
//     setSelectedTab(tab);
//   }
// }}   
    
              onPress={() => { if (tab === 'Call History') 
              { navigation.navigate('IncomingCallScreen'); }
              else if (tab === 'Group Chat') { navigation.navigate('GroupChatScreen'); } 
              else { setSelectedTab('Messages'); } 
                  }} 
             >

     
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Chat List */}

      {/* <ScrollView 
      
      showsVerticalScrollIndicator={false}
      
      > */}
      <ScrollView
            style={styles.chatList}
            contentContainerStyle={{
            paddingBottom: 100,
            flexGrow: 1,
         }}
              showsVerticalScrollIndicator={true}
             keyboardShouldPersistTaps="handled"
      >
        {selectedTab === 'Messages' ? (
          chatData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.chatItem,
                item.active && styles.activeChat,
              ]}
              onPress={() => openChat(item)}
              activeOpacity={0.7}
            >
              {/* Profile Image */}
              <Image
                source={item.image}
                style={styles.profileImage}
              />

              {/* Chat Information */}
              <View style={styles.chatInfo}>

                {/* Name and Date */}
                <View style={styles.nameRow}>
                  <Text
                    style={[
                      styles.name,
                      item.active && styles.activeName,
                    ]}
                  >
                    {item.name}
                    {item.status === '(your rider now)'
                      ? ' - (your rider now)'
                      : ''}
                  </Text>

                  <Text
                    style={[
                      styles.date,
                      item.active && styles.activeDate,
                    ]}
                  >
                    {item.date}
                  </Text>
                </View>

                {/* Message Status */}
                <Text
                  style={[
                    styles.status,
                    item.active && styles.activeStatus,
                  ]}
                >
                  {item.active ? '2 New Message' : item.status}
                </Text>

                {/* Last Message */}
                <Text
                  numberOfLines={1}
                  style={[
                    styles.message,
                    item.active && styles.activeMessage,
                  ]}
                >
                  {item.message}
                </Text>

              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.emptyBox}>
            <Text style={styles.emptyText}>
              {selectedTab === 'Call History'
                ? 'No call history'
                : 'No group chats'}
            </Text>
          </View>
        )}
      </ScrollView>

    </View>
  );
};

export default NewChatScreen;