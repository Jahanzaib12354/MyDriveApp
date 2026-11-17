import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
    flexGrow: 1,
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222222',
    textAlign: 'center',
  },

  subHeading: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 15,
  },

  section: {
    marginTop: 10,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1689e8',
    marginBottom: 8,
  },

  label: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#444444',
    marginBottom: 4,
    marginTop: 5,
  },

  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 7,
    paddingHorizontal: 10,
    fontSize: 11,
    backgroundColor: '#fafafa',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  halfBox: {
    width: '48%',
  },

  postButton: {
    backgroundColor: '#1689e8',
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
    marginBottom: 20,
    width: '100%',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },

});

export default styles;