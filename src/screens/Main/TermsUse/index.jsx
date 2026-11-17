
import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

import styles from './styles';

const TermsUseScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
     

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Terms of Use
        </Text>
      </View>

      {/* Terms Paragraphs */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.paragraph}>
          Welcome to our application. By using this app,
          you agree to follow these Terms of Use. Please
          read them carefully before using our services.
        </Text>

        <Text style={styles.paragraph}>
          You agree to provide correct information and
          use the application responsibly. You must not
          use our services for any illegal or harmful
          activity. We may update our services from time
          to time to improve your experience.
        </Text>

        <Text style={styles.paragraph}>
          Your privacy and security are important to us.
          Please keep your account information safe.
          By continuing to use this application, you
          accept these terms and any future updates.
        </Text>
      </ScrollView>
    </View>
  );
};

export default TermsUseScreen;
