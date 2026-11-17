



// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// import InputField from '../../../components/InputField';
// import styles from './styles';

// const CodeCommunity = ({navigation}) => {

//   const [communityCode, setCommunityCode] = useState('');
//   const [selectedOption, setSelectedOption] = useState('Code');
 

//   return (
//     <View style={styles.container}>

//       <Text style={styles.title}>
//         Join a Community
//       </Text>

//       <Text style={styles.description}>
//         You need to be a part of a community to access rides.
//       </Text>

//       {/* Options */}
//       <View style={styles.options}>

//         <TouchableOpacity
//           style={styles.option}
//           onPress={() => setSelectedOption('Code')}
//         >
//           <Text style={styles.optionText}>
//             Code
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.option}
//           onPress={() => setSelectedOption('Browse')}
//         >
//           <Text style={styles.optionText}>
//             Browse
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.option}
//           onPress={() => setSelectedOption('Create')}
//         >
//           <Text style={styles.optionText}>
//             Create
//           </Text>
//         </TouchableOpacity>

//       </View>

//       {/* Code */}
//       {selectedOption === 'Code' && (
//         <View>

//           <Text style={styles.label}>
//             Community Code
//           </Text>

//           <InputField
//             value={communityCode}
//             onChangeText={setCommunityCode}
//             placeholder="Enter community code"
//             customStyle={styles.input}
//           />

//           <TouchableOpacity style={styles.button}
//           onPress={()=>navigation.navigate('AlexScreen')}
//           >
//             <Text style={styles.buttonText}>
//               Join Community
              
//             </Text>
//           </TouchableOpacity>
          

//         </View>
//       )}

//       {/*Browser*/}

//       {selectedOption === 'Browse' && (

//   <View>
     


//     <View style={styles.communityBox}>
//       <View>
//         <Text style={styles.communityName}>
//           Downtown
//         </Text>

//         <Text style={styles.members}>
//           4 members
//         </Text>
//       </View>

//       <TouchableOpacity style={styles.requestButton}>
//         <Text style={styles.requestText}>
//           Request
//         </Text>
//       </TouchableOpacity>
//     </View>


//     <View style={styles.communityBox}>
//       <View>
//         <Text style={styles.communityName}>
//           Area 23
//         </Text>

//         <Text style={styles.members}>
//           1 members
//         </Text>
//       </View>

//       <TouchableOpacity style={styles.requestButton}>
//         <Text style={styles.requestText}>
//           Request
//         </Text>
//       </TouchableOpacity>
//     </View>


//     <View style={styles.communityBox}>
//       <View>
//         <Text style={styles.communityName}>
//           Student Community
//         </Text>

//         <Text style={styles.members}>
//           10 members
//         </Text>
//       </View>

//       <TouchableOpacity style={styles.requestButton}>
//         <Text style={styles.requestText}>
//           Request
//         </Text>
//       </TouchableOpacity>
//     </View>

//   </View>

// )}

//       {/* Create */}
//       {selectedOption === 'Create' && (
//         <View>

//           <Text style={styles.label}>
//             Create Community
//           </Text>

//           <InputField
//             placeholder="Community Name"
//             customStyle={styles.input}
//           />

//           <InputField
//             placeholder="Community Code"
//             customStyle={styles.input}
//           />

//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>
//               Create Community
//             </Text>
//           </TouchableOpacity>

//         </View>
//       )}

//     </View>
//   );
// };

// export default CodeCommunity;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import InputField from '../../../components/InputField';
import styles from './styles';

const CodeCommunity = ({ navigation }) => {

  const [communityCode, setCommunityCode] = useState('');
  const [selectedOption, setSelectedOption] = useState('Code');

  return (
    <View style={styles.container}>
      
  <View style={styles.logo}>
        <Text style={styles.logoText}>
          Ride-Share
        </Text>
      </View>

      <Text style={styles.title}>
        Join a Community
      </Text>

      <Text style={styles.description}>
        You need to be a part of a community to access rides.
      </Text>

      <View style={styles.options}>

        <TouchableOpacity
          style={styles.option}
          onPress={() => setSelectedOption('Code')}
        >
          <Text style={styles.optionText}>
            Code
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => setSelectedOption('Browse')}
        >
          <Text style={styles.optionText}>
            Browse
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => setSelectedOption('Create')}
        >
          <Text style={styles.optionText}>
            Create
          </Text>
        </TouchableOpacity>

      </View>

      {selectedOption === 'Code' && (
        <View>

          <Text style={styles.label}>
            Community Code
          </Text>

          <InputField
            value={communityCode}
            onChangeText={setCommunityCode}
            placeholder="Enter community code"
            customStyle={styles.input}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Main')}
          >
            <Text style={styles.buttonText}>
              Join Community
            </Text>
          </TouchableOpacity>

        </View>
      )}

      {selectedOption === 'Browse' && (
        <View>

          <View style={styles.communityBox}>
            <View>
              <Text style={styles.communityName}>
                Downtown
              </Text>

              <Text style={styles.members}>
                4 members
              </Text>
            </View>

            <TouchableOpacity style={styles.requestButton}>
              <Text style={styles.requestText}>
                Request
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.communityBox}>
            <View>
              <Text style={styles.communityName}>
                Area 23
              </Text>

              <Text style={styles.members}>
                1 member
              </Text>
            </View>

            <TouchableOpacity style={styles.requestButton}>
              <Text style={styles.requestText}>
                Request
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.communityBox}>
            <View>
              <Text style={styles.communityName}>
                Student Community
              </Text>

              <Text style={styles.members}>
                10 members
              </Text>
            </View>

            <TouchableOpacity style={styles.requestButton}>
              <Text style={styles.requestText}>
                Request
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      )}

      {selectedOption === 'Create' && (
        <View>

          <Text style={styles.label}>
            Create Community
          </Text>

          <InputField
            placeholder="Community Name"
            customStyle={styles.input}
          />

          <InputField
            placeholder="Community Code"
            customStyle={styles.input}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Create Community
            </Text>
          </TouchableOpacity>

        </View>
      )}

    </View>
  );
};

export default CodeCommunity;