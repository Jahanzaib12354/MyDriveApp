import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
    paddingTop: 35,
  },

  // Menu
  menuButton: {
    alignSelf: 'flex-end',
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#1689e8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  menuText: {
    fontSize: 25,
    color: '#ffffff',
  },

  // Location Boxes
  locationBox: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 12,
  },

  locationLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  blueDot: {
    color: 'blue',
    fontSize: 16,
    marginRight: 10,
  },

  redDot: {
    color: 'red',
    fontSize: 16,
    marginRight: 10,
  },

  locationBoxText: {
    fontSize: 14,
    color: '#333333',
  },

  locationIcon: {
    fontSize: 20,
  },

  // Map / Location Chart
  mapBox: {
    height: 180,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 12,
    backgroundColor: '#eef6ff',
    marginTop: 5,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mapTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1689e8',
    marginBottom: 20,
  },

  routeLine: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '65%',
  },

  mapPoint: {
    color: '#1689e8',
    fontSize: 20,
  },

  mapPointRed: {
    color: 'red',
    fontSize: 20,
  },

  line: {
    flex: 1,
    height: 3,
    backgroundColor: '#999999',
    marginHorizontal: 8,
  },

  mapText: {
    fontSize: 12,
    color: '#555555',
    marginTop: 15,
  },

  // Rider Card
  card: {
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 12,
    padding: 15,
    backgroundColor: '#ffffff',
  },

  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1689e8',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },

  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },

  profileInfo: {
    flex: 1,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },

  info: {
    fontSize: 11,
    color: '#ffffff',
    marginBottom: 2,
  },

  // Call & Message
  actionButtons: {
    flexDirection: 'row',
    gap: 7,
  },

  actionButton: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  actionIcon: {
    fontSize: 17,
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
    color: '#444444',
  },

  bold: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#222222',
  },

  // Date & Time
  dateTime: {
    fontSize: 13,
    color: '#444444',
    marginTop: 8,
  },

  // Card Locations
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 9,
  },

  cardLocationText: {
    flex: 1,
    fontSize: 13,
    color: '#444444',
  },

riderArrive: {
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

actionriderArrive: {
  color: '#FFFFFF',
  fontSize: 18,
  fontWeight: 'bold',
},
  
});

export default styles;