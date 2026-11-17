// import { StyleSheet } from "react-native";


//   const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },

//   header: {
//     height: 110,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 18,
//   },

//   backButton: {
//     position: 'absolute',
//     left: 18,
//     top: 10,
//     zIndex: 1,
//   },

//   backArrow: {
//     fontSize: 34,
//     color: '#333333',
//     lineHeight: 40,
//   },

//   headerTextContainer: {
//     alignItems: 'center',
//   },

//   headerTitle: {
//     fontSize: 25,
//     fontWeight: '500',
//     color: '#333333',
//   },

//   headerSubtitle: {
//     fontSize: 12,
//     color: '#444444',
//     marginTop: 3,
//   },

// //   tabsContainer: {
// //     flexDirection: 'row',
// //     marginHorizontal: 16,
// //     marginTop: -10,
// //     marginBottom: 8,
// //     padding: 4,
// //     backgroundColor: '#EAE9ED',
// //     borderRadius: 25,
// //     height: 42,
// //   },

// //   tab: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     borderRadius: 22,
// //   },

// //   selectedTab: {
// //     backgroundColor: '#FFFFFF',
// //   },

// //   tabText: {
// //     fontSize: 11,
// //     color: '#444444',
// //   },


// tabsContainer: {
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   backgroundColor: '#EEEEEE',
//   borderRadius: 8,
//   padding: 7,
//   marginHorizontal: 12,
//   marginVertical: -10,
// },

// selectedTab: {
//   flex: 1,
//   textAlign: 'center',
//   backgroundColor: '#FFFFFF',
//   color: '#1677C8',
//   fontSize: 12,
//   fontWeight: 'bold',
//   paddingVertical: 10,
//   borderRadius: 6,
//   overflow: 'hidden',
// },

// tabText: {
//   flex: 1,
//   textAlign: 'center',
//   color: '#666666',
//   fontSize: 12,
//   fontWeight: '500',
//   paddingVertical: 10,
// },



//   scrollView: {
//     flex: 1,
//   },

//   scrollContent: {
//     paddingHorizontal: 16,
//     paddingBottom: 30,
//   },

//   sectionTitle: {
//     fontSize: 15,
//     fontWeight: '700',
//     color: '#222222',
//     marginBottom: 12,
//     marginTop: 3,
//   },

//   rideCard: {
//     width: '100%',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 10,
//     overflow: 'hidden',
//     marginBottom: 18,
//     elevation: 3,
//   },

//   riderHeader: {
//     minHeight: 115,
//     backgroundColor: '#0785F9',
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     paddingHorizontal: 12,
//     paddingTop: 12,
//     paddingBottom: 10,
//   },

//   profileImage: {
//     width: 53,
//     height: 53,
//     borderRadius: 27,
//     borderWidth: 1,
//     borderColor: '#FFFFFF',
//     marginRight: 12,
//   },

//   riderInfo: {
//     flex: 1,
//   },

//   nameRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//     marginTop: 4,
//   },

//   riderName: {
//     color: '#FFFFFF',
//     fontWeight: '700',
//     fontSize: 14,
//   },

//   riderLevel: {
//     color: '#FFFFFF',
//     fontSize: 10,
//   },

//   riderEmail: {
//     fontSize: 12,
//     color: '#FFFFFF',
//     marginTop: 5,
//   },

//   riderPhone: {
//     fontSize: 12,
//     color: '#FFFFFF',
//     marginTop: 4,
//   },

//   rating: {
//     fontSize: 12,
//     color: '#FFFFFF',
//     fontWeight: '700',
//     marginTop: 4,
//   },

//   detailsContainer: {
//     paddingHorizontal: 12,
//     paddingTop: 10,
//     paddingBottom: 9,
//   },

//   detailRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     minHeight: 29,
//   },

//   detailLabel: {
//     color: '#777777',
//     fontSize: 12,
//     flexShrink: 0,
//     marginRight: 6,
//   },

//   detailValue: {
//     color: '#222222',
//     fontSize: 11,
//     fontWeight: '700',
//     textAlign: 'right',
//     flexShrink: 1,
//   },

//   departing: {
//     color: '#0785F9',
//     fontWeight: '400',
//   },

//   locationContainer: {
//     paddingHorizontal: 11,
//     paddingTop: 5,
//     paddingBottom: 13,
//     position: 'relative',
//   },

//   routeLine: {
//     position: 'absolute',
//     left: 14,
//     top: 20,
//     height: 70,
//     width: 2,
//     backgroundColor: '#D9D9D9',
//   },

//   locationRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },

//   greyDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#D5D5D5',
//     marginRight: 12,
//     zIndex: 1,
//   },

//   redDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#FF2929',
//     marginRight: 12,
//     zIndex: 1,
//   },

//   locationBox: {
//     flex: 1,
//     minHeight: 42,
//     borderRadius: 8,
//     backgroundColor: '#F2F7FC',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingLeft: 12,
//     paddingRight: 7,
//   },

//   locationText: {
//     fontSize: 11,
//     color: '#4C4C4C',
//     flexShrink: 1,
//     marginRight: 5,
//   },

//   locationActions: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 7,
//   },

//   smallIcon: {
//     width: 28,
//     height: 28,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 6,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   searchIcon: {
//     fontSize: 23,
//     color: '#444444',
//     lineHeight: 27,
//   },

