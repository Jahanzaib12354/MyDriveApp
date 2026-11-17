
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
    paddingTop: 35,
  },

  // Header
 header: {
  height: 130,
  backgroundColor: '#1689e8',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 15,
  marginHorizontal: -16,
  marginTop: -35,
  paddingTop: 8,
},

 welcome: {
  backgroundColor: 'white',
  paddingHorizontal: 200,
    paddingLeft: 15,
  paddingTop: 10,
  paddingBottom: 7,
  fontSize: 14,
  fontWeight: 'bold',
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
},

community: {
  backgroundColor: 'white',
  paddingHorizontal: 15,
  paddingBottom: 9,
  fontSize: 13,
  color: '#1689e8',
  borderBottomLeftRadius: 8,
  borderBottomRightRadius: 8,
},

  menuButton: {
    backgroundColor: 'white',
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuText: {
    fontSize: 25,
    color: '#1689e8',
  },

  // Community Code
  codeBox: {
    backgroundColor: '#eef6ff',
    marginTop: 15,
    padding: 17,
    borderRadius: 9,
    alignItems: 'center',
  },

  codeTitle: {
    fontSize: 15,
    color: '#444',
    fontWeight: 'bold',
  },

  codeText: {
    fontSize: 13,
    color: '#555',
    marginTop: 5,
  },

  // Cards
  card: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 12,
    padding: 15,
    minHeight: 110,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },

  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#e7f8ed',
    alignItems: 'center',
    justifyContent: 'center',
  },

  blueIcon: {
    backgroundColor: '#e8f1ff',
  },

  purpleIcon: {
    backgroundColor: '#f2e5ff',
  },

  icon: {
    fontSize: 27,
  },

  cardText: {
    marginLeft: 13,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },

  cardSubtitle: {
    fontSize: 13,
    color: '#555',
    marginTop: 4,
  },

  description: {
    width: '100%',
    fontSize: 12,
    color: '#555',
    marginTop: 10,
    lineHeight: 18,
  },

  // Activity
  activityBox: {
    marginTop: 14,
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderRadius: 11,
    padding: 15,
  },

  activityTitle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  statBox: {
    width: '31%',
    backgroundColor: '#fafafa',
    borderRadius: 9,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },

  number: {
    color: '#0088ff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  statText: {
    fontSize: 11,
    color: '#222',
    marginTop: 5,
  },

  trust: {
    color: '#0088ff',
    fontSize: 11,
    fontWeight: 'bold',
  },

});

export default styles;

