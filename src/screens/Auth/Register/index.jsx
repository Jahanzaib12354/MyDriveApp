



// import React, { useState } from 'react';

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   ScrollView,
//   StatusBar,
// } from 'react-native';

// import InputField from '../../../components/InputField';
// import styles from './styles';

// const RegisterScreen = ({ navigation }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior="height"
//     >
//       <StatusBar
//         backgroundColor="#FFFFFF"
//         barStyle="dark-content"
//       />

//       <ScrollView
//         contentContainerStyle={styles.scrollContent}
//         keyboardShouldPersistTaps="handled"
//       >
//         <View style={styles.abc}>

//           {/* Logo */}
//           <View style={styles.logo}>
//             <Text style={styles.logoText}>
//               Ride-Share
//             </Text>
//           </View>

//           {/* Heading */}
//           <Text style={styles.def}>
//             Create an account
//           </Text>

//           {/* Name */}
//           <InputField
//             value={name}
//             onChangeText={setName}
//             placeholder="Name"
//           />

//           {/* Email */}
//           <InputField
//             value={email}
//             onChangeText={setEmail}
//             placeholder="Email Address"
//             keyboardType="email-address"
//           />

//           {/* Phone */}
//           <InputField
//             value={phone}
//             onChangeText={setPhone}
//             placeholder="Phone Number"
//             keyboardType="phone-pad"
//           />

//           {/* Password */}
//           <InputField
//             value={password}
//             onChangeText={setPassword}
//             placeholder="Password"
//             secureTextEntry
//           />

//           {/* Login Button */}
//           <TouchableOpacity
//             style={styles.loginButton}
//             onPress={() =>
//               navigation.navigate('LoginScreen')
//             }
//           >
//             <Text style={styles.loginButtonText}>
//               Login
//             </Text>
//           </TouchableOpacity>

//           {/* Or Login With */}
//           <Text style={styles.orText}>
//             Or Login With
//           </Text>

//           {/* Facebook Button */}
//           <TouchableOpacity
//             style={styles.facebookButton}
//             onPress={() => {}}
//           >
//             <Text style={styles.socialButtonText}>
//               ●  Continue with Facebook
//             </Text>
//           </TouchableOpacity>

//           {/* Google Button */}
//           <TouchableOpacity
//             style={styles.googleButton}
//             onPress={() => {}}
//           >
//             <Text style={styles.googleButtonText}>
//               G  Continue with Google
//             </Text>
//           </TouchableOpacity>

//           {/* Bottom Login Link */}
//           <View style={styles.bottomTextContainer}>
//             <Text style={styles.bottomText}>
//               Already have an account?{' '}
//             </Text>

//             <TouchableOpacity
//               onPress={() =>
//                 navigation.navigate('LoginScreen')
//               }
//             >
//               <Text style={styles.loginLink}>
//                 Login
//               </Text>
//             </TouchableOpacity>
//           </View>

//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default RegisterScreen;


// import React, { useState } from 'react';

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   ScrollView,
//   StatusBar,
//   Alert,
//   ActivityIndicator,
// } from 'react-native';

// import axios from 'axios';

// import InputField from '../../../components/InputField';
// import styles from './styles';

// const RegisterScreen = ({ navigation }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleRegister = async () => {
//     // Validation
//     if (!name || !email || !phone || !password) {
//       Alert.alert('Error', 'Please fill all fields');
//       return;
//     }

//     try {
//       setLoading(true);

//       // const response = await axios.post(
//       //   'YOUR_REGISTER_API_URL',
//       const response = await axios.post(
//       'https://xhcqhdxq-8005.inc1.devtunnels.ms/signup',
//         {
//           name: name.trim(),
//           email: email.trim(),
//           phone_number: phone.trim(),
//           password: password,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       console.log('Register Response:', response.data);

//       Alert.alert(
//         'Success',
//         'Account created successfully!',
//         [
//           {
//             text: 'OK',
//             onPress: () => navigation.navigate('LoginScreen'),
//           },
//         ]
//       );

//     } catch (error) {
//       console.log(
//         'Register Error:',
//         error.response?.data || error.message
//       );

//       Alert.alert(
//         'Registration Failed',
//           error.response?.data?.message ||
//           'Something went wrong. Please try again.'
//       );

//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior="height"
//     >
//       <StatusBar
//         backgroundColor="#FFFFFF"
//         barStyle="dark-content"
//       />

