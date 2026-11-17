



// import React, { useEffect } from 'react';
// import { View, Text } from 'react-native';

// import styles from '../../styles/styles';

// const SplashScreen = ({ navigation }) => {

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigation.replace('HomeScreen');
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, [navigation]);

//   return (
//     <View style={styles.container}>

//       <View style={styles.logo}>
//         <Text style={styles.logoText}>
//           Community{'\n'}Ride-Share
//         </Text>
//       </View>

//     </View>
//   );
// };

// export default SplashScreen;




// import React, { useEffect, useRef } from 'react';

// import {
//   View,
//   Text,
//   Animated,
//   Dimensions,
//   StatusBar,
// } from 'react-native';

// import styles from '../../styles/styles';

// const { width, height } = Dimensions.get('window');

// const SplashScreen = ({ navigation }) => {
//   const scaleAnim = useRef(new Animated.Value(0.05)).current;
//   const textOpacity = useRef(new Animated.Value(0)).current;

//   // Circle ko poori screen cover karne ke liye scale
//   const maxScale =
//     (Math.sqrt(width * width + height * height) * 1.5) / 40;

//   useEffect(() => {
//     const animation = Animated.parallel([
//       Animated.timing(scaleAnim, {
//         toValue: maxScale,
//         duration: 5000,
//         useNativeDriver: true,
//       }),

//       Animated.timing(textOpacity, {
//         toValue: 1,
//         duration: 500,
//         delay: 3500,
//         useNativeDriver: true,
//       }),
//     ]);

//     animation.start(({ finished }) => {
//       if (finished) {
//         navigation.replace('OnboardingScreen');
//       }
//     });

//     return () => {
//       animation.stop();
//     };
//   }, [navigation, scaleAnim, textOpacity, maxScale]);

//   return (
//     <View style={styles.splashContainer}>
//       <StatusBar hidden />

//       {/* Animated Blue Circle */}
//       <Animated.View
//         style={[
//           styles.animatedCircle,
//           {
//             transform: [{ scale: scaleAnim }],
//           },
//         ]}
//       />

//       {/* Logo Text */}
//       <Animated.View
//         style={[
//           styles.splashLogo,
//           {
//             opacity: textOpacity,
//           },
//         ]}
//       >
//         <Text style={styles.splashLogoText}>
//           Community{'\n'}Ride-Share
//         </Text>
//       </Animated.View>
//     </View>
//   );
// };

// export default SplashScreen;




import React, { useEffect, useRef } from 'react';

import {
  View,
  Text,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';

import styles from '../../styles/styles';

const { width, height } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
  // Circle 40% size se start hoga
  const scaleAnim = useRef(new Animated.Value(0.4)).current;

  // Screen ko cover karne ke liye final scale
  const maxScale =
    (Math.sqrt(width * width + height * height) * 1.5) / 40;

  useEffect(() => {
    const animation = Animated.timing(scaleAnim, {
      toValue: maxScale,
      duration: 5000,
      useNativeDriver: false,
    });

    animation.start(({ finished }) => {
      if (finished) {
        navigation.replace('HomeScreen');
      }
    });

    return () => {
      animation.stop();
    };
  }, [navigation, scaleAnim, maxScale]);

  // Text bhi circle ke saath bara hoga
  const animatedFontSize = scaleAnim.interpolate({
    inputRange: [0.4, maxScale],
    outputRange: [10, 24],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.splashContainer}>
      <StatusBar hidden />

      {/* Blue Circle */}
      <Animated.View
        style={[
          styles.animatedCircle,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      />

      {/* Text Circle ke andar pehle se show hoga */}
      <View style={styles.splashLogo}>
        <Animated.Text
          style={[
            styles.splashLogoText,
            {
              fontSize: animatedFontSize,
            },
          ]}
        >
          Community{'\n'}Ride-Share
        </Animated.Text>
      </View>
    </View>
  );
};

export default SplashScreen;
