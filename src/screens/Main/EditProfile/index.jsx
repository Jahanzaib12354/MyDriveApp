// import React, { useState } from 'react';

// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   Alert,
// } from 'react-native';

// import InputField from '../../../components/InputField';
// import { CheckCircle2 } from 'lucide-react-native';

// import styles from './styles'

// const EditProfile = ({ navigation }) => {
//   const [fullName, setFullName] = useState('Anastasia Sya');
//   const [dateOfBirth, setDateOfBirth] = useState('15/06/1998');
//   const [mobileNumber, setMobileNumber] = useState('+1 234 567 890');
//   const [email, setEmail] = useState('anastasia@gmail.com');
//   const [about, setAbout] = useState(
//     'I love travelling and meeting new people.'
//   );

//   const handleUpdate = () => {
//     Alert.alert(
//       'Profile Updated',
//       'Your profile details have been updated.',
//       [
//         {
//           text: 'OK',
//           onPress: () => navigation.goBack(),
//         },
//       ]
//     );
//   };

//   return (
//     <ScrollView
//       style={styles.container}
//       contentContainerStyle={styles.content}
//       showsVerticalScrollIndicator={false}
     
//     >
//       {/* Heading */}
//       <Text style={styles.heading}>
//         Edit Profile
//       </Text>

//       {/* Avatar */}
//       <View style={styles.avatarSection}>
//         <Image
//           source={require('../../../assets/img3.png')}
//           style={styles.avatar}
//           resizeMode="cover"
//         />

//         <TouchableOpacity
//           activeOpacity={0.7}
//           onPress={() =>
//             Alert.alert(
//               'Change Avatar',
//               'Connect an image picker to select a new photo.'
//             )
//           }
//         >
//           <Text style={styles.changeAvatar}>
//             Change Avatar
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {/* Full Name */}
//       <Text style={styles.label}>
//         Full Name
//       </Text>

//       <InputField
//         style={styles.input}
//         value={fullName}
//         onChangeText={setFullName}
//         placeholder="Enter your full name"
//         placeholderTextColor="#999999"
//       />

//       {/* Date of Birth */}
//       <Text style={styles.label}>
//         Date of Birth
//       </Text>

//       <InputField
//         style={styles.input}
//         value={dateOfBirth}
//         onChangeText={setDateOfBirth}
//         placeholder="DD/MM/YYYY"
//         placeholderTextColor="#999999"
//       />

//       {/* Mobile Number */}
//       <Text style={styles.label}>
//         Mobile Number
//       </Text>

//       <InputField
//         style={styles.input}
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//         placeholder="Enter mobile number"
//         placeholderTextColor="#999999"
//         keyboardType="phone-pad"
//       />

//       {/* Email */}
//       <Text style={styles.label}>
//         Email
//       </Text>

//       <InputField
//         style={styles.input}
//         value={email}
//         onChangeText={setEmail}
//         placeholder="Enter email address"
//         placeholderTextColor="#999999"
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />

//       {/* About */}
//       <Text style={styles.label}>
//         About
//       </Text>

//       <InputField
//         style={styles.aboutInput}
//         value={about}
//         onChangeText={setAbout}
//         placeholder="Tell us about yourself"
//         placeholderTextColor="#999999"
//         multiline
//         textAlignVertical="top"
//       />

//       {/* Personal ID */}
//       <View style={styles.personalIdRow}>
//         <Text style={styles.personalIdText}>
//           Personal ID
//         </Text>

//         <View style={styles.verified}>
//           <CheckCircle2
//             size={23}
//             color="#1683FF"
//             fill="#1683FF"
//             stroke="#FFFFFF"
//           />

//           <Text style={styles.verifiedText}>
//             Verified
//           </Text>
//         </View>
//       </View>

//       {/* Update Button */}
//       <TouchableOpacity
//         style={styles.updateButton}
//         activeOpacity={0.8}
//         onPress={handleUpdate}
//       >
//         <Text style={styles.updateButtonText}>
//           Update
//         </Text>
//       </TouchableOpacity>

//     </ScrollView>
//   );
// };

// export default EditProfile;




import React, { useState } from 'react';

import {View,Text,Image,TouchableOpacity,ScrollView,Alert,KeyboardAvoidingView,Platform} from 'react-native';

import {launchCamera,launchImageLibrary} from 'react-native-image-picker';

import InputField from '../../../components/InputField';
import { CheckCircle2 } from 'lucide-react-native';

import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';

const EditProfile = ({ navigation }) => {
  const [fullName, setFullName] = useState('Anastasia Sya');
  const [dateOfBirth, setDateOfBirth] = useState('15/06/1998');
  const [showCalendar, setShowCalendar] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('+1 234 567 890');
  const [email, setEmail] = useState('anastasia@gmail.com');


  const [about, setAbout] = useState(
    'I love travelling and meeting new people.'
  );

  // Avatar image state
  const [avatar, setAvatar] = useState(
    require('../../../assets/img3.png')
  );

  // Open Camera
  const openCamera = async () => {
    try {
      const result = await launchCamera({
        mediaType: 'photo',
        cameraType: 'front',
        saveToPhotos: true,
      });

      if (result.didCancel) {
        return;
      }

      if (result.errorCode) {
        Alert.alert(
          'Camera Error',
          result.errorMessage || 'Unable to open camera.'
        );
        return;
      }

      if (result.assets && result.assets.length > 0) {
        const imageUri = result.assets[0].uri;

        if (imageUri) {
          setAvatar({ uri: imageUri });
        }
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong with the camera.');
    }
  };

  // Open Gallery
  const openGallery = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 1,
      });

      if (result.didCancel) {
        return;
      }

      if (result.errorCode) {
        Alert.alert(
          'Gallery Error',
          result.errorMessage || 'Unable to open gallery.'
        );
        return;
      }

      if (result.assets && result.assets.length > 0) {
        const imageUri = result.assets[0].uri;

        if (imageUri) {
          setAvatar({ uri: imageUri });
        }
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong with the gallery.');
    }
  };

  // Choose Camera or Gallery
  const handleChangeAvatar = () => {
    Alert.alert(
      'Change Avatar',
      'Choose an option',
      [
        {
          text: 'Camera',
          onPress: openCamera,
        },
        {
          text: 'Gallery',
          onPress: openGallery,
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ]
    );
  };

  // Update Profile
  const handleUpdate = () => {
    Alert.alert(
      'Profile Updated',
      'Your profile details have been updated.',
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ]
    );
  };

  return (

    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  >
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Heading */}
      <Text style={styles.heading}>
        Edit Profile
      </Text>

      {/* Avatar */}
      <View style={styles.avatarSection}>
        <Image
          source={avatar}
          style={styles.avatar}
          resizeMode="cover"
        />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleChangeAvatar}
        >
          <Text style={styles.changeAvatar}>
            Change Avatar
          </Text>
        </TouchableOpacity>
      </View>

      {/* Full Name */}
      <Text style={styles.label}>
        Full Name
      </Text>

      <InputField
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        placeholder="Enter your full name"
        placeholderTextColor="#999999"
      />

      {/* Date of Birth */}
      {/* <Text style={styles.label}>
        Date of Birth
      </Text>

      <InputField
        style={styles.input}
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        placeholder="DD/MM/YYYY"
        placeholderTextColor="#999999"
      /> */}
      <Text style={styles.label}>
  Date of Birth
</Text>

<TouchableOpacity
  onPress={() => setShowCalendar(true)}
  activeOpacity={0.7}
>
  <View pointerEvents="none">
    <InputField
      style={styles.input}
      value={dateOfBirth}
      placeholder="DD/MM/YYYY"
      placeholderTextColor="#999999"
      editable={false}
    />
  </View>
</TouchableOpacity>

{showCalendar && (
  <DateTimePicker
    value={new Date()}
    mode="date"
    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
    maximumDate={new Date()}
    onChange={(event, selectedDate) => {
      setShowCalendar(false);

      if (selectedDate) {
        const day = String(selectedDate.getDate()).padStart(2, '0');
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const year = selectedDate.getFullYear();

        setDateOfBirth(`${day}/${month}/${year}`);
      }
    }}
  />
)}

      {/* Mobile Number */}
      <Text style={styles.label}>
        Mobile Number
      </Text>

      <InputField
        style={styles.input}
        value={mobileNumber}
        onChangeText={setMobileNumber}
        placeholder="Enter mobile number"
        placeholderTextColor="#999999"
        keyboardType="phone-pad"
      />

      {/* Email */}
      <Text style={styles.label}>
        Email
      </Text>

      <InputField
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email address"
        placeholderTextColor="#999999"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* About */}
      <Text style={styles.label}>
        About
      </Text>

      <InputField
        style={styles.aboutInput}
        value={about}
        onChangeText={setAbout}
        placeholder="Tell us about yourself"
        placeholderTextColor="#999999"
        multiline
        textAlignVertical="top"
      />

      {/* Personal ID */}
      <View style={styles.personalIdRow}>
        <Text style={styles.personalIdText}>
          Personal ID
        </Text>

        <View style={styles.verified}>
          <CheckCircle2
            size={23}
            color="#1683FF"
            fill="#1683FF"
            stroke="#FFFFFF"
          />

          <Text style={styles.verifiedText}>
            Verified
          </Text>
        </View>
      </View>

      {/* Update Button */}
      <TouchableOpacity
        style={styles.updateButton}
        activeOpacity={0.8}
        onPress={handleUpdate}
      >
        <Text style={styles.updateButtonText}>
          Update
        </Text>
      </TouchableOpacity>

    </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;
