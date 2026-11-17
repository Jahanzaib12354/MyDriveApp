// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// import InputField from '../../../components/InputField';
// import styles from './styles';

// const PassCode = () => {

//   const [code1, setCode1] = useState('');
//   const [code2, setCode2] = useState('');
//   const [code3, setCode3] = useState('');
//   const [code4, setCode4] = useState('');

//   const handleVerify = () => {
//     console.log('Code:', code1 + code2 + code3 + code4);
//   };

//   return (
//     <View style={styles.container}>

//       <Text style={styles.title}>
//         Enter Pass Code
//       </Text>

//       <Text style={styles.text}>
//         Please enter the passcode we sent you.
//       </Text>

//       <View style={styles.codeContainer}>

//         <InputField
//           value={code1}
//           onChangeText={setCode1}
//           keyboardType="numeric"
//           customStyle={styles.codeInput}
//         />

//         <Text style={styles.dash}>-</Text>

//         <InputField
//           value={code2}
//           onChangeText={setCode2}
//           keyboardType="numeric"
//           customStyle={styles.codeInput}
//         />

//         <Text style={styles.dash}>-</Text>

//         <InputField
//           value={code3}
//           onChangeText={setCode3}
//           keyboardType="numeric"
//           customStyle={styles.codeInput}
//         />

//         <Text style={styles.dash}>-</Text>

//         <InputField
//           value={code4}
//           onChangeText={setCode4}
//           keyboardType="numeric"
//           customStyle={styles.codeInput}
//         />

//       </View>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={handleVerify}
//       >
//         <Text style={styles.buttonText}>
//           Verify Email
//         </Text>
//       </TouchableOpacity>

//     </View>
//   );
// };

// export default PassCode;


// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// import {
//   CodeField,
//   Cursor,
//   useBlurOnFulfill,
//   useClearByFocusCell,
// } from 'react-native-confirmation-code-field';

// import styles from './styles';

// const PassCode = ({navigation}) => {

//   const [code, setCode] = useState('');

//   const CELL_COUNT = 4;

//   const ref = useBlurOnFulfill({
//     value: code,
//     cellCount: CELL_COUNT,
//   });

//   const [props, getCellOnLayoutHandler] = useClearByFocusCell({
//     value: code,
//     setValue: setCode,
//   });

//   const handleVerify = () => {
//     console.log('Code:', code);
//     navigation.navigate('NewPassword')
//   };

//   return (
//     <View style={styles.container}>
   
//    <View style={styles.logo}>
//         <Text style={styles.logoText}>
//           Ride-Share
//         </Text>
//       </View>

//       <Text style={styles.title}>
//         Enter Pass Code
//       </Text>

//       <Text style={styles.text}>
//         Please enter the passcode we sent you.
//       </Text>

//       <CodeField
//         ref={ref}
//         {...props}
//         value={code}
//         onChangeText={setCode}
//         cellCount={CELL_COUNT}
//         keyboardType="number-pad"
//         textContentType="oneTimeCode"
//         renderCell={({ index, symbol, isFocused }) => (
//           <View
//             key={index}
//             style={styles.codeInput}
//             onLayout={getCellOnLayoutHandler(index)}
//           >
//             <Text style={styles.codeText}>
//               {symbol || (isFocused ? <Cursor /> : null)}
//             </Text>
//           </View>
//         )}
//       />

//       <TouchableOpacity
//         style={styles.button}
//         onPress={handleVerify}
//       >
//         <Text style={styles.buttonText}>
//           Verify Email
//         </Text>
//       </TouchableOpacity>

//     </View>
//   );
// };

// export default PassCode;

// import React, { useState } from 'react';

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Alert,
//   ActivityIndicator,
// } from 'react-native';

// import {
//   CodeField,
//   Cursor,
//   useBlurOnFulfill,
//   useClearByFocusCell,
// } from 'react-native-confirmation-code-field';

// import axios from 'axios';

// import styles from './styles';

// const PassCode = ({ navigation, route }) => {

//   const [code, setCode] = useState('');
//   const [loading, setLoading] = useState(false);

//   const CELL_COUNT = 4;

//   const { email, flow } = route.params;

//   const ref = useBlurOnFulfill({
//     value: code,
//     cellCount: CELL_COUNT,
//   });

//   const [props, getCellOnLayoutHandler] =
//     useClearByFocusCell({
//       value: code,
//       setValue: setCode,
//     });

