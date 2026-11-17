



import React, { useState, useRef } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  PanResponder,
} from 'react-native';

import styles from '../../styles/styles';

const HomeScreen = ({ navigation }) => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNext = () => {
    if (currentScreen < 2) {
      setCurrentScreen(currentScreen + 1);
    } else {
      navigation.replace('HomeScreen');
    }
  };

  const handlePrevious = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  const handleSkip = () => {
    navigation.replace('HomeScreen');
  };

  // Swipe gesture
  const currentScreenRef = useRef(currentScreen);
  currentScreenRef.current = currentScreen;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dx) > 20 &&
        Math.abs(gestureState.dx) > Math.abs(gestureState.dy),

      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -50) {
          // Swipe left: Next screen
          if (currentScreenRef.current < 2) {
            setCurrentScreen(currentScreenRef.current + 1);
          }
        } else if (gestureState.dx > 50) {
          // Swipe right: Previous screen
          if (currentScreenRef.current > 0) {
            setCurrentScreen(currentScreenRef.current - 1);
          }
        }
      },
    })
  ).current;

  return (
    <View
      style={styles.containerrr}
      {...panResponder.panHandlers}
    >
      <StatusBar
        backgroundColor="#F7F8FC"
        barStyle="dark-content"
      />

      {/* Top Image */}
      <View style={styles.imageContainer}>
        <Image
          source={
            currentScreen === 0
              ? require('../../assets/img4.png')
              : currentScreen === 1
              ? require('../../assets/img5.png')
              : require('../../assets/img6.png')
          }
          style={styles.image}
          resizeMode="cover"
        />

        {/* Logo on First Screen */}
        {currentScreen === 0 && (
          <View style={styles.logo}>
            <Text style={styles.logoText}>
              Community{'\n'}Ride-Share
            </Text>
          </View>
        )}
      </View>

      {/* Bottom Content */}
      <View style={styles.content}>

        {/* Pagination Dots */}
        <View style={styles.dotsContainer}>
          {[0, 1, 2].map((index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentScreen === index && styles.activeDot,
              ]}
            />
          ))}
        </View>

        {/* Screen Text */}
        {currentScreen === 0 ? (
          <View style={styles.textContainer}>
            <Text style={styles.subtitle}>
              Welcome to Rideshare
            </Text>

            <Text style={styles.title}>
              Share rides with your ride-share community
              members or group, not strangers
            </Text>
          </View>
        ) : currentScreen === 1 ? (
          <View style={styles.textContainer}>
            <Text style={styles.subtitle}>
              Choose Your Ride
            </Text>

            <Text style={styles.title}>
              Simple, safe, and affordable travel.
            </Text>
          </View>
        ) : (
          <View style={styles.textContainer}>
            <Text style={styles.subtitle}>
              Trusted rides, lower costs
            </Text>

            <Text style={styles.title}>
              Build your trust, for your drive community
            </Text>
          </View>
        )}

        {/* Bottom Buttons */}
        <View style={styles.buttonContainer}>

          {currentScreen === 0 ? (
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={handleSkip}
            >
              <Text style={styles.secondaryButtonText}>
                Skip
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={handlePrevious}
            >
              <Text style={styles.secondaryButtonText}>
                Previous
              </Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => {
              if (currentScreen === 2) {
                navigation.replace('LoginScreen');
              } else {
                handleNext();
              }
            }}
          >
            <Text style={styles.primaryButtonText}>
              {currentScreen === 2 ? 'Get Started' : 'Next'}
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

export default HomeScreen;