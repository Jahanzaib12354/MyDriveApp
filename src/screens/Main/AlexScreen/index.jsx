

import React, { useState, useRef } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Animated,
  Dimensions,
} from 'react-native';

import styles from './styles';
import CustomModalMenu from '../../Main/CustomModalMenu';

const AlexScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const screenWidth = Dimensions.get('window').width;
  const menuWidth = Math.min(280, screenWidth * 0.85);

  const slideAnim = useRef(new Animated.Value(-320)).current;

  // Open menu from the left side
  const openMenu = () => {
    slideAnim.setValue(-menuWidth);
    setModalVisible(true);

    requestAnimationFrame(() => {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  // Close menu towards the left side
  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: -menuWidth,
      duration: 250,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        setModalVisible(false);
      }
    });
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>
            Welcome, Alex
          </Text>

          <Text style={styles.community}>
            👥 Downtown Commuters
          </Text>
        </View>

        {/* Menu Button */}
        <TouchableOpacity
          style={styles.menuButton}
          activeOpacity={0.7}
          onPress={openMenu}
        >
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Left Side Animated Menu */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="none"
        statusBarTranslucent={true}
        onRequestClose={closeMenu}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}
        >
          {/* Dark Background Overlay */}
          <TouchableOpacity
            activeOpacity={1}
            onPress={closeMenu}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.4)',
            }}
          />

          {/* Animated Left Menu */}
          <Animated.View
            style={{
              width: menuWidth,
              height: '100%',
              backgroundColor: '#FFFFFF',
              transform: [
                {
                  translateX: slideAnim,
                },
              ],
            }}
          >
            <CustomModalMenu
              navigation={navigation}
              onClose={closeMenu}
            />
          </Animated.View>
        </View>
      </Modal>

      {/* Community Code */}
      <View style={styles.codeBox}>
        <Text style={styles.codeTitle}>
          Community Code: DEM0123
        </Text>

        <Text style={styles.codeText}>
          Share this code with others to invite them
        </Text>
      </View>

      {/* Offer a Ride */}
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('OfferRideScreen')}
      >
        <View style={styles.iconBox}>
          <Text style={styles.icon}>🚗</Text>
        </View>

        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>
            Offer a Ride
          </Text>

          <Text style={styles.cardSubtitle}>
            Share your journey
          </Text>
        </View>

        <Text style={styles.description}>
          Post a ride and help community members get to their destination
        </Text>
      </TouchableOpacity>

      {/* Find a Ride */}
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('FindRiderScreen')}
      >
        <View style={[styles.iconBox, styles.blueIcon]}>
          <Text style={styles.icon}>⌕</Text>
        </View>

        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>
            Find a ride.
          </Text>

          <Text style={styles.cardSubtitle}>
            Browse available rides
          </Text>
        </View>

        <Text style={styles.description}>
          Search for rides offered by community mebers. 
        </Text>
      </TouchableOpacity>

      {/* My Rides */}
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('MyRidesScreen')}
      >
        <View style={[styles.iconBox, styles.purpleIcon]}>
          <Text style={styles.icon}>▣</Text>
        </View>

        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>
            My Rides
          </Text>

          <Text style={styles.cardSubtitle}>
            View your rides
          </Text>
        </View>

        <Text style={styles.description}>
          Manage rides you're offering or joined
        </Text>
      </TouchableOpacity>

      {/* Community Activity */}
      <View style={styles.activityBox}>
        <Text style={styles.activityTitle}>
          Community Activity
        </Text>

        <View style={styles.stats}>
          <View style={styles.statBox}>
            <Text style={styles.number}>5</Text>

            <Text style={styles.statText}>
              Members
            </Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.number}>Active</Text>

            <Text style={styles.statText}>
              Members
            </Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.trust}>
              Trust-Based
            </Text>
          </View>
        </View>
      </View>

    </View>
  );
};

export default AlexScreen;
