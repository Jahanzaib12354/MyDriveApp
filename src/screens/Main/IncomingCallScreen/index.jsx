
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { Phone, PhoneOff } from 'lucide-react-native';
import styles from './styles';

const IncomingCallScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Incoming Call
      </Text>

      <Image
        source={require('../../../assets/img.png')}
        style={styles.profileImage}
      />

      <Text style={styles.name}>
        Leilani Angel
      </Text>

      <Text style={styles.subtitle}>
        Your Rider Call
      </Text>

      <View style={styles.buttonRow}>

        {/* Reject Call */}
        <TouchableOpacity
          style={styles.rejectButton}
          onPress={() => navigation.goBack()}
        >
          <PhoneOff color="#FFFFFF" size={30} />
        </TouchableOpacity>

        {/* Receive Call */}
        <TouchableOpacity
          style={styles.acceptButton}
          onPress={() =>
            Alert.alert('Call Answered', 'Call connected!')
          }
        >
          <Phone color="#FFFFFF" size={30} />
        </TouchableOpacity>

      </View>

    </View>
  );
};

export default IncomingCallScreen;

