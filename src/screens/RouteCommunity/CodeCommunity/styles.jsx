
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
  },

   logo: {
  position: 'absolute',
  top: 140,
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


  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#101B41',
    marginBottom: 10,
    textAlign: 'center',
  },

  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 25,
    textAlign: 'center',
  },

  // Code, Browse, Create
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  option: {
    width: '31%',
    height: 45,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },

  optionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#101B41',
  },

  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#101B41',
    marginBottom: 8,
  },

  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 7,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },

  // Browse box
  

 

  // Button
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },

  //
  communityBox: {
  height: 90,
  borderWidth: 1,
  borderColor: '#ddd',
  borderRadius: 15,
  padding: 15,
  marginBottom: 10,

  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},

communityName: {
  fontSize: 18,
  color: '#111',
},

members: {
  fontSize: 14,
  color: '#666',
  marginTop: 5,
},

requestButton: {
  backgroundColor: 'black',
  padding: 10,
  borderRadius: 8,
},

requestText: {
  color: 'white',
  fontSize: 15,
},

});

export default styles;

