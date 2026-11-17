
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import InputField from '../../../components/InputField';
import styles from './styles';

const NewPassword = ({ navigation }) => {

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleConfirm = () => {

    if (newPassword === confirmPassword) {
      console.log('Password Confirmed');

      navigation.navigate('LoginScreen');
    } else {
      console.log('Passwords do not match');
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
        New Password
      </Text>

      <Text style={styles.text}>
        Please enter your new password.
      </Text>

      <InputField
        value={newPassword}
        onChangeText={setNewPassword}
        placeholder="New Password"
        secureTextEntry={true}
        customStyle={styles.input}
      />

      <InputField
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm Password"
        secureTextEntry={true}
        customStyle={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleConfirm}
      >
        <Text style={styles.buttonText}>
          Confirm New Password
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default NewPassword;


