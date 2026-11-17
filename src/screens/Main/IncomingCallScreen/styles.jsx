
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 40,
  },

  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    marginBottom: 25,
  },

  name: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 17,
    color: '#E0E7FF',
    marginBottom: 65,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 190,
  },

  rejectButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#EF4444',
    alignItems: 'center',
    justifyContent: 'center',
  },

  acceptButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;

