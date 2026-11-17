
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  // Puri screen
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
   
   logo: {
  position: 'absolute',
  top: 260,
  alignSelf: 'center',
  backgroundColor: '#0983ef',
  paddingHorizontal: 25,
  paddingVertical: 7,
  borderRadius: 7,
},

  logoText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },


  // "New Password" heading
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#101B41',
    textAlign: 'center',
    marginBottom: 10,
  },

  // Neeche wala description
  text: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
  },

  // Password fields
 input: {
  width: '100%',
  height: 50,
  borderWidth: 1,
  borderColor: '#999',
  borderRadius: 7,
  paddingHorizontal: 15,
  marginBottom: 15,
  fontSize: 16,
  fontWeight: '500',
},

button: {
  width: '100%',
  height: 50,
  backgroundColor: 'black',
  borderRadius: 7,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 10,
},

  // Button ka text
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },

});

export default styles;

