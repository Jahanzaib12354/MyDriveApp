
import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  StatusBar,
} from 'react-native';

import styles from './styles';

const SecurityScreen = ({ navigation }) => {
  const [faceId, setFaceId] = useState(true);
  const [rememberMe, setRememberMe] = useState(true);
  const [biometricId, setBiometricId] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#F5F5F5"
        barStyle="dark-content"
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Security
        </Text>
      </View>

      {/* Security Options */}
      <View style={styles.settingsList}>

        {/* Face ID */}
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>
            Face ID
          </Text>

          <Switch
            value={faceId}
            onValueChange={setFaceId}
            trackColor={{
              false: '#D1D1D1',
              true: '#2196F3',
            }}
            thumbColor="#FFFFFF"
          />
        </View>

        {/* Remember Me */}
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>
            Remember Me
          </Text>

          <Switch
            value={rememberMe}
            onValueChange={setRememberMe}
            trackColor={{
              false: '#D1D1D1',
              true: '#2196F3',
            }}
            thumbColor="#FFFFFF"
          />
        </View>

        {/* Biometric ID */}
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>
            Biometric ID
          </Text>

          <Switch
            value={biometricId}
            onValueChange={setBiometricId}
            trackColor={{
              false: '#D1D1D1',
              true: '#2196F3',
            }}
            thumbColor="#FFFFFF"
          />
        </View>

        {/* Google Authenticator */}
        <TouchableOpacity
          style={styles.settingRow}
          activeOpacity={0.7}
          onPress={() => {
            console.log('Google Authenticator pressed');
          }}
        >
          <Text style={styles.settingText}>
            Google Authenticator
          </Text>

          <Text style={styles.arrow}>
            ›
          </Text>
        </TouchableOpacity>

      </View>

      {/* Change Password Button */}
      <TouchableOpacity
        style={styles.changePasswordButton}
        activeOpacity={0.8}
        onPress={() => {
          console.log('Change Password pressed');
        }}
      >
        <Text style={styles.changePasswordText}>
          Change Password
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default SecurityScreen;
