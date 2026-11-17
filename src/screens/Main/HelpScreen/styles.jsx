
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  header: {
    height: 95,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
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
    fontSize: 25,
    fontWeight: 'bold',
    color: '#222222',
    textAlign: 'center',
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 30,
  },

  paragraph: {
    fontSize: 16,
    color: '#555555',
    lineHeight: 26,
    marginBottom: 22,
    textAlign: 'justify',
  },
});

export default styles;
