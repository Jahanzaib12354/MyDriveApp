import { StyleSheet , Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // title: {
  //   fontSize: 30,
  //   fontWeight: 'bold',
  //   marginBottom: 30,
  // },

  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  abc: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  def: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  loginButton: {
    width: '100%',
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  registerButton: {
    width: '100%',
    backgroundColor: '#ffffffd9',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
 RegisterText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
},




splashContainer: {
    flex: 1,
    backgroundColor: '#F7F8FC',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  animatedCircle: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0788F9',
    left: width / 2 - 20,
    top: height / 2 - 20,
  },

  splashLogo: {
    position: 'absolute',
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },

  splashLogoText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 32,
  },



  
  forgotButton: {
  width: '90%',
  alignItems: 'flex-end',
  marginTop: -5,
  marginBottom: 10,
},

forgotText: {
  color: 'black',
  fontSize: 14,
},








  containerrr: {
    flex: 1,
    backgroundColor: '#F7F8FC',
  },

  imageContainer: {
    width: '110%',
    height: height * 0.50,
    position: 'relative',
  },

  image: {
    width: '100%',
    height: '100%',
  },

logo: {
  position: 'absolute',
  top: 145,
  alignSelf: 'center',
  backgroundColor: '#0983ef',
  paddingHorizontal: 25,
  paddingVertical: 7,
  borderRadius: 7,
},

  logoText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  content: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 18,
  },

  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 22,
    gap: 6,
  },

  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#C7DFFF',
  },

  activeDot: {
    width: 11,
    height: 4,
    borderRadius: 5,
    backgroundColor: '#0788F9',
  },

  textContainer: {
    marginTop: 0,
  },

  subtitle: {
    color: '#555555',
    fontSize: 10,
    fontWeight: '600',
    marginBottom: 8,
  },

  title: {
    color: '#101B40',
    fontSize: 21,
    fontWeight: 'bold',
    lineHeight: 27,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginTop: 'auto',
  },

  secondaryButton: {
    flex: 1,
    height: 40,
    backgroundColor: '#DDDDDD',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  secondaryButtonText: {
    color: '#555555',
    fontSize: 10,
    fontWeight: '600',
  },

  primaryButton: {
    flex: 1,
    height: 40,
    backgroundColor: '#0788F9',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
  },



  

 



// Facebook Button
facebookButtonn: {
  width: '100%',
  backgroundColor: '#2372C5',
  padding: 15,
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 15,
},

socialButtonTextn: {
  color: '#FFFFFF',
  fontSize: 14,
  fontWeight: 'bold',
},

// Google Button
googleButtonn: {
  width: '100%',
  backgroundColor: '#FFFFFF',
  padding: 15,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: '#999999',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 15,
},

googleButtonTextn: {
  color: '#000000',
  fontSize: 14,
  fontWeight: 'bold',
},



  
});

export default styles;