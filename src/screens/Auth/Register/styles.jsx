
// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({

//   abc: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     paddingHorizontal: 20,
//   },

//   def: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 30,
//   },

//   registerButton: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#1688F5',
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 15,
//   },

//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },

// });

// export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },

  abc: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 17,
    justifyContent: 'center',
    paddingVertical: 25,
  },

  logo: {
    alignSelf: 'center',
    backgroundColor: '#087FFF',
    paddingHorizontal: 25,
    paddingVertical: 7,
    borderRadius: 6,
    marginBottom: 17,
  },

  logoText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  def: {
    fontSize: 20,
    fontWeight: '700',
    color: '#101B3B',
    textAlign: 'center',
    marginBottom: 16,
  },

  loginButton: {
    height: 50,
    backgroundColor: '#000000',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },

  orText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#333333',
    fontWeight: '600',
    marginTop: 17,
    marginBottom: 16,
  },

  facebookButton: {
    height: 50,
    backgroundColor: '#2372C5',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 8,
  },

  socialButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },

  googleButton: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  googleButtonText: {
    color: '#111111',
    fontSize: 15,
    fontWeight: '600',
  },

  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 17,
  },

  bottomText: {
    fontSize: 12,
    color: '#777777',
  },

  loginLink: {
    fontSize: 12,
    color: '#111111',
    fontWeight: '700',
  },
});

export default styles;