//   const handleVerify = async () => {

//     if (code.length !== CELL_COUNT) {
//       Alert.alert('Error', 'Please enter complete OTP');
//       return;
//     }

//     try {

//       setLoading(true);

//       const response = await axios.post(
//         'YOUR_VERIFY_OTP_API_URL',
//         {
//           email: email,
//           otp: code,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       console.log('OTP Response:', response.data);

//       if (flow === 'register') {

//         Alert.alert(
//           'Success',
//           'Email verified successfully!',
//           [
//             {
//               text: 'OK',
//               onPress: () =>
//                 navigation.navigate('LoginScreen'),
//             },
//           ]
//         );

//       } else if (flow === 'forgot') {

//         navigation.navigate('NewPassword', {
//           email: email,
//           otp: code,
//         });

//       }

//     } catch (error) {

//       console.log(
//         'OTP Error:',
//         error.response?.data || error.message
//       );

//       Alert.alert(
//         'Verification Failed',
//         error.response?.data?.message ||
//           'Invalid OTP. Please try again.'
//       );

//     } finally {
//       setLoading(false);
//     }
//   };

//   return (

//     <View style={styles.container}>

//       <View style={styles.logo}>
//         <Text style={styles.logoText}>
//           Ride-Share
//         </Text>
//       </View>

//       <Text style={styles.title}>
//         Enter Pass Code
//       </Text>

//       <Text style={styles.text}>
//         Please enter the code sent to {email}
//       </Text>

//       <CodeField
//         ref={ref}
//         {...props}
//         value={code}
//         onChangeText={setCode}
//         cellCount={CELL_COUNT}
//         keyboardType="number-pad"
//         textContentType="oneTimeCode"
//         renderCell={({ index, symbol, isFocused }) => (

//           <View
//             key={index}
//             style={styles.codeInput}
//             onLayout={getCellOnLayoutHandler(index)}
//           >

//             <Text style={styles.codeText}>
//               {symbol || (isFocused ? <Cursor /> : null)}
//             </Text>

//           </View>

//         )}
//       />

//       <TouchableOpacity
//         style={styles.button}
//         onPress={handleVerify}
//         disabled={loading}
//       >

//         {loading ? (
//           <ActivityIndicator color="#FFFFFF" />
//         ) : (
//           <Text style={styles.buttonText}>
//             Verify Email
//           </Text>
//         )}

//       </TouchableOpacity>

//     </View>

//   );
// };

// export default PassCode;


// import React, { useState } from 'react';

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Alert,
//   ActivityIndicator,
// } from 'react-native';

// import {
//   CodeField,
//   Cursor,
//   useBlurOnFulfill,
//   useClearByFocusCell,
// } from 'react-native-confirmation-code-field';

// import axios from 'axios';

// import styles from './styles';

// const PassCode = ({ navigation, route }) => {

//   const [code, setCode] = useState('');
//   const [loading, setLoading] = useState(false);

//   const CELL_COUNT = 4;

//   const { email, flow } = route.params;

//   const ref = useBlurOnFulfill({
//     value: code,
//     cellCount: CELL_COUNT,
//   });

//   const [props, getCellOnLayoutHandler] =
//     useClearByFocusCell({
//       value: code,
//       setValue: setCode,
//     });

//   const handleVerify = async () => {

//     if (code.length !== CELL_COUNT) {
//       Alert.alert('Error', 'Please enter complete OTP');
//       return;
//     }

//     try {

//       setLoading(true);

//       console.log('Email:', email);
//       console.log('Entered OTP:', code);
//       console.log('Flow:', flow);

//       // IMPORTANT:
//       // Replace this with your actual OTP verification endpoint.
//       const response = await axios.post(
//         'YOUR_VERIFY_OTP_API_URL',
//         {
//           email: email.trim(),
//           otp: code.trim(),
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       console.log('OTP Response:', response.data);

//       if (flow === 'register') {

//         Alert.alert(
//           'Success',
//           'Email verified successfully!',
//           [
//             {
//               text: 'OK',
//               onPress: () => {
//                 navigation.navigate('LoginScreen');
//               },
//             },
//           ]
//         );

//       } else if (flow === 'forgot') {

//         navigation.navigate('NewPassword', {
//           email: email,
//           otp: code,
//         });

//       }

//     } catch (error) {

//       console.log('OTP Status:', error.response?.status);

//       console.log(
//         'OTP Error:',
//         error.response?.data || error.message
//       );

