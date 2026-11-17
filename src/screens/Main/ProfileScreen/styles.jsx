import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 22,
  },

  heading: {
    fontSize: 25,
    fontWeight: '700',
    color: '#111827',
    marginTop: 30,
    marginBottom: 22,
    textAlign:'center'
  },

  profileSection: {
    alignItems: 'center',
    marginBottom: 25,
  },

  profileImage: {
    width: 105,
    height: 105,
    borderRadius: 53,
    borderWidth: 2,
    borderColor: '#1683FF',
  },

  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginTop: 12,
  },

  location: {
    fontSize: 15,
    color: '#777777',
    marginTop: 5,
  },

  completeBox: {
    backgroundColor: '#4b9bf5',
    borderRadius: 18,
    padding: 17,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    minHeight: 5,
  },

  completionCircle: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },

  percentage: {
    fontSize: 21,
    fontWeight: '800',
    color: '#1683FF',
  },

  completionInfo: {
    flex: 1,
    alignItems: 'flex-start',
  },

  completeTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  standOut: {
    fontSize: 13,
    color: '#FFFFFF',
    marginTop: 3,
  },

  editButton: {
    backgroundColor: '#111111',
    paddingVertical: 9,
    paddingHorizontal: 17,
    borderRadius: 8,
    marginTop: 12,
  },

  editButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 19,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 27,
  },

  statItem: {
    flex: 1,
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 19,
    fontWeight: '700',
    color: '#111827',
  },



  statLabel: {
    fontSize: 11,
    color: '#777777',
    marginTop: 6,
    textAlign: 'center',
  },

  aboutSection: {
    marginBottom: 30,
  },

  aboutHeading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },

  aboutText: {
    fontSize: 14,
    lineHeight: 23,
    color: '#555555',
  },

});

export default styles;