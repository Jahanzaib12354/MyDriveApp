// import React from 'react';
// import { View,Text,Image,TouchableOpacity,
// } from 'react-native';

// import styles from './styles';

// import img from '../../../assets/img.png';
// import InputField from '../../../components/InputField';

// const FindRiderScreen = ({navigation}) => {
//   return (
//     <View style={styles.container}>

      
//       <Text style={styles.heading}>Group Chat</Text>

//       <View style={styles.card}>
//         <View style={styles.profileRow}>

//           <Image
//             source={img}
//             style={styles.profileImage}
//           />

//           <View>
//             <Text style={styles.name}>Alex Johnson</Text>
//             <Text style={styles.info}>alex@gmail.com</Text>
//             <Text style={styles.info}>0300-1234567</Text>
//           </View>

//         </View>
        
    
//         <View style={styles.detailRow}>
//             <Text style={styles.detail}>Car Type:</Text>
//             <Text style={styles.bold}>Honda</Text>
//             </View>

//          <View style={styles.detailRow}>
//         <Text style={styles.detail}> Car Seats:</Text>
//          <Text style={styles.bold}>3/4 Seats</Text>
    
//        </View>
            
        
//         <Text style={styles.dateTime}>
//           📅 15 October 2026  •  ⏰ 10:30 AM
//         </Text>

//             </View>
//             </View>
//           );
//         };
        
//         export default FindRiderScreen;


// import React, { useState } from 'react';

// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
// } from 'react-native';

// import { Phone, Send, ArrowLeft } from 'lucide-react-native';
// import styles from './styles';

// const ChatDetailScreen = ({ navigation, route }) => {

//   const name = route?.params?.name || 'Leilani Angel';

//   const profileImage =
//     route?.params?.image || require('../../../assets/img.png');

//   const [messageText, setMessageText] = useState('');

//   const [messages, setMessages] = useState([
//     {
//       text: "Hello! I'm available to pick you up. I'll be there in about",
//       sender: 'me',
//       time: '02:00 PM',
//     },
//     {
//       text: 'Thankyou Sir',
//       sender: 'other',
//       time: '02:00 PM',
//     },
//     {
//       text: "I've arrived at Location. Look for a Red Car with the license plate.",
//       sender: 'me',
//       time: '02:00 PM',
//     },
//     {
//       text: "Great! I'll be there in a minute.",
//       sender: 'other',
//       time: '02:00 PM',
//     },
//   ]);

//   // Send new message
//   const sendMessage = () => {
//     if (messageText.trim() === '') {
//       return;
//     }

//     const newMessage = {
//       text: messageText.trim(),
//       sender: 'me',
//       time: new Date().toLocaleTimeString([], {
//         hour: '2-digit',
//         minute: '2-digit',
//       }),
//     };

//     setMessages([...messages, newMessage]);
//     setMessageText('');
//   };

//   return (
//     <View style={styles.container}>

//       {/* Header */}
//       <View style={styles.header}>

//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => navigation.goBack()}
//         >
//           <ArrowLeft color="#222222" size={22} />
//         </TouchableOpacity>

//         <Text style={styles.headerName}>
//           {name}
//         </Text>

//         <TouchableOpacity
//           style={styles.callButton}
//           onPress={() => navigation.navigate('IncomingCallScreen')}
//         >
//           <Phone color="#FFFFFF" size={17} />
//         </TouchableOpacity>

//       </View>

//       {/* Messages */}
//       <ScrollView
//         style={styles.messageArea}
//         contentContainerStyle={styles.messageContent}
//         showsVerticalScrollIndicator={false}
//       >

//         <Text style={styles.today}>
//           TODAY
//         </Text>

//         {messages.map((item, index) => (

//           <View
//             key={index}
//             style={[
//               styles.messageRow,
//               item.sender === 'me'
//                 ? styles.myRow
//                 : styles.otherRow,
//             ]}
//           >

//             {/* Other person's image */}
//             {item.sender === 'other' && (
//               <View style={styles.profileContainer}>
//                 <Image
//                   source={profileImage}
//                   style={styles.profileImage}
//                 />

//                 <Text style={styles.time}>
//                   {item.time}
//                 </Text>
//               </View>
//             )}

//             {/* Message Bubble */}
//             <View
//               style={[
//                 styles.messageBubble,
//                 item.sender === 'me'
//                   ? styles.myBubble
//                   : styles.otherBubble,
//               ]}
//             >
//               <Text style={styles.messageText}>
//                 {item.text}
//               </Text>
//             </View>