//       Alert.alert(
//         'Verification Failed',
//         error.response?.data?.message ||
//           'OTP verification failed. Please check your code and try again.'
//       );

//     } finally {

//       setLoading(false);

//     }
//   };

//   return (

//     <View style={styles.container}>

//       <View style={styles.logo}>
//         <Text style={styles.logoText}>
//           Ride-Share
//         </Text>
//       </View>

//       <Text style={styles.title}>
//         Enter Pass Code
//       </Text>

//       <Text style={styles.text}>
//         Please enter the code sent to {email}
//       </Text>

//       <CodeField
//         ref={ref}
//         {...props}
//         value={code}
//         onChangeText={setCode}
//         cellCount={CELL_COUNT}
//         keyboardType="number-pad"
//         textContentType="oneTimeCode"
//         renderCell={({ index, symbol, isFocused }) => (

//           <View
//             key={index}
//             style={styles.codeInput}
//             onLayout={getCellOnLayoutHandler(index)}
//           >

//             <Text style={styles.codeText}>
//               {symbol || (isFocused ? <Cursor /> : null)}
//             </Text>

//           </View>

//         )}
//       />

//       <TouchableOpacity
//         style={styles.button}
//         onPress={handleVerify}
//         disabled={loading}
//       >

//         {loading ? (
//           <ActivityIndicator color="#FFFFFF" />
//         ) : (
//           <Text style={styles.buttonText}>
//             Verify Email
//           </Text>
//         )}

//       </TouchableOpacity>

//     </View>

//   );
// };

// export default PassCode;



// import React, { useState } from 'react';

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Alert,
//   ActivityIndicator,
// } from 'react-native';

// import {
//   CodeField,
//   Cursor,
//   useBlurOnFulfill,
//   useClearByFocusCell,
// } from 'react-native-confirmation-code-field';

// import axios from 'axios';

// import styles from './styles';

// const PassCode = ({ navigation, route }) => {

//   const [code, setCode] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Change to 6 if backend sends 6-digit OTP
//   const CELL_COUNT = 4;

//   // Receive email and token from RegisterScreen
//   const { email, token, flow } = route.params;

//   const ref = useBlurOnFulfill({
//     value: code,
//     cellCount: CELL_COUNT,
//   });

//   const [props, getCellOnLayoutHandler] =
//     useClearByFocusCell({
//       value: code,
//       setValue: setCode,
//     });

//   const handleVerify = async () => {

//     if (code.length !== CELL_COUNT) {
//       Alert.alert(
//         'Error',
//         'Please enter complete OTP'
//       );
//       return;
//     }

//     if (!token) {
//       Alert.alert(
//         'Error',
//         'Authentication token is missing'
//       );
//       return;
//     }

//     try {

//       setLoading(true);

//       const response = await axios.post(

//         // Replace with actual backend OTP verification endpoint
//         'YOUR_ACTUAL_OTP_VERIFY_API_URL',

//         {
//           email: email.trim(),
//           otp: code.trim(),
//         },

//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         }

//       );

//       console.log('OTP Response:', response.data);

//       if (response.data.success === true) {

//         if (flow === 'register') {

//           Alert.alert(
//             'Success',
//             'Email verified successfully!',
//             [
//               {
//                 text: 'OK',
//                 onPress: () => {
//                   navigation.navigate('LoginScreen');
//                 },
//               },
//             ]
//           );

//         } else if (flow === 'forgot') {

//           navigation.navigate('NewPassword', {
//             email: email,
//             otp: code,
//             token: token,
//           });

//         }

//       } else {

//         Alert.alert(
//           'Verification Failed',
//           response.data.message || 'Invalid OTP'
//         );

//       }

//     } catch (error) {

//       console.log(
//         'OTP Status:',
//         error.response?.status
//       );

//       console.log(
//         'OTP Error:',
//         error.response?.data || error.message
//       );

//       Alert.alert(
//         'Verification Failed',
//         error.response?.data?.message ||
//         'OTP verification failed. Please try again.'
//       );

//     } finally {

//       setLoading(false);

//     }
//   };

//   return (

//     <View style={styles.container}>

//       <View style={styles.logo}>
//         <Text style={styles.logoText}>
//           Ride-Share
//         </Text>
//       </View>

//       <Text style={styles.title}>
//         Enter Pass Code
//       </Text>

