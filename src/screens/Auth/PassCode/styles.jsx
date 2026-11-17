// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },

//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#101B41',
//     marginBottom: 10,
//   },

//   text: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 25,
//   },

//   codeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },

//   codeInput: {
//     width: 52,
//     height: 52,
//     textAlign: 'center',
//     fontSize: 18,
//     padding: 0,
//   },

//   dash: {
//     fontSize: 18,
//     color: '#777',
//   },

//   button: {
//     height: 50,
//     backgroundColor: 'black',
//     borderRadius: 7,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },

//   buttonText: {
//     color: 'white',
//     fontSize: 14,
//     fontWeight: '500',
//   },

// });

// export default styles;


import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  // Puri screen ki styling
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
  },


   logo: {
  position: 'absolute',
  top: 280,
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

  // "Enter Pass Code" ki styling
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#101B41',
    marginBottom: 10,
    textAlign: 'center'
  },

  // Neeche wala description text
  text: {
    fontSize: 14,
    color: '#666',
    marginBottom: 25,
    textAlign: 'center'
  },

  // Har OTP box ki styling
  codeInput: {
    width: 52,
    height: 52,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // OTP ke andar number ki styling
  codeText: {
    fontSize: 20,
    color: '#101B41',
    textAlign: 'center',
  },

  // Verify Email button
  button: {
    height: 50,
    backgroundColor: 'black',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  // Button ke andar text
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },

});

export default styles;

