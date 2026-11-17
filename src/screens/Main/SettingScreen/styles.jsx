
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  // Header
  header: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    position: 'relative',
  },

  backButton: {
    position: 'absolute',
    left: 15,
    width: 40,
    height: 45,
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
    fontSize: 25,
    fontWeight: 'bold',
    color: '#222222',
    textAlign: 'center',
  },

  // Settings List
  settingsList: {
    marginHorizontal: 15,
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    elevation: 2,
  },

  settingRow: {
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  settingText: {
    fontSize: 17,
    color: '#222222',
    fontWeight: '500',
  },

  arrow: {
    fontSize: 30,
    color: '#777777',
    marginRight: 3,
  },
});

export default styles;
