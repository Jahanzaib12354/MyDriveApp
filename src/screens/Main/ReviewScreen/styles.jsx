
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 30,
    alignItems: 'center',
  },

  // Header
  header: {
    alignSelf: 'flex-start',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#172554',
    marginBottom: 30,
  },

  // Driver Image
  profileImage: {
    width: 105,
    height: 105,
    borderRadius: 53,
    borderWidth: 3,
    borderColor: '#E5EEFF',
    marginTop: 5,
    marginBottom: 12,
    backgroundColor: '#F1F5F9',
  },

  // Driver Name
  driverName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222222',
    textAlign: 'center',
    marginBottom: 10,
  },

  // Description
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#777777',
    textAlign: 'center',
    marginHorizontal: 5,
    marginBottom: 18,
  },

  // Location Rows
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  blueDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#2196F3',
    marginRight: 10,
  },

  redDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#F44336',
    marginRight: 10,
  },

  locationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },

  // Rate Your Drive
  rateHeading: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#172554',
    textAlign: 'center',
    marginTop: 18,
    marginBottom: 10,
  },

  // Stars
  starsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
  },

  star: {
    fontSize: 38,
    marginHorizontal: 4,
  },

  // Add Review
  reviewLabel: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 10,
  },

  // Review Input Box
  reviewInput: {
    width: '100%',
    height: 120,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    backgroundColor: '#F9FAFB',
    padding: 14,
    fontSize: 15,
    color: '#222222',
    marginBottom: 20,
  },

  // Submit Button
  submitButton: {
    width: '100%',
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },

  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

});

export default styles;
