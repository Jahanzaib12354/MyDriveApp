
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  // Main Screen
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  // Payment Header - Top Left
  header: {
    position: 'absolute',
    top: 30,
    left: 20,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
  },

  // Main Box Container
  boxContainer: {
    width: 180,
    height: 150,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },

  // Score Box
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

  // Inner Box
  innerBox: {
    width: 90,
    height: 90,
    borderRadius: 18,
    backgroundColor: 'rgba(33, 150, 243, 0.08)',
  },

  // Search Circle
  searchCircle: {
    position: 'absolute',
    right: 35,
    bottom: -5,
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

  // Search Logo
  searchLogo: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: 'bold',
  },

  // Start Your Ride
  heading: {
    fontSize: 16,
    color: '#222222',
    textAlign: 'center',
    marginBottom: 10,
  },

  // Rider Arrived Message
  subHeading: {
    fontSize: 25,
    fontWeight: '600',
    color: '#555555',
    textAlign: 'center',
    marginBottom: 15,
  },

  // Description
  description: {
    fontSize: 14,
    color: '#888888',
    lineHeight: 23,
    textAlign: 'center',
    marginHorizontal: 5,
  },

  // Loading Circle
  loader: {
    marginTop: 30,
    transform: [{ scale: 1.5 }],
  },

  // Waiting Message
  waitingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222222',
    textAlign: 'center',
    marginTop: 22,
  },

  
// Leave Feedback
feedbackHeading: {
  fontSize: 20,
  color: '#222222',
  textAlign: 'center',
  marginTop: 100,
  marginBottom: 15,
},


submitButton: {
  backgroundColor: '#2196F3',
  paddingVertical: 14,
  paddingHorizontal: 130,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: -50,
  elevation: 3,
},

submitButtonText: {
  color: '#FFFFFF',
  fontSize: 20,
  fontWeight: 'bold',
},



});

export default styles;
