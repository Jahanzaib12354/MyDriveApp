import React from 'react';
import { View,Text,Image,TouchableOpacity,
} from 'react-native';

import styles from './styles';

import img from '../../../assets/img.png';
import img2 from '../../../assets/img2.png';
import InputField from '../../../components/InputField';

const FindRiderScreen = ({navigation}) => {
  return (
    <View style={styles.container}>

      
      <Text style={styles.heading}>Find Rider</Text>

      
      <InputField
        style={styles.searchBox}
        placeholder="Search Rider"
      />
      <View style={styles.card}>
        <View style={styles.profileRow}>

          <Image
            source={img}
            style={styles.profileImage}
          />

          <View>
            <Text style={styles.name}>Alex Johnson</Text>
            <Text style={styles.info}>alex@gmail.com</Text>
            <Text style={styles.info}>0300-1234567</Text>
          </View>

        </View>
        
    
        <View style={styles.detailRow}>
            <Text style={styles.detail}>Car Type:</Text>
            <Text style={styles.bold}>Honda</Text>
            </View>

         <View style={styles.detailRow}>
        <Text style={styles.detail}> Car Seats:</Text>
         <Text style={styles.bold}>3/4 Seats</Text>
    
       </View>
            
        
        <Text style={styles.dateTime}>
          📅 15 October 2026  •  ⏰ 10:30 AM
        </Text>


        <View style={styles.locationRow}>
          
          <Text style={styles.locationText}>       Mall Center  </Text>
           <Text style={styles.locationIcon}>🔍</Text>
          <Text style={styles.locationIcon}>📍</Text>
        </View>

        <View style={styles.locationRow}>
          <Text style={styles.locationText}>       University Campus</Text>
          <Text style={styles.locationIcon}>🔍</Text>
          <Text style={styles.locationIcon}>📍</Text>
           
        </View>

        <TouchableOpacity style={styles.requestButton}
         onPress={()=>navigation.navigate('FindJoinScreen')}
        >
          <Text style={styles.buttonText}>Request to Join</Text>
         
        </TouchableOpacity>

      </View>


      <View style={styles.card}>

        <View style={styles.profileRow}>

          <Image
            source={img2}
            style={styles.profileImage}
          />

          <View>
            <Text style={styles.name}>Sarah Khan</Text>
            <Text style={styles.info}>sarah@gmail.com</Text>
            <Text style={styles.info}>0312-7654321</Text>
          </View>

        </View>

        <Text style={styles.detail}>
          Car Type: <Text style={styles.bold}>Toyota</Text>
        </Text>

        <Text style={styles.detail}>
          Car Seats: <Text style={styles.bold}>2/4 Seats</Text>
        </Text>

      </View>

    </View>
  );
};

export default FindRiderScreen;