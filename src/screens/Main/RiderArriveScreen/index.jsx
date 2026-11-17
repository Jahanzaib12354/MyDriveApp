
import React from 'react';
import {View,Text,ActivityIndicator,TouchableOpacity,} from 'react-native';

import styles from './styles';

const RiderArriveScreen = ({navigation}) => {
  return (
    <View style={styles.container}>


  <View style={styles.boxContainer}>

  <View style={styles.scoreBox}>
   
  </View>

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
        Lorem ipsum dolor sit amet consectetur.Vivamus 
        {'\n'}
        habitasse semper has go to pretium id ut.
        {'\n'}
        
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
   
     <TouchableOpacity
              style={styles.RiderLocation}
              onPress={() => navigation.navigate('RiderLocation')}
       >
        <Text style={styles.Ridertext}>
           Rider Arrive
         </Text>
       </TouchableOpacity>
    </View>
  );
};

export default RiderArriveScreen;