//       <ScrollView
//         contentContainerStyle={styles.scrollContent}
//         keyboardShouldPersistTaps="handled"
//       >
//         <View style={styles.abc}>

//           <View style={styles.logo}>
//             <Text style={styles.logoText}>
//               Ride-Share
//             </Text>
//           </View>

//           <Text style={styles.def}>
//             Create an account
//           </Text>

//           <InputField
//             value={name}
//             onChangeText={setName}
//             placeholder="Name"
//           />

//           <InputField
//             value={email}
//             onChangeText={setEmail}
//             placeholder="Email Address"
//             keyboardType="email-address"
//           />

//           <InputField
//             value={phone}
//             onChangeText={setPhone}
//             placeholder="Phone Number"
//             keyboardType="phone-pad"
//           />

//           <InputField
//             value={password}
//             onChangeText={setPassword}
//             placeholder="Password"
//             secureTextEntry
//           />

//           {/* Register Button */}
//           <TouchableOpacity
//             style={styles.loginButton}
//             onPress={handleRegister}
//             disabled={loading}
//           >
//             {loading ? (
//               <ActivityIndicator color="#FFFFFF" />
//             ) : (
//               <Text style={styles.loginButtonText}>
//                 Register
//               </Text>
//             )}
//           </TouchableOpacity>

//           <Text style={styles.orText}>
//             Or Login With
//           </Text>

//           <TouchableOpacity
//             style={styles.facebookButton}
//             onPress={() => {}}
//           >
//             <Text style={styles.socialButtonText}>
//               ● Continue with Facebook
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.googleButton}
//             onPress={() => {}}
//           >
//             <Text style={styles.googleButtonText}>
//               G Continue with Google
//             </Text>
//           </TouchableOpacity>

//           <View style={styles.bottomTextContainer}>
//             <Text style={styles.bottomText}>
//               Already have an account?{' '}
//             </Text>

//             <TouchableOpacity
//               onPress={() =>
//                 navigation.navigate('LoginScreen')
//               }
//             >
//               <Text style={styles.loginLink}>
//                 Login
//               </Text>
//             </TouchableOpacity>
//           </View>

//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default RegisterScreen;


// import React, { useState } from 'react';

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   ScrollView,
//   StatusBar,
//   Alert,
//   ActivityIndicator,
// } from 'react-native';

// import axios from 'axios';

// import InputField from '../../../components/InputField';
// import styles from './styles';

// const RegisterScreen = ({ navigation }) => {

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleRegister = async () => {

//     if (!name.trim() || !email.trim() || !phone.trim() || !password) {
//       Alert.alert('Error', 'Please fill all fields');
//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await axios.post(
//         'https://xhcqhdxq-8005.inc1.devtunnels.ms/signup',
//         {
//           name: name.trim(),
//           email: email.trim(),
//           phone_number: phone.trim(),
//           password: password,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       console.log('Register Response:', response.data);

//       navigation.navigate('PassCode', {
//         email: email.trim(),
//         flow: 'register',
//       });

//     } catch (error) {

//       console.log(
//         'Register Error:',
//         error.response?.data || error.message
//       );

//       Alert.alert(
//         'Registration Failed',
//         error.response?.data?.message ||
//           'Something went wrong. Please try again.'
//       );

//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior="height"
//     >

//       <StatusBar
//         backgroundColor="#FFFFFF"
//         barStyle="dark-content"
//       />

//       <ScrollView
//         contentContainerStyle={styles.scrollContent}
//         keyboardShouldPersistTaps="handled"
//       >

//         <View style={styles.abc}>

//           <View style={styles.logo}>
//             <Text style={styles.logoText}>
//               Ride-Share
//             </Text>
//           </View>

//           <Text style={styles.def}>
//             Create an account
//           </Text>

//           <InputField
//             value={name}
//             onChangeText={setName}
//             placeholder="Name"
//           />

//           <InputField
//             value={email}
//             onChangeText={setEmail}
//             placeholder="Email Address"
//             keyboardType="email-address"
//           />

//           <InputField
//             value={phone}
//             onChangeText={setPhone}
//             placeholder="Phone Number"
//             keyboardType="phone-pad"
//           />

//           <InputField
//             value={password}
//             onChangeText={setPassword}
//             placeholder="Password"
//             secureTextEntry
//           />

//           <TouchableOpacity
//             style={styles.loginButton}
//             onPress={handleRegister}
//             disabled={loading}
//           >

//             {loading ? (
//               <ActivityIndicator color="#FFFFFF" />
//             ) : (
//               <Text style={styles.loginButtonText}>
//                 Register
//               </Text>
//             )}

//           </TouchableOpacity>

//           <Text style={styles.orText}>
//             Or Login With
//           </Text>

//           <TouchableOpacity
//             style={styles.facebookButton}
//             onPress={() => {}}
//           >
//             <Text style={styles.socialButtonText}>
//               ● Continue with Facebook
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.googleButton}
//             onPress={() => {}}
//           >
//             <Text style={styles.googleButtonText}>
//               G Continue with Google
//             </Text>
//           </TouchableOpacity>

