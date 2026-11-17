import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import styles from './styles';


const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <Text style={styles.heading}>
        Profile
      </Text>

      {/* Profile Image */}
      <View style={styles.profileSection}>
        <Image
          source={require('../../../assets/img3.png')}
          style={styles.profileImage}
          resizeMode="cover"
        />

        <Text style={styles.name}>
          Anastasia Sya
        </Text>

        <Text style={styles.location}>
          Florida, USA
        </Text>
      </View>

      {/* Complete Profile Box */}
      <View style={styles.completeBox}>
        <View style={styles.completionCircle}>
          <Text style={styles.percentage}>
            70%
          </Text>
        </View>

        <View style={styles.completionInfo}>
          <Text style={styles.completeTitle}>
            Complete your profile
          </Text>

          <Text style={styles.standOut}>
            to stand out
          </Text>

          <TouchableOpacity
            style={styles.editButton}
            activeOpacity={0.8}
            onPress={() =>navigation.navigate('EditProfile')}
          >
            <Text style={styles.editButtonText}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Statistics */}
      <View style={styles.statsContainer}>

        <View style={styles.statItem}>
          <Text style={styles.statNumber}>
            1,260
          </Text>

          <Text style={styles.statLabel}>
            Total Price
          </Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statNumber}>
            4.8 
          </Text>

          <Text style={styles.statLabel}>
            (296)
          </Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statNumber}>
            846
          </Text>

          <Text style={styles.statLabel}>
             Passenger
          </Text>
        </View>

      </View>

      {/* About Section */}
      <View style={styles.aboutSection}>
        <Text style={styles.aboutHeading}>
          About
        </Text>

        <Text style={styles.aboutText}>
          Hello! I'm Anastasia, and I love connecting
          with people in my community. {'\n'}
          I enjoy travelling and discovering new places.
          {'\n'}
          I believe every journey is better with good
          company. {'\n'}
          Safety, respect, and trust are important to me.
          {'\n'}
          I always try to be punctual and friendly.
          {'\n'}
          I enjoy sharing experiences with others.
          {'\n'}
          Looking forward to meeting you on the road!
        </Text>
      </View>

    </ScrollView>
  );
};

export default ProfileScreen;