//       <Text style={styles.text}>
//         Please enter the code sent to {email}
//       </Text>

//       <CodeField
//         ref={ref}
//         {...props}
//         value={code}
//         onChangeText={setCode}
//         cellCount={CELL_COUNT}
//         keyboardType="number-pad"
//         textContentType="oneTimeCode"

//         renderCell={({ index, symbol, isFocused }) => (

//           <View
//             key={index}
//             style={styles.codeInput}
//             onLayout={getCellOnLayoutHandler(index)}
//           >

//             <Text style={styles.codeText}>
//               {symbol || (
//                 isFocused ? <Cursor /> : null
//               )}
//             </Text>

//           </View>

//         )}
//       />

//       <TouchableOpacity
//         style={styles.button}
//         onPress={handleVerify}
//         disabled={loading}
//       >

//         {loading ? (

//           <ActivityIndicator color="#FFFFFF" />

//         ) : (

//           <Text style={styles.buttonText}>
//             Verify Email
//           </Text>

//         )}

//       </TouchableOpacity>

//     </View>
//   );
// };

// export default PassCode;



import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import axios from 'axios';

import styles from './styles';

const PassCode = ({ navigation, route }) => {

  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  // Backend ke OTP digits ke mutabiq 4 ya 6 rakhein
  const CELL_COUNT = 4;

  // RegisterScreen se email, token aur flow receive karein
  const { email, token, flow } = route.params || {};

  const ref = useBlurOnFulfill({
    value: code,
    cellCount: CELL_COUNT,
  });

  const [props, getCellOnLayoutHandler] =
    useClearByFocusCell({
      value: code,
      setValue: setCode,
    });

  const handleVerify = async () => {

    if (code.length !== CELL_COUNT) {
      Alert.alert(
        'Error',
        'Please enter complete OTP'
      );
      return;
    }

    // Check token
    if (!token) {
      Alert.alert(
        'Error',
        'Authentication token is missing'
      );
      return;
    }

    // Check email
    if (!email) {
      Alert.alert(
        'Error',
        'Email address is missing'
      );
      return;
    }

    try {

      setLoading(true);

      const response = await axios.post(

        'https://xhcqhdxq-8005.inc1.devtunnels.ms/verrifyOTP',

        // Request body
        {
          email: email.trim(),
          otp: code.trim(),
        },

        // Headers
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }

      );

      console.log('OTP Response:', response.data);

      if (response.data.success === true) {

        if (flow === 'register') {

          Alert.alert(
            'Success',
            'Email verified successfully!',
            [
              {
                text: 'OK',
                onPress: () => {
                  navigation.navigate('LoginScreen');
                },
              },
            ]
          );

        } else if (flow === 'forgot') {

          navigation.navigate('NewPassword', {
            email: email,
            otp: code,
            token: token,
          });

        } else {

          Alert.alert(
            'Success',
            'OTP verified successfully!'
          );

        }

      } else {

        Alert.alert(
          'Verification Failed',
          response.data.message || 'Invalid OTP'
        );

      }

    } catch (error) {

      console.log(
        'OTP Status:',
        error.response?.status
      );

      console.log(
        'OTP Error:',
        error.response?.data || error.message
      );

      Alert.alert(
        'Verification Failed',
        error.response?.data?.message ||
        'OTP verification failed. Please try again.'
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <View style={styles.container}>

      <View style={styles.logo}>
        <Text style={styles.logoText}>
          Ride-Share
        </Text>
      </View>

      <Text style={styles.title}>
        Enter Pass Code
      </Text>

      <Text style={styles.text}>
        Please enter the code sent to {email}
      </Text>

      <CodeField
        ref={ref}
        {...props}
        value={code}
        onChangeText={setCode}
        cellCount={CELL_COUNT}
        keyboardType="number-pad"
        textContentType="oneTimeCode"

        renderCell={({ index, symbol, isFocused }) => (

          <View
            key={index}
            style={styles.codeInput}
            onLayout={getCellOnLayoutHandler(index)}
          >

            <Text style={styles.codeText}>
              {symbol || (
                isFocused ? <Cursor /> : null
              )}
            </Text>

          </View>

        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleVerify}
        disabled={loading}
      >

        {loading ? (

          <ActivityIndicator color="#FFFFFF" />

        ) : (

          <Text style={styles.buttonText}>
            Verify Email
          </Text>

        )}

      </TouchableOpacity>

    </View>
  );
};

export default PassCode;
