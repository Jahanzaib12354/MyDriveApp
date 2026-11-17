 
 import { StyleSheet } from 'react-native';
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 28,
  },

  heading: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#222222',
  },

  closeButton: {
    padding: 5,
  },


profile: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 15,
  paddingHorizontal: 15,
  gap: 12,
},

avatarImage: {
  width: 48,
  height: 48,
  borderRadius: 24,
  flexShrink: 0,
},

profileInfo: {
  flex: 1,
  minWidth: 0,
  justifyContent: 'center',
},

profileName: {
  fontSize: 15,
  fontWeight: '600',
  color: '#222222',
},

editProfile: {
  fontSize: 12,
  color: '#1683FF',
  marginTop: 4,
},


  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 12,
  },

  menuContainer: {
    marginTop: 10,
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 17,
    gap: 15,
  },

  menuText: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },

  bottomSection: {
    marginTop: 'auto',
  },

  logoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 17,
    gap: 13,
  },

  logoutIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#1683FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoutText: {
    flex: 1,
    fontSize: 16,
    color: '#DC2626',
    fontWeight: '600',
  },
});

export default styles;