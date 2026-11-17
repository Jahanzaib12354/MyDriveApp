
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import styles from './styles';

import img from '../../../assets/img.png';

const RideDetailsScreen = ({navigation}) => {

  return (
    <View style={styles.container}>

      {/* Menu */}
      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuText}>☰</Text>
        
      </TouchableOpacity>

      {/* Starting Location */}
<View style={styles.locationBox}>

  <View style={styles.locationLeft}>
    <Text style={styles.blueDot}>●</Text>

    <Text style={styles.locationText}>
      Mall Center
    </Text>
  </View>

  <Text style={styles.locationIcon}>📍</Text>

</View>


{/* Destination */}
<View style={styles.locationBox}>

  <View style={styles.locationLeft}>
    <Text style={styles.redDot}>●</Text>

    <Text style={styles.locationText}>
      University Campus
    </Text>
  </View>

  <Text style={styles.locationIcon}>🔍</Text>

</View>


      {/* Location Chart */}
      <View style={styles.mapBox}>

        <Text style={styles.mapTitle}>
          📍  Route / Location
        </Text>

        <View style={styles.routeLine}>
          <Text style={styles.mapPoint}>●</Text>

          <View style={styles.line} />

          <Text style={styles.mapPointRed}>●</Text>
        </View>

        <Text style={styles.mapText}>
          Mall Center  →  University Campus
        </Text>

      </View>


      {/* Rider Card */}
      <View style={styles.card}>

        {/* Profile */}
        <View style={styles.profileRow}>

          <Image
            source={img}
            style={styles.profileImage}
          />

          <View style={styles.profileInfo}>

            <Text style={styles.name}>
              Alex Johnson
            </Text>

            <Text style={styles.info}>
              alex@gmail.com
            </Text>

            <Text style={styles.info}>
              0300-1234567
            </Text>

          </View>


          {/* Call & Message */}
          <View style={styles.actionButtons}>

            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>
                📞
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>
                💬
              </Text>
            </TouchableOpacity>
           
          </View>

        </View>


        {/* Car Type */}
        <View style={styles.detailRow}>

          <Text style={styles.detail}>
            Car Type:
          </Text>

          <Text style={styles.bold}>
            Honda
          </Text>

        </View>


        {/* Car Seats */}
        <View style={styles.detailRow}>

          <Text style={styles.detail}>
            Car Seats:
          </Text>

          <Text style={styles.bold}>
            3/4 Seats
          </Text>

        </View>


        
        <Text style={styles.dateTime}>
          📅 15 October 2026
        </Text>

        <Text style={styles.dateTime}>
          ⏰ 10:30 AM
        </Text>

        
     
        
      </View>
   
         <TouchableOpacity
              style={styles.riderArrive}
              onPress={() => navigation.navigate('RiderArriveScreen')}
       >
        <Text style={styles.actionriderArrive}>
           Rider Arrive
         </Text>
       </TouchableOpacity>
     </View>
  );
};

export default RideDetailsScreen;

