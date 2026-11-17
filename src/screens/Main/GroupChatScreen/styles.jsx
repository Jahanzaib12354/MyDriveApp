
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7F8FD',
  },

  header: {
    height: 95,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  backButton: {
    width: 30,
    height: 35,
    justifyContent: 'center',
  },

  heading: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#222222',
  },

  mainScroll: {
    flex: 1,
  },

  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    marginTop: 12,
    padding: 15,
    borderRadius: 14,
    elevation: 3,
  },

  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  profileImage: {
    width: 65,
    height: 65,
    borderRadius: 35,
    marginRight: 12,
  },

  profileInfo: {
    flex: 1,
  },

  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 3,
  },

  info: {
    fontSize: 13,
    color: '#666666',
    marginTop: 2,
  },

  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7,
    borderBottomWidth: 0.5,
    borderBottomColor: '#EEEEEE',
  },

  detail: {
    fontSize: 14,
    color: '#666666',
  },

  bold: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222222',
  },

  dateTime: {
    fontSize: 12,
    color: '#555555',
    marginTop: 12,
  },

  chatHeading: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#222222',
    marginHorizontal: 15,
    marginTop: 18,
    marginBottom: 12,
  },

  today: {
    textAlign: 'center',
    fontSize: 11,
    fontWeight: 'bold',
    color: '#777777',
    marginBottom: 15,
  },

  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginHorizontal: 12,
    marginBottom: 15,
  },

  myRow: {
    justifyContent: 'flex-end',
  },

  otherRow: {
    justifyContent: 'flex-start',
  },

  chatImage: {
    width: 32,
    height: 32,
    borderRadius: 18,
    marginHorizontal: 5,
  },

  messageBubble: {
    maxWidth: '75%',
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 14,
  },

  myBubble: {
    backgroundColor: '#C7E2FF',
    borderBottomRightRadius: 3,
  },

  otherBubble: {
    backgroundColor: '#D2F5E5',
    borderBottomLeftRadius: 3,
  },

  messageText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#222222',
  },

  time: {
    fontSize: 10,
    color: '#777777',
    marginTop: 5,
    textAlign: 'right',
  },

  inputContainer: {
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    marginHorizontal: 10,
    marginTop: 6,
    marginBottom: 10,
    paddingLeft: 16,
    paddingRight: 7,
    elevation: 3,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: '#222222',
    paddingVertical: 10,
  },

  sendButton: {
    width: 38,
    height: 38,
    borderRadius: 20,
    backgroundColor: '#E7F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default styles;

