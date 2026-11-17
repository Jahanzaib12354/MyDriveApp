
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
boxContainer: {
  width: 180,
  height: 150,
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 30,
},

scoreBox: {
  width: 140,
  height: 140,
  backgroundColor: 'rgba(33, 150, 243, 0.12)',
  borderRadius: 25,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: 'rgba(33, 150, 243, 0.25)',
  elevation: 5,
},



searchCircle: {
  position: 'absolute',
  right: 55,
  bottom: -20,
  width: 55,
  height: 55,
  borderRadius: 28,
  backgroundColor: '#2196F3',
  borderWidth: 4,
  borderColor: '#FFFFFF',
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 6,
},

searchLogo: {
  color: '#FFFFFF',
  fontSize: 34,
  fontWeight: 'bold',
},


  heading: {
    fontSize: 16,
    color: '#222222',
    textAlign: 'center',
    marginBottom: 10,
  },

  subHeading: {
    fontSize: 25,
    fontWeight: '600',
    color: '#555555',
    textAlign: 'center',
    marginBottom: 15,
  },

  description: {
    fontSize: 14,
    color: '#888888',
    lineHeight: 23,
    textAlign: 'center',
    marginHorizontal: 5,
  },

  loader: {
    marginTop: 30,
    transform: [{ scale: 1.5 }],
  },

  waitingText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 22,
  },

   RiderLocation: {
  backgroundColor: '#2196F3',
  paddingVertical: 14,
  paddingHorizontal: 20,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 15,
  marginHorizontal: 20,
  elevation: 3,
},

   Ridertext: {
  color: '#FFFFFF',
  fontSize: 18,
  fontWeight: 'bold',
},
});

export default styles;
