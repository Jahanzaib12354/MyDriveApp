// // import React from 'react';
// // import { View, Text,  TouchableOpacity, ScrollView } from 'react-native';
// // import styles from './styles';
// // import InputField from '../../../components/InputField';

// // const OfferRideScreen = ({navigation}) => {
// //   return (
// //     <ScrollView style={styles.container}>

// //       {/* Heading */}
// //       <Text style={styles.heading}>Offer a Ride</Text>

// //       <Text style={styles.subHeading}>
// //         Fill in the details for your upcoming trip
// //       </Text>

// //       {/* Route */}
// //       <View style={styles.section}>
// //         <Text style={styles.sectionTitle}>📍 Route</Text>

// //         <Text style={styles.label}>Origin</Text>
// //         <InputField
// //           customStyle={styles.input}
// //           placeholder="Downtown Plaza"
// //         />

// //         <Text style={styles.label}>Destination</Text>
// //         <InputField
// //           style={styles.input}
// //           placeholder="Tech Park"
// //         />
// //       </View>

// //       {/* Schedule */}
// //       <View style={styles.section}>
// //         <Text style={styles.sectionTitle}>📅 Schedule</Text>

// //         <View style={styles.row}>

// //           <View style={styles.halfBox}>
// //             <Text style={styles.label}>Date</Text>
// //             <InputField
// //               style={styles.input}
// //               placeholder="Select Date"
// //             />
// //           </View>

// //           <View style={styles.halfBox}>
// //             <Text style={styles.label}>Time</Text>
// //             <InputField
// //               style={styles.input}
// //               placeholder="Select Time"
// //             />
// //           </View>

// //         </View>
// //       </View>

// //       {/* Available Seats */}
// //       <View style={styles.section}>
// //         <Text style={styles.sectionTitle}>👥 Available Seats</Text>

// //         <InputField
// //           style={styles.input}
// //           placeholder="3"
// //           keyboardType="numeric"
// //         />
// //       </View>

// //       {/* Car Information */}
// //       <View style={styles.section}>
// //         <Text style={styles.sectionTitle}>🚗 Car Information</Text>

// //         <View style={styles.row}>

// //           <View style={styles.halfBox}>
// //             <Text style={styles.label}>Make</Text>
// //             <InputField
// //               style={styles.input}
// //               placeholder="Toyota Corolla"
// //             />
// //           </View>

// //           <View style={styles.halfBox}>
// //             <Text style={styles.label}>Model</Text>
// //             <InputField
// //               style={styles.input}
// //               placeholder="Cramre"
// //             />
// //           </View>
// //         </View>

// //         <View style={styles.row}>
// //        <View style={styles.halfBox}>
// //         <Text style={styles.label}>Color</Text>
// //         <InputField
// //           style={styles.input}
// //           placeholder="White"
// //         />
// //         </View>

// //      <View style={styles.halfBox}>
// //         <Text style={styles.label}>License Plate</Text>
// //         <InputField
// //           style={styles.input}
// //           placeholder="ABC-123"
// //         />
// //         </View>
// //       </View>
// //       </View>
     

// //       {/* Button */}
// //       <TouchableOpacity style={styles.postButton}
// //       onPress={()=>navigation.navigate('FindRiderScreen')}
// //       >
// //         <Text style={styles.buttonText}>Post Ride</Text>
// //       </TouchableOpacity>

// //     </ScrollView>
// //   );
// // };

// // export default OfferRideScreen;


// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   KeyboardAvoidingView

// } from 'react-native';

// import styles from './styles';
// import InputField from '../../../components/InputField';
// import DateTimePicker from '@react-native-community/datetimepicker';
// const OfferRideScreen = ({ navigation }) => {
//   return (

//     <KeyboardAvoidingView
//   style={{ flex: 1 }}
//   behavior="height"
// >
//     <ScrollView
//       style={styles.container}
//       contentContainerStyle={styles.scrollContent}
//       showsVerticalScrollIndicator={true}
//       keyboardShouldPersistTaps="handled"
//     >

//       {/* Heading */}
//       <Text style={styles.heading}>
//         Offer a Ride
//       </Text>

//       <Text style={styles.subHeading}>
//         Fill in the details for your upcoming trip
//       </Text>

//       {/* Route */}
//       <View style={styles.section}>

//         <Text style={styles.sectionTitle}>
//           📍 Route
//         </Text>

//         <Text style={styles.label}>
//           Origin
//         </Text>

//         <InputField
//           customStyle={styles.input}
//           placeholder="Downtown Plaza"
//         />

//         <Text style={styles.label}>
//           Destination
//         </Text>

//         <InputField
//           customStyle={styles.input}
//           placeholder="Tech Park"
//         />

//       </View>

//       {/* Schedule */}
//       <View style={styles.section}>

//         <Text style={styles.sectionTitle}>
//           📅 Schedule
//         </Text>

//         <View style={styles.row}>

//           <View style={styles.halfBox}>

//             <Text style={styles.label}>
//               Date
//             </Text>

//             <InputField
//               customStyle={styles.input}
//               placeholder="Select Date"
//             />

//           </View>

//           <View style={styles.halfBox}>

//             <Text style={styles.label}>
//               Time
//             </Text>

//             <InputField
//               customStyle={styles.input}
//               placeholder="Select Time"
//             />

//           </View>

