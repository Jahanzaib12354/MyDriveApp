
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';

import styles from './styles';
import InputField from '../../../components/InputField';

const ReviewScreen = ({ navigation }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);

  return (
     <KeyboardAvoidingView
  style={{ flex: 1 }}
  behavior="height"
>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      {/* Header */}
      <Text style={styles.header}>Review & Rating</Text>

      {/* Driver Image */}
      <Image
        source={require('../../../assets/img3.png')}
        style={styles.profileImage}
      />

      {/* Driver Name */}
      <Text style={styles.driverName}>John Smith</Text>

      {/* Description */}
      <Text style={styles.description}>
        Lorem ipsum dolor sit alley Lorem ipsum dolor sit alley
        Lorem ipsum dolor sit alley
      </Text>

      {/* Starting Location */}
      <View style={styles.locationRow}>
        <View style={styles.blueDot} />
        <Text style={styles.locationText}>Mall Center</Text>
      </View>

      {/* Destination Location */}
      <View style={styles.locationRow}>
        <View style={styles.redDot} />
        <Text style={styles.locationText}>University Campus</Text>
      </View>

      {/* Rate Your Drive */}
      <Text style={styles.rateHeading}>Rate Your Drive</Text>

      {/* Five Stars */}
      <View style={styles.starsRow}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            onPress={() => setRating(star)}
          >
            <Text
              style={[
                styles.star,
                { color: star <= rating ? '#FFC107' : '#D1D5DB' },
              ]}
            >
              ★
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Add Review */}
      <Text style={styles.reviewLabel}>Add Review</Text>

      <InputField
        style={styles.reviewInput}
        placeholder="Write your review here..."
        placeholderTextColor="#999999"
        multiline
        textAlignVertical="top"
        value={review}
        onChangeText={setReview}
      />

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.submitButton}
      
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

    </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ReviewScreen;
