
import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

import styles from './styles';

const FAQs = ({ navigation }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#F5F5F5"
        barStyle="dark-content"
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>FAQs</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* First FAQ - Dropdown */}
        <View style={styles.faqItem}>
          <TouchableOpacity
            style={styles.questionRow}
            activeOpacity={0.7}
            onPress={() => setExpanded(!expanded)}
          >
            <Text style={styles.questionText}>
              Lorem ipsum dollar?
            </Text>

            <Text style={styles.arrow}>
              {expanded ? '⌄' : '›'}
            </Text>
          </TouchableOpacity>

          {expanded && (
            <Text style={styles.answerText}>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
          )}
        </View>

        {/* Second FAQ - Arrow only */}
        <View style={styles.faqItem}>
          <View style={styles.questionRow}>
            <Text style={styles.questionText}>
              Lorem ipsum dollar
            </Text>

            <Text style={styles.arrow}>›</Text>
          </View>
        </View>
       <View style={styles.faqItem}>
          <View style={styles.questionRow}>
            <Text style={styles.questionText}>
              Lorem ipsum dollar
            </Text>

            <Text style={styles.arrow}>›</Text>
          </View>
        </View>

        <View style={styles.faqItem}>
          <View style={styles.questionRow}>
            <Text style={styles.questionText}>
              Lorem ipsum dollar 
            </Text>

            <Text style={styles.arrow}>›</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FAQs;
