import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },

  content: {
    padding: 20,
    paddingBottom: 35,
  },

  header: {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: 10,
  marginBottom: 25,
},

menuButton: {
  width: 42,
  height: 42,
  borderRadius: 21,
  backgroundColor: '#1689e8',
  alignItems: 'center',
  justifyContent: 'center',
},

menuText: {
  fontSize: 25,
  color: '#ffffff',
},

  locationContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 16,
    marginBottom: 20,
    elevation: 3,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 35,
  },

  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#2563EB',
    marginRight: 12,
  },

  destinationDot: {
    width: 12,
    height: 12,
    borderRadius: 3,
    backgroundColor: '#16A34A',
    marginRight: 12,
  },

  locationText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#222B45',
  },

  searchIcon: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconText: {
    fontSize: 30,
    color: '#2563EB',
  },

  routeLine: {
    height: 24,
    borderLeftWidth: 2,
    borderColor: '#CBD5E1',
    borderStyle: 'dashed',
    marginLeft: 5,
    marginVertical: 2,
  },

  /* Map Graphic */
  mapContainer: {
    height: 200,
    backgroundColor: '#E4EBDD',
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 20,
    position: 'relative',
  },

  mapRoad1: {
    position: 'absolute',
    width: 420,
    height: 25,
    backgroundColor: '#FFFFFF',
    top: 65,
    left: -40,
    transform: [{ rotate: '-15deg' }],
  },

  mapRoad2: {
    position: 'absolute',
    width: 330,
    height: 23,
    backgroundColor: '#FFFFFF',
    top: 145,
    left: 10,
    transform: [{ rotate: '25deg' }],
  },

  mapRoad3: {
    position: 'absolute',
    width: 260,
    height: 20,
    backgroundColor: '#FFFFFF',
    top: 15,
    left: 110,
    transform: [{ rotate: '75deg' }],
  },

  mapRoad4: {
    position: 'absolute',
    width: 250,
    height: 15,
    backgroundColor: '#D2DCE5',
    top: 100,
    left: -25,
    transform: [{ rotate: '40deg' }],
  },

  park: {
    position: 'absolute',
    width: 85,
    height: 55,
    backgroundColor: '#B9DDB0',
    top: 15,
    left: 15,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  parkText: {
    color: '#367344',
    fontSize: 12,
    fontWeight: 'bold',
  },

  mapPin: {
    position: 'absolute',
    top: 35,
    right: 45,
  },

  pinText: {
    fontSize: 32,
  },

  carMarker: {
    position: 'absolute',
    bottom: 35,
    left: 95,
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 25,
    elevation: 3,
  },

  carText: {
    fontSize: 25,
  },

  mapLabel: {
    position: 'absolute',
    bottom: 10,
    right: 12,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },

  mapLabelText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#334155',
  },

  /* Rider Card */
  riderCard: {
    backgroundColor: '#5486f2',
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    elevation: 4,
  },

 riderTopRow: {
  flexDirection: 'row',
  alignItems: 'center',
},

riderInfo: {
  flex: 1,
  marginLeft: 12,
},

actionColumn: {
  alignItems: 'center',
  justifyContent: 'center',
  gap: 18,
  marginLeft: 8,
},

actionIcon: {
  fontSize: 20,
  color: '#FFFFFF',
},


  /* Details */
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 17,
    paddingVertical: 16,
    elevation: 2,
    marginBottom: 12,
  },

  detailsTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#172554',
  },

  arrow: {
    fontSize: 27,
    color: '#2563EB',
  },

  detailsBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
  },

  detailText: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 10,
  },

  /* Arrival Time */
  estimateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E8F0FF',
    borderRadius: 12,
    padding: 17,
    marginTop: 5,
  },

  estimateText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    flex: 1,
  },

  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2563EB',
  },

     actionpayment: {
     backgroundColor: '#2196F3',
     paddingVertical: 14,
     paddingHorizontal: 20,
     borderRadius: 10,
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 15,
     marginHorizontal: 20,
     levation: 3,
},

  actiontext: {
  color: '#FFFFFF',
  fontSize: 18,
  fontWeight: 'bold',
},
});

export default styles;