//           <View style={styles.bottomTextContainer}>

//             <Text style={styles.bottomText}>
//               Already have an account?{' '}
//             </Text>

//             <TouchableOpacity
//               onPress={() =>
//                 navigation.navigate('LoginScreen')
//               }
//             >
//               <Text style={styles.loginLink}>
//                 Login
//               </Text>
//             </TouchableOpacity>

//           </View>

//         </View>

//       </ScrollView>

//     </KeyboardAvoidingView>
//   );
// };

// export default RegisterScreen;





// import React, { useState } from 'react';

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   ScrollView,
//   StatusBar,
//   Alert,
//   ActivityIndicator,
// } from 'react-native';

// import axios from 'axios';

// import InputField from '../../../components/InputField';
// import styles from './styles';

// const RegisterScreen = ({ navigation }) => {

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleRegister = async () => {

//     if (
//       !name.trim() ||
//       !email.trim() ||
//       !phone.trim() ||
//       !password
//     ) {
//       Alert.alert('Error', 'Please fill all fields');
//       return;
//     }

//     try {

//       setLoading(true);

//       const response = await axios.post(
//         'https://xhcqhdxq-8005.inc1.devtunnels.ms/signup',
//         {
//           name: name.trim(),
//           email: email.trim(),
//           phone_number: phone.trim(),
//           password: password,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       console.log('Signup Response:', {
//         message: response.data.message,
//         success: response.data.success,
//         tokenReceived: !!response.data.token,
//       });

//       // Check signup success
//       if (response.data.success !== true) {
//         Alert.alert(
//           'Registration Failed',
//           response.data.message || 'Registration failed'
//         );
//         return;
//       }

//       // Get JWT token
//       const token = response.data.token;

//       if (!token) {
//         Alert.alert(
//           'Error',
//           'Signup successful but token was not received.'
//         );
//         return;
//       }

//       // Navigate to PassCode screen
//       navigation.navigate('PassCode', {
//         email: email.trim(),
//         token: token,
//         flow: 'register',
//       });

//     } catch (error) {

//       console.log(
//         'Register Status:',
//         error.response?.status
//       );

//       console.log(
//         'Register Error:',
//         error.response?.data || error.message
//       );

//       Alert.alert(
//         'Registration Failed',
//         error.response?.data?.message ||
//         'Something went wrong. Please try again.'
//       );

//     } finally {

//       setLoading(false);

//     }
//   };

//   return (

//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior="height"
//     >

//       <StatusBar
//         backgroundColor="#FFFFFF"
//         barStyle="dark-content"
//       />

//       <ScrollView
//         contentContainerStyle={styles.scrollContent}
//         keyboardShouldPersistTaps="handled"
//       >

//         <View style={styles.abc}>

//           <View style={styles.logo}>
//             <Text style={styles.logoText}>
//               Ride-Share
//             </Text>
//           </View>

//           <Text style={styles.def}>
//             Create an account
//           </Text>

//           <InputField
//             value={name}
//             onChangeText={setName}
//             placeholder="Name"
//           />

//           <InputField
//             value={email}
//             onChangeText={setEmail}
//             placeholder="Email Address"
//             keyboardType="email-address"
//           />

//           <InputField
//             value={phone}
//             onChangeText={setPhone}
//             placeholder="Phone Number"
//             keyboardType="phone-pad"
//           />

//           <InputField
//             value={password}
//             onChangeText={setPassword}
//             placeholder="Password"
//             secureTextEntry
//           />

//           <TouchableOpacity
//             style={styles.loginButton}
//             onPress={handleRegister}
//             disabled={loading}
//           >

//             {loading ? (

//               <ActivityIndicator color="#FFFFFF" />

//             ) : (

//               <Text style={styles.loginButtonText}>
//                 Register
//               </Text>

//             )}

//           </TouchableOpacity>

//           <Text style={styles.orText}>
//             Or Login With
//           </Text>

//           <TouchableOpacity
//             style={styles.facebookButton}
//             onPress={() => {}}
//           >
//             <Text style={styles.socialButtonText}>
//               ● Continue with Facebook
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.googleButton}
//             onPress={() => {}}
//           >
//             <Text style={styles.googleButtonText}>
//               G Continue with Google
//             </Text>
//           </TouchableOpacity>

