
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

  // Search
  searchBox: {
    height: 48,
    width: '100%',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 9,
    paddingHorizontal: 15,
    fontSize: 14,
    backgroundColor: '#fafafa',
    marginBottom: 20,
  },

  // All Rides
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 10,
  },

  // Sort Title
  sortTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 18,
    marginBottom: 10,
  },

  // Available / By Seat
  filterBox: {
    height: 45,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 8,
    backgroundColor: '#fafafa',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  filterText: {
    fontSize: 14,
    color: '#444',
  },

  arrow: {
    fontSize: 12,
    color: '#555',
  },

  // Results
  resultText: {
    fontSize: 13,
    color: '#666',
    marginTop: 20,
    marginBottom: 12,
  },

  // Card
  card: {
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },
dropdown: {
  backgroundColor: '#fff',
  padding: 10,
},

dropdownText: {
  padding: 8,
  color: '#000',
},
  // Profile
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#1689e8',
    borderRadius: 10,
    padding: 15,
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

  // Details
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },

  detail: {
    fontSize: 13,
    color: '#444',
  },

  bold: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#222',
  },

  // Date Time
  dateTime: {
    fontSize: 13,
    color: '#444',
    marginTop: 12,
    marginBottom: 5,
  },

  // Locations
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 9,
  },

  locationText: {
    fontSize: 13,
    color: '#444',
    flex: 1,
    textAlign: 'center',
  },

  locationIcon: {
    fontSize: 18,
    marginLeft: 8,
  },
 

  button: {
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

