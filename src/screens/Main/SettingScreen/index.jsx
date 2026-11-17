
import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  StatusBar,
  StyleSheet,
} from 'react-native';
import styles  from './styles';
const SettingScreen = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

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
          Settings
        </Text>
      </View>

      {/* Settings Option */}
      <View style={styles.settingsList}>

        <TouchableOpacity
          style={styles.settingRow}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Security')}

        >
          <Text style={styles.settingText}>
            Security
          </Text>

          <Text style={styles.arrow}>
            ›
          </Text>
        </TouchableOpacity>

        {/* Notification Toggle */}
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>
            Notification
          </Text>

          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{
              false: '#D1D1D1',
              true: '#2196F3',
            }}
            thumbColor="#FFFFFF"
            ios_backgroundColor="#D1D1D1"
          />
        </View>

        {/* Help / FAQ */}
        <TouchableOpacity
          style={styles.settingRow}
          activeOpacity={0.7}
            onPress={() => navigation.navigate('FAQs')}
        >
          <Text style={styles.settingText}>
            Help / FAQ
          </Text>

          <Text style={styles.arrow}>
            ›
          </Text>
        </TouchableOpacity>

        {/* Terms of Use */}
        <TouchableOpacity
          style={styles.settingRow}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('TermsUse')}
        >
          <Text style={styles.settingText}>
            Terms of Use
          </Text>

          <Text style={styles.arrow}>
            ›
          </Text>
        </TouchableOpacity>

        {/* Privacy Policy */}
        <TouchableOpacity
          style={styles.settingRow}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('PrivacyPolicy')}
        >
          <Text style={styles.settingText}>
            Privacy Policy
          </Text>

          <Text style={styles.arrow}>
            ›
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default SettingScreen;

