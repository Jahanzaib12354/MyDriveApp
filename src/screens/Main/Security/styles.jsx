
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 5,
  },

  // Header
  header: {
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    position: 'relative',
  },

  backButton: {
    position: 'absolute',
    left: 20,
    width: 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 1,
  },

  backArrow: {
    fontSize: 38,
    color: '#222222',
    lineHeight: 42,
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222222',
    textAlign: 'center',
  },

  // Security options box
  settingsList: {
    marginHorizontal: 18,
    marginTop: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 5,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },

  // Each option row
  settingRow: {
    minHeight: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  settingText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#222222',
    flexShrink: 1,
    marginRight: 10,
  },

  arrow: {
    fontSize: 30,
    color: '#777777',
    marginRight: 3,
  },

  // Change Password button
  changePasswordButton: {
    backgroundColor: '#000000',
    marginHorizontal: 18,
    marginTop: 35,
    height: 58,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  changePasswordText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default styles;