//           <View style={styles.bottomTextContainer}>

//             <Text style={styles.bottomText}>
//               Already have an account?{' '}
//             </Text>

//             <TouchableOpacity
//               onPress={() => navigation.navigate('LoginScreen')}
//             >
//               <Text style={styles.loginLink}>
//                 Login
//               </Text>
//             </TouchableOpacity>

//           </View>

//         </View>

//       </ScrollView>

//     </KeyboardAvoidingView>
//   );
// };

// export default RegisterScreen;



import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  Alert,
  ActivityIndicator,
} from 'react-native';

import axios from 'axios';

import InputField from '../../../components/InputField';
import styles from './styles';

const RegisterScreen = ({ navigation }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {

    // Check empty fields
    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !password
    ) {
      Alert.alert(
        'Error',
        'Please fill all fields'
      );
      return;
    }

    try {

      setLoading(true);

      // Signup API request
      const response = await axios.post(

        'https://xhcqhdxq-8005.inc1.devtunnels.ms/signup',

        {
          name: name.trim(),
          email: email.trim(),
          phone_number: phone.trim(),
          password: password,
        },

        {
          headers: {
            'Content-Type': 'application/json',
          },
        }

      );

      // Check API response
      console.log('Signup Response:', {
        success: response.data.success,
        message: response.data.message,
        tokenReceived: !!response.data.token,
      });

      // Check signup success
      if (response.data.success !== true) {

        Alert.alert(
          'Registration Failed',
          response.data.message || 'Registration failed'
        );

        return;
      }

      // Receive JWT token from signup API
      const token = response.data.token;

      // Check token
      if (!token) {

        Alert.alert(
          'Registration Error',
          'Signup successful but token was not received.'
        );

        return;
      }

      // Navigate to PassCode screen
      // Send email, token and flow
      navigation.navigate('PassCode', {

        email: email.trim(),

        token: token,

        flow: 'register',

      });

    } catch (error) {

      console.log(
        'Register Status:',
        error.response?.status
      );

      console.log(
        'Register Error:',
        error.response?.data || error.message
      );

      Alert.alert(
        'Registration Failed',
        error.response?.data?.message ||
        'Something went wrong. Please try again.'
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="height"
    >

      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >

        <View style={styles.abc}>

          {/* Logo */}
          <View style={styles.logo}>

            <Text style={styles.logoText}>
              Ride-Share
            </Text>

          </View>

          {/* Heading */}
          <Text style={styles.def}>
            Create an account
          </Text>

          {/* Name */}
          <InputField
            value={name}
            onChangeText={setName}
            placeholder="Name"
          />

          {/* Email */}
          <InputField
            value={email}
            onChangeText={setEmail}
            placeholder="Email Address"
            keyboardType="email-address"
          />

          {/* Phone */}
          <InputField
            value={phone}
            onChangeText={setPhone}
            placeholder="Phone Number"
            keyboardType="phone-pad"
          />

          {/* Password */}
          <InputField
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
          />

          {/* Register Button */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleRegister}
            disabled={loading}
          >

            {loading ? (

              <ActivityIndicator color="#FFFFFF" />

            ) : (

              <Text style={styles.loginButtonText}>
                Register
              </Text>

            )}

          </TouchableOpacity>

          {/* Social Login */}
          <Text style={styles.orText}>
            Or Login With
          </Text>

          <TouchableOpacity
            style={styles.facebookButton}
            onPress={() => {}}
          >

            <Text style={styles.socialButtonText}>
              ● Continue with Facebook
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.googleButton}
            onPress={() => {}}
          >

            <Text style={styles.googleButtonText}>
              G Continue with Google
            </Text>

          </TouchableOpacity>

          {/* Login Link */}
          <View style={styles.bottomTextContainer}>

            <Text style={styles.bottomText}>
              Already have an account?{' '}
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}
            >

              <Text style={styles.loginLink}>
                Login
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </ScrollView>

    </KeyboardAvoidingView>

  );
};

export default RegisterScreen;