//             {/* My image and time */}
//             {item.sender === 'me' && (
//               <View style={styles.profileContainer}>
//                 <Image
//                   source={require('../../../assets/img2.png')}
//                   style={styles.profileImage}
//                 />

//                 <Text style={styles.time}>
//                   {item.time}
//                 </Text>
//               </View>
//             )}

//           </View>

//         ))}

//       </ScrollView>

//       {/* Message Input */}
//       <View style={styles.inputContainer}>

//         <TextInput
//           style={styles.input}
//           placeholder="Type your message..."
//           placeholderTextColor="#888888"
//           value={messageText}
//           onChangeText={setMessageText}
//           onSubmitEditing={sendMessage}
//           returnKeyType="send"
//         />

//         <TouchableOpacity
//           style={styles.sendButton}
//           onPress={sendMessage}
//         >
//           <Send color="#0785F7" size={19} />
//         </TouchableOpacity>

//       </View>

//     </View>
//   );
// };

// export default ChatDetailScreen;

import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import { ArrowLeft, Send } from 'lucide-react-native';
import styles from './styles';

import img from '../../../assets/img.png';

const GroupChatScreen = ({ navigation }) => {

  const [messageText, setMessageText] = useState('');

  const [messages, setMessages] = useState([
    {
      text: 'Hello everyone!',
      sender: 'other',
      time: '10:30 AM',
    },
    {
      text: 'Hello! How are you?',
      sender: 'me',
      time: '10:31 AM',
    },
  ]);

  // Send message
  const sendMessage = () => {
    if (messageText.trim() === '') {
      return;
    }

    const newMessage = {
      text: messageText.trim(),
      sender: 'me',
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages([...messages, newMessage]);
    setMessageText('');
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft size={22} color="#222222" />
        </TouchableOpacity>

        <Text style={styles.heading}>
          Group Chat
        </Text>

        <View style={{ width: 22 }} />

      </View>

      <ScrollView
        style={styles.mainScroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

        {/* Rider Card */}
        <View style={styles.card}>

          <View style={styles.profileRow}>

            <Image
              source={img}
              style={styles.profileImage}
            />

            <View style={styles.profileInfo}>

              <Text style={styles.name}>
                Alex Johnson
              </Text>

              <Text style={styles.info}>
                alex@gmail.com
              </Text>

              <Text style={styles.info}>
                0300-1234567
              </Text>

            </View>

          </View>

          {/* Car Type */}
          <View style={styles.detailRow}>
            <Text style={styles.detail}>
              Car Type:
            </Text>

            <Text style={styles.bold}>
              Honda
            </Text>
          </View>

          {/* Car Seats */}
          <View style={styles.detailRow}>
            <Text style={styles.detail}>
              Car Seats:
            </Text>

            <Text style={styles.bold}>
              3/4 Seats
            </Text>
          </View>

          {/* Date and Time */}
          <Text style={styles.dateTime}>
            📅 15 October 2026  •  ⏰ 10:30 AM
          </Text>

        </View>

        {/* Chat Heading */}
        <Text style={styles.chatHeading}>
          Messages
        </Text>

        <Text style={styles.today}>
          TODAY
        </Text>

        {/* Chat Messages */}
        {messages.map((item, index) => (

          <View
            key={index}
            style={[
              styles.messageRow,
              item.sender === 'me'
                ? styles.myRow
                : styles.otherRow,
            ]}
          >

            {/* Other Person Image */}
            {item.sender === 'other' && (
              <Image
                source={img}
                style={styles.chatImage}
              />
            )}

            {/* Message Bubble */}
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

              <Text style={styles.time}>
                {item.time}
              </Text>
            </View>

            {/* My Image */}
            {item.sender === 'me' && (
              <Image
                source={require('../../../assets/img2.png')}
                style={styles.chatImage}
              />
            )}

          </View>

        ))}

      </ScrollView>

      {/* Message Input */}
      <View style={styles.inputContainer}>

        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          placeholderTextColor="#888888"
          value={messageText}
          onChangeText={setMessageText}
          onSubmitEditing={sendMessage}
          returnKeyType="send"
        />

        <TouchableOpacity
          style={styles.sendButton}
          onPress={sendMessage}
        >
          <Send size={20} color="#0785F7" />
        </TouchableOpacity>

      </View>

    </View>
  );
};

export default GroupChatScreen;

