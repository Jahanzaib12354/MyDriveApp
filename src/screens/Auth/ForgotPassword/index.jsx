// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// import InputField from '../../../components/InputField';
// import styles from './styles';

// const ForgotPassword = ({navigation}) => {

// const [email, setEmail] = useState('');

// const handleReset = () => {
// console.log('Reset password request');
// navigation.navigate('PassCode')
// };

// return ( <View style={styles.container}>

//       <View style={styles.logo}>
//         <Text style={styles.logoText}>
//           Ride-Share
//         </Text>
//       </View>


//   <Text style={styles.title}>
//     Forgot Password
//   </Text>

//   <Text style={styles.text}>
//     Enter your email to reset your password.
//   </Text>

//   <InputField
//     value={email}
//     onChangeText={setEmail}
//     placeholder="Enter Email"
//     keyboardType="email-address"
//   />

//   <TouchableOpacity
//     style={styles.button}
//     onPress={handleReset}
//   >
//     <Text style={styles.buttonText}>
//       Send Code
//     </Text>
//   </TouchableOpacity>

// </View>


// );
// };

// export default ForgotPassword;


import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

import axios from 'axios';

import InputField from '../../../components/InputField';
import styles from './styles';

const ForgotPassword = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {

    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }

    try {

      setLoading(true);

      const response = await axios.post(
        'YOUR_FORGOT_PASSWORD_API_URL',
        {
          email: email.trim(),
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Forgot Password Response:', response.data);

      navigation.navigate('PassCode', {
        email: email.trim(),
        flow: 'forgot',
      });

    } catch (error) {

      console.log(
        'Forgot Password Error:',
        error.response?.data || error.message
      );

      Alert.alert(
        'Error',
        error.response?.data?.message ||
          'Unable to send verification code'
      );

    } finally {
      setLoading(false);
    }
  };

  return (

    <View style={styles.container}>

      <View style={styles.logo}>
        <Text style={styles.logoText}>
          Ride-Share
        </Text>
      </View>

      <Text style={styles.title}>
        Forgot Password
      </Text>

      <Text style={styles.text}>
        Enter your email to reset your password.
      </Text>

      <InputField
        value={email}
        onChangeText={setEmail}
        placeholder="Enter Email"
        keyboardType="email-address"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleReset}
        disabled={loading}
      >

        {loading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.buttonText}>
            Send Code
          </Text>
        )}

      </TouchableOpacity>

    </View>

  );
};

export default ForgotPassword;