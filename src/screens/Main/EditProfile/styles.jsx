
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    paddingHorizontal: 22,
    paddingTop: 12,
    paddingBottom: 15,
  },

  heading: {
    fontSize: 25,
    fontWeight: '700',
    color: '#111827',
    marginTop: 20,
    marginBottom: 10,
    textAlign:'center'
  },

  avatarSection: {
    alignItems: 'center',
    marginBottom: 8,
  },

  avatar: {
    width: 75,
    height: 75,
    borderRadius: 38,
    borderWidth: 2,
    borderColor: '#1683FF',
  },

  changeAvatar: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1683FF',
    marginTop: 4,
  },

  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#222222',
    marginBottom: 4,
    marginTop: 7,
  },

  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 5,
    fontSize: 13,
    color: '#222222',
    backgroundColor: '#FAFAFA',
  },

  aboutInput: {
    height: 55,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingTop: 8,
    fontSize: 13,
    color: '#222222',
    backgroundColor: '#FAFAFA',
  },

  personalIdRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },

  personalIdText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#222222',
  },

  verified: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  verifiedText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1683FF',
  },

  updateButton: {
    height: 44,
    backgroundColor: '#1683FF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },

  updateButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default styles;
