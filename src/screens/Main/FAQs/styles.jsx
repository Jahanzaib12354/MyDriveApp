
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  // Header
  header: {
    height: 90,
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
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222222',
    textAlign: 'center',
  },

  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 25,
    paddingBottom: 30,
  },

  // FAQ item
  faqItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },

  questionRow: {
    minHeight: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  questionText: {
    flex: 1,
    fontSize: 17,
    fontWeight: '500',
    color: '#222222',
    marginRight: 10,
  },

  arrow: {
    fontSize: 30,
    color: '#555555',
    paddingHorizontal: 5,
  },

  answerText: {
    fontSize: 15,
    lineHeight: 23,
    color: '#666666',
    paddingBottom: 18,
    paddingRight: 10,
  },
});

export default styles;