//   mapIcon: {
//     width: 28,
//     height: 28,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 6,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   redMapIcon: {
//     width: 28,
//     height: 28,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 6,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   greenPin: {
//     color: '#56BD45',
//     fontSize: 22,
//   },

//   redPin: {
//     color: '#FF3333',
//     fontSize: 22,
//   },

//   bottomActions: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 3,
//     marginLeft: 20,
//     gap: 10,
//   },



//   chatIcon: {
//     color: '#0785F9',
//     fontSize: 28,
//   },

//   activeButton: {
//     flex: 1,
//     height: 36,
//     borderRadius: 22,
//     backgroundColor: '#69C92D',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   activeText: {
//     color: '#FFFFFF',
//     fontSize: 12,
//     fontWeight: '700',
//   },

//   emptyContainer: {
//     alignItems: 'center',
//     marginTop: 70,
//   },

//   emptyText: {
//     color: '#777777',
//     fontSize: 15,
//   },
// });

// export default styles;



import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F5F5F5',
  },

  // Header
  header: {
    minHeight: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 45,
  },

  backButton: {
    position: 'absolute',
    left: 15,
    top: 25,
    zIndex: 1,
  },

  backArrow: {
    fontSize: 34,
    color: '#333333',
    lineHeight: 40,
  },

  headerTextContainer: {
    alignItems: 'center',
    flexShrink: 1,
  },

  headerTitle: {
    fontSize: 25,
    fontWeight: '500',
    color: '#333333',
  },

  headerSubtitle: {
    fontSize: 12,
    color: '#444444',
    marginTop: 3,
    textAlign: 'center',
  },

  // Tabs
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
    marginTop: 0,
    marginBottom: 12,
    padding: 4,
    backgroundColor: '#EEEEEE',
    borderRadius: 8,
  },

  tab: {
    flex: 1,
    minWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 2,
    borderRadius: 6,
  },

  selectedTab: {
    backgroundColor: '#FFFFFF',
  },

  tabText: {
    color: '#666666',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
  },

  selectedTabText: {
    color: '#1677C8',
    fontWeight: 'bold',
  },

  // ScrollView
  scrollView: {
    flex: 1,
    width: '100%',
  },

  scrollContent: {
    paddingHorizontal: 12,
    paddingTop: 6,
    paddingBottom: 30,
    flexGrow: 1,
  },

  // Section Heading
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222222',
    marginBottom: 12,
    marginTop: 5,
    flexShrink: 1,
  },

  // Ride Card
  rideCard: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 18,
    elevation: 3,
  },

  // Rider Header
  riderHeader: {
    minHeight: 115,
    backgroundColor: '#0785F9',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 10,
  },

  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginRight: 10,
    flexShrink: 0,
  },

  riderInfo: {
    flex: 1,
    minWidth: 0,
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 4,
  },

  riderName: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
    flexShrink: 1,
  },

  riderLevel: {
    color: '#FFFFFF',
    fontSize: 10,
    flexShrink: 1,
  },

  riderEmail: {
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 5,
    flexWrap: 'wrap',
  },

  riderPhone: {
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 4,
  },

  rating: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '700',
    marginTop: 4,
  },

  // Car Details
  detailsContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 9,
  },

  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 29,
    marginBottom: 3,
  },

  detailLabel: {
    color: '#777777',
    fontSize: 12,
    width: 75,
    flexShrink: 0,
    marginRight: 6,
  },

  detailValue: {
    flex: 1,
    minWidth: 0,
    color: '#222222',
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'right',
    flexShrink: 1,
  },

  departing: {
    color: '#0785F9',
    fontWeight: '400',
  },

  // Locations
  locationContainer: {
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 13,
    position: 'relative',
  },

  routeLine: {
    position: 'absolute',
    left: 14,
    top: 20,
    height: 70,
    width: 2,
    backgroundColor: '#D9D9D9',
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    minWidth: 0,
  },

  greyDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D5D5D5',
    marginRight: 10,
    zIndex: 1,
    flexShrink: 0,
  },

  redDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF2929',
    marginRight: 10,
    zIndex: 1,
    flexShrink: 0,
  },

  locationBox: {
    flex: 1,
    minWidth: 0,
    minHeight: 42,
    borderRadius: 8,
    backgroundColor: '#F2F7FC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 6,
  },

  locationText: {
    flex: 1,
    minWidth: 0,
    fontSize: 11,
    color: '#4C4C4C',
    marginRight: 4,
    flexShrink: 1,
  },

  locationActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    flexShrink: 0,
  },

  smallIcon: {
    width: 27,
    height: 28,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchIcon: {
    fontSize: 23,
    color: '#444444',
    lineHeight: 27,
  },

  mapIcon: {
    width: 27,
    height: 28,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  redMapIcon: {
    width: 27,
    height: 28,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  greenPin: {
    color: '#56BD45',
    fontSize: 22,
  },

  redPin: {
    color: '#FF3333',
    fontSize: 22,
  },

  // Bottom Buttons
  bottomActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
    marginLeft: 18,
    gap: 10,
  },

  chatButton: {
    width: 35,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },

  chatIcon: {
    color: '#0785F9',
    fontSize: 28,
  },

  activeButton: {
    flex: 1,
    minWidth: 0,
    height: 36,
    borderRadius: 22,
    backgroundColor: '#69C92D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },

  // Empty State
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
    paddingHorizontal: 10,
  },

  emptyText: {
    color: '#777777',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default styles;
