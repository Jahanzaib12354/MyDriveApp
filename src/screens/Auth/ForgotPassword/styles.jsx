
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: 'white',
padding: 20,
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

title: {
fontSize: 28,
fontWeight: 'bold',
marginBottom: 10,
},

text: {
fontSize: 16,
textAlign: 'center',
marginBottom: 20,
},

button: {
width: '100%',
height: 50,
backgroundColor: '#1688F5',
justifyContent: 'center',
alignItems: 'center',
borderRadius: 8,
marginTop: 15,
},

buttonText: {
color: 'white',
fontSize: 16,
fontWeight: 'bold',
},

});

export default styles;


