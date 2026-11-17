
import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

const RiderPayment = ({navigation}) => {
  return (
    <View style={styles.container}>

      {/* Payment Header */}
      <Text style={styles.header}>Payment</Text>

      {/* Score Box */}
      <View style={styles.boxContainer}>

        <View style={styles.scoreBox}>
          <View style={styles.innerBox} />
        </View>

        {/* Search Logo */}
        <View style={styles.searchCircle}>
          <Text style={styles.searchLogo}>⌕</Text>
        </View>

      </View>

      {/* Heading */}
      <Text style={styles.heading}>
        Start Your Ride
      </Text>

      {/* Driver Message */}
      <Text style={styles.subHeading}>
        Rider has arrived on location
      </Text>

      {/* Description */}
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Vivamus
        {'\n'}
        habitasse semper has go to pretium id ut.
      </Text>

      {/* Loading Circle */}
      <ActivityIndicator
        size="large"
        color="#2196F3"
        style={styles.loader}
      />

      {/* Waiting Message */}
      <Text style={styles.waitingText}>
        Waiting driver to start riding
      </Text>



{/* Leave Feedback */}
<Text style={styles.feedbackHeading}>
  Leave Feedback
</Text>

{/* Submit Button */}
<TouchableOpacity
  style={styles.submitButton}
  onPress={() => navigation.navigate ('ReviewScreen')}
>
  <Text style={styles.submitButtonText}>
    Submit
  </Text>
</TouchableOpacity>

    </View>
  );
};

export default RiderPayment;