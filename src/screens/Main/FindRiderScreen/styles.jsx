
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
    paddingTop: 35,
  },

  // Heading
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222',
    marginBottom: 18,
  },

  // Search Box
  searchBox: {
    height: 48,
    width: '100%',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 9,
    paddingHorizontal: 15,
    fontSize: 14,
    backgroundColor: '#fafafa',
    marginBottom: 15,
  },

  // Rider Card
  card: {
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#ffffff',
  },

  // Profile
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#1689e8',
    borderRadius: 10,
    padding: 20,
  },

  profileImage: {
    width: 65,
    height: 65,
    borderRadius: 33,
    marginRight: 12,
  },

  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },

  info: {
    fontSize: 12,
    color: '#ffffff',
    marginBottom: 3,
  },
  

  detailRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 7,
},

  // Ride Details
  detail: {
    fontSize: 13,
    color: '#444',
    marginTop: 7,
    lineHeight: 19,
  },

  bold: {
    fontWeight: 'bold',
    color: '#222',
  },

  dateTime: {
    fontSize: 13,
    color: '#444',
    marginTop: 9,
    lineHeight: 19,
  },

  // Location
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 9,
    
    
  },

  locationText: {
    fontSize: 13,
    color: '#444',
    flex: 1,
    
  },

  locationIcon: {
    fontSize: 19,
    marginLeft: 8,
  },

  // Request Button
  requestButton: {
    height: 46,
    width: '100%',
    backgroundColor: '#010306',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },

});

export default styles;
