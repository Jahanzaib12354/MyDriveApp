

import React, { useState } from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import styles from './styles';
import img from '../../../assets/img.png';
import InputField from '../../../components/InputField';

const FindRidesScreen = ({navigation}) => {
  const [showAvailable, setShowAvailable] = useState(false);
const [showDropdown, setShowDropdown] = useState(false);
  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Find Rides
      </Text>

    
      <InputField
        style={styles.searchBox}
        placeholder="Search rides..."
      />



      <Text style={styles.title}>
  All Rides
</Text>

<TouchableOpacity
  style={styles.filterBox}
  onPress={() => setShowAvailable(!showAvailable)}
>
  <Text style={styles.filterText}>Available</Text>
  <Text style={styles.arrow}>▼</Text>
</TouchableOpacity>

{showAvailable && (
  <View style={styles.dropdown}>
    {['All', 'Available', 'Unavailable'].map(item => (
      <Text
        key={item}
        style={styles.dropdownText}
        onPress={() => setShowAvailable(false)}
      >
        {item}
      </Text>
    ))}
  </View>
)}

<Text style={styles.sortTitle}>
  Sort
</Text>

<TouchableOpacity
  style={styles.filterBox}
  onPress={() => setShowDropdown(!showDropdown)}
>
  <Text style={styles.filterText}>By Seat</Text>
  <Text style={styles.arrow}>▼</Text>
</TouchableOpacity>

{showDropdown && (
  <View style={styles.dropdown}>
    {['1 Seat', '2 Seats', '3 Seats', '4 Seats'].map(item => (
      <Text
        key={item}
        style={styles.dropdownText}
        onPress={() => setShowDropdown(false)}
      >
        {item}
      </Text>
    ))}
  </View>
)}

    
      <Text style={styles.resultText}>
        8 results found
      </Text>


    
      <View style={styles.card}>

    
        <View style={styles.profileRow}>

          <Image
            source={img}
            style={styles.profileImage}
          />

          <View>
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


        {/* Date & Time */}
        <Text style={styles.dateTime}>
          📅 15 October 2026  •  ⏰ 10:30 AM
        </Text>


        {/* Start Location */}
        <View style={styles.locationRow}>

          <Text style={styles.locationText}>   Mall Center </Text>

          <Text style={styles.locationIcon}>
            🔍
          </Text>

          <Text style={styles.locationIcon}>
            📍
          </Text>

        </View>


        {/* Destination */}
        <View style={styles.locationRow}>

          <Text style={styles.locationText}>
            University Campus
          </Text>

          <Text style={styles.locationIcon}>
            🔍
          </Text>

          <Text style={styles.locationIcon}>
            📍
          </Text>

        </View>

      </View>

         <TouchableOpacity style={styles.button}
          onPress={()=>navigation.navigate('FindLocation')}
          >
            <Text style={styles.buttonText}>
              Join Location
              
            </Text>
          </TouchableOpacity>
    </View>
  );
};

export default FindRidesScreen;

