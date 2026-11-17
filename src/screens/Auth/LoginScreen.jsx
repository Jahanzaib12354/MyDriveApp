



import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import axios from 'axios';

import InputField from '../../components/InputField';
import styles from '../../styles/styles';

import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/auth/authSlice';

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
 
  
  const handleLogin = async () => {

  
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
  
 
  
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setError('');
    setLoading(true);

    try {

    
 console.log('response email',email)
      const response = await axios.post(
        'https://xhcqhdxq-8005.inc1.devtunnels.ms/login',

        {
          email: email,
          password: password,
        },

        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // API Response
      console.log('Login Response:', response);

      // Save User Data in Redux
      const userData = response.data.user || {
        email: email.trim(),
        token: response.data.token || null,
      };

      // dispatch(setUser(userData));
      dispatch(setUser({
       user: userData,
          token: response.data.token,
     }));

      // Clear Error
      setError('');

      
      navigation.navigate('RouteCommunity');

    } catch (error) {

      console.log('Login Error:', error.response?.data || error.message);

      setError(
        error.response?.data?.message ||
        'Login failed. Please check your email and password.'
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <View style={styles.abc}>

      {/* Logo */}
      <View style={styles.logo}>
        <Text style={styles.logoText}>
          Ride-Share
        </Text>
      </View>

      <Text style={styles.def}>
        Login to Continue 
      </Text>

      {/* Email Input */}
      <InputField
        value={email}
        onChangeText={setEmail}
        placeholder="Enter Email"
        keyboardType="email-address"
      />

      {/* Password Input */}
      <InputField
        value={password}
        onChangeText={setPassword}
        placeholder="Enter Password"
        secureTextEntry={true}
      />

      {/* Forgot Password */}
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('ForgotPassword')}
      >
        <Text style={styles.forgotText}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      {/* Error Message */}
      {error !== '' && (
        <Text style={{ color: 'red', marginVertical: 10 }}>
          {error}
        </Text>
      )}

      {/* Login Button */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Please Wait...' : 'Login'}
        </Text>
      </TouchableOpacity>

      {/* Register Button */}
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.RegisterText}>
          Or Login With
        </Text>
      </TouchableOpacity>

      {/* Facebook Button */}
      <TouchableOpacity
        style={styles.facebookButtonn}
        onPress={() => {}}
      >
        <Text style={styles.socialButtonTextn}>
          ● Continue with Facebook
        </Text>
      </TouchableOpacity>

      {/* Google Button */}
      <TouchableOpacity
        style={styles.googleButtonn}
        onPress={() => {}}
      >
        <Text style={styles.googleButtonTextn}>
          G Continue with Google
        </Text>
      </TouchableOpacity>

    </View>

  );
};

export default LoginScreen;