//         </View>

//       </View>

//       {/* Available Seats */}
//       <View style={styles.section}>

//         <Text style={styles.sectionTitle}>
//           👥 Available Seats
//         </Text>

//         <InputField
//           customStyle={styles.input}
//           placeholder="3"
//           keyboardType="numeric"
//         />

//       </View>

//       {/* Car Information */}
//       <View style={styles.section}>

//         <Text style={styles.sectionTitle}>
//           🚗 Car Information
//         </Text>

//         <View style={styles.row}>

//           <View style={styles.halfBox}>

//             <Text style={styles.label}>
//               Make
//             </Text>

//             <InputField
//               customStyle={styles.input}
//               placeholder="Toyota Corolla"
//             />

//           </View>

//           <View style={styles.halfBox}>

//             <Text style={styles.label}>
//               Model
//             </Text>

//             <InputField
//               customStyle={styles.input}
//               placeholder="Camry"
//             />

//           </View>

//         </View>

//         <View style={styles.row}>

//           <View style={styles.halfBox}>

//             <Text style={styles.label}>
//               Color
//             </Text>

//             <InputField
//               customStyle={styles.input}
//               placeholder="White"
//             />

//           </View>

//           <View style={styles.halfBox}>

//             <Text style={styles.label}>
//               License Plate
//             </Text>

//             <InputField
//               customStyle={styles.input}
//               placeholder="ABC-123"
//             />

//           </View>

//         </View>

//       </View>

//       {/* Post Ride Button */}
//       <TouchableOpacity
//         style={styles.postButton}
//         onPress={() => navigation.navigate('FindRiderScreen')}
//         activeOpacity={0.8}
//       >
//         <Text style={styles.buttonText}>
//           Post Ride
//         </Text>
//       </TouchableOpacity>

//     </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default OfferRideScreen;


import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import styles from './styles';
import InputField from '../../../components/InputField';
import DateTimePicker from '@react-native-community/datetimepicker';

const OfferRideScreen = ({ navigation }) => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  // Format selected date
  const formatDate = (selectedDate) => {
    const day = String(selectedDate.getDate()).padStart(2, '0');
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const year = selectedDate.getFullYear();

    return `${day}/${month}/${year}`;
  };

  // Handle date selection
  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);

    if (event.type === 'set' && selectedDate) {
      setDate(selectedDate);
    }
  };

  // Handle time selection
  const handleTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);

    if (event.type === 'set' && selectedTime) {
      setTime(selectedTime);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="height"
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps="handled"
      >
        {/* Heading */}
        <Text style={styles.heading}>
          Offer a Ride
        </Text>

        <Text style={styles.subHeading}>
          Fill in the details for your upcoming trip
        </Text>

        {/* Route */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            📍 Route
          </Text>

          <Text style={styles.label}>Origin</Text>
          <InputField
            customStyle={styles.input}
            placeholder="Downtown Plaza"
          />

          <Text style={styles.label}>Destination</Text>
          <InputField
            customStyle={styles.input}
            placeholder="Tech Park"
          />
        </View>

        {/* Schedule */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            📅 Schedule
          </Text>

          <View style={styles.row}>
            {/* Date */}
            <View style={styles.halfBox}>
              <Text style={styles.label}>
                Date
              </Text>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setShowDatePicker(true)}
              >
                <View pointerEvents="none">
                  <InputField
                    customStyle={styles.input}
                    placeholder="Select Date"
                    value={date ? formatDate(date) : ''}
                    editable={false}
                  />
                </View>
              </TouchableOpacity>
            </View>

            {/* Time */}
            <View style={styles.halfBox}>
              <Text style={styles.label}>
                Time
              </Text>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setShowTimePicker(true)}
              >
                <View pointerEvents="none">
                  <InputField
                    customStyle={styles.input}
                    placeholder="Select Time"
                    value={
                      time
                        ? time.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })
                        : ''
                    }
                    editable={false}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Available Seats */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            👥 Available Seats
          </Text>

          <InputField
            customStyle={styles.input}
            placeholder="3"
            keyboardType="numeric"
          />
        </View>

        {/* Car Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            🚗 Car Information
          </Text>

          <View style={styles.row}>
            <View style={styles.halfBox}>
              <Text style={styles.label}>Make</Text>
              <InputField
                customStyle={styles.input}
                placeholder="Toyota Corolla"
              />
            </View>

            <View style={styles.halfBox}>
              <Text style={styles.label}>Model</Text>
              <InputField
                customStyle={styles.input}
                placeholder="Camry"
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.halfBox}>
              <Text style={styles.label}>Color</Text>
              <InputField
                customStyle={styles.input}
                placeholder="White"
              />
            </View>

            <View style={styles.halfBox}>
              <Text style={styles.label}>License Plate</Text>
              <InputField
                customStyle={styles.input}
                placeholder="ABC-123"
              />
            </View>
          </View>
        </View>

        {/* Post Ride Button */}
        <TouchableOpacity
          style={styles.postButton}
          onPress={() => navigation.navigate('FindRiderScreen')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            Post Ride
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Calendar Picker */}
      {showDatePicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      {/* Clock Picker */}
      {showTimePicker && (
        <DateTimePicker
          value={time || new Date()}
          mode="time"
          display="default"
          onChange={handleTimeChange}
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default OfferRideScreen;
