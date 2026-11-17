
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import styles from './styles';

const FindRiderLocationScreen = ({navigation}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      {/* Header */}
      <View style={styles.header}>
    
       <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>
      </View>

      {/* Locations */}
      <View style={styles.locationContainer}>

        <View style={styles.locationRow}>
          <View style={styles.dot} />
          <Text style={styles.locationText}>Mall Center</Text>

          <TouchableOpacity style={styles.searchIcon}>
            <Text style={styles.iconText}>⌕</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.routeLine} />

        <View style={styles.locationRow}>
          <View style={styles.destinationDot} />
          <Text style={styles.locationText}>
            University Campus
          </Text>

          <TouchableOpacity style={styles.searchIcon}>
            <Text style={styles.iconText}>⌕</Text>
          </TouchableOpacity>
        </View>

      </View>

      {/* Location Graphic */}
      <View style={styles.mapContainer}>
        <View style={styles.mapRoad1} />
        <View style={styles.mapRoad2} />
        <View style={styles.mapRoad3} />
        <View style={styles.mapRoad4} />

        <View style={styles.park}>
          <Text style={styles.parkText}>PARK</Text>
        </View>

        <View style={styles.mapPin}>
          <Text style={styles.pinText}>📍</Text>
        </View>

        <View style={styles.carMarker}>
          <Text style={styles.carText}>🚗</Text>
        </View>

        <View style={styles.mapLabel}>
          <Text style={styles.mapLabelText}>
            Rider Location
          </Text>
        </View>
      </View>

      <View style={styles.riderCard}>

        

{/* Rider Information */}
<View style={styles.riderTopRow}>

  <Image
    source={require('../../../assets/img.png')}
    style={styles.profileImage}
  />

  <View style={styles.riderInfo}>
    <Text style={styles.name}>Alex Johnson</Text>
    <Text style={styles.info}>alex@gmail.com</Text>
    <Text style={styles.info}>0300-1234567</Text>
  </View>

  {/* Call and Message Icons */}
  <View style={styles.actionColumn}>

    <TouchableOpacity onPress={() => {}}>
      <Text style={styles.actionIcon}>📞</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {}}>
      <Text style={styles.actionIcon}>💬</Text>
    </TouchableOpacity>

  </View>

</View>

      </View>

      {/* Rider Details Dropdown */}
      <TouchableOpacity
        style={styles.detailsRow}
        onPress={() => setShowDetails(!showDetails)}
      >
        <Text style={styles.detailsTitle}>Rider Details</Text>

        <Text style={styles.arrow}>
          {showDetails ? '⌃' : '⌄'}
        </Text>
      </TouchableOpacity>

      {showDetails && (
        <View style={styles.detailsBox}>
          <Text style={styles.detailText}>
            Name: Alex Johnson
          </Text>
          <Text style={styles.detailText}>
            Email: alex@gmail.com
          </Text>
          <Text style={styles.detailText}>
            Phone: 0300-1234567
          </Text>
          <Text style={styles.detailText}>
            Destination: University Campus
          </Text>
        </View>
      )}

      {/* Estimated Arrival Time */}
      <View style={styles.estimateRow}>
        <Text style={styles.estimateText}>
          Estimate Time Arrive
        </Text>

        <Text style={styles.timeText}>
          14 minutes
        </Text>
        
      </View>
           <TouchableOpacity
              style={styles.actionpayment}
            onPress={() => navigation.navigate('RiderPayment')}
                 >
                 <Text style={styles.actiontext}>Action Payment</Text>
              </TouchableOpacity>
           
           
    </ScrollView>
  );
};

export default FindRiderLocationScreen;


