// import React from 'react';
// import { TouchableOpacity, Text } from 'react-native';
// import styles from '../styles/styles';

// const StartButton = ({onPress}) => {

//   return (
//     <TouchableOpacity style={styles.button}
//     onPress={onPress}
//     >
//       <Text style={styles.buttonText}>Start</Text>
//     </TouchableOpacity>
//   );
// };

// export default StartButton;

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles';

const StartButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Start</Text>
    </TouchableOpacity>
  );
};

export default StartButton;