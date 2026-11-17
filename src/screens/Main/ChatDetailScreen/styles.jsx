
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
    paddingHorizontal: 9,
  },

  // backButton: {
  //   width: 28,
  //   height: 28,
  //   backgroundColor: '#ec0d0d',
  //   borderRadius: 9,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   elevation: 3,
  // },

  backText: {
    fontSize: 35,
    color: '#222222',
    lineHeight: 29,
  },

  headerName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },

  callButton: {
    width: 25,
    height: 25,
    borderRadius: 7,
    backgroundColor: '#38D77D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  callText: {
    color: '#FFFFFF',
    fontSize: 17,
  },

  messageArea: {
    flex: 1,
  },

messageContent: {
  paddingHorizontal: 9,
  paddingTop: 100, // Pehle 100 tha
  paddingBottom: 15,
},

  today: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 12,
  },

  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 17,
  },

  myRow: {
    justifyContent: 'flex-start',
  },

  otherRow: {
    justifyContent: 'flex-end',
  },

  profileContainer: {
    alignItems: 'center',
    width: 39,
  },

  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },

  time: {
    fontSize: 8,
    color: '#777777',
    marginTop: 3,
  },

  messageBubble: {
    maxWidth: '68%',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 16,
  },

  myBubble: {
    backgroundColor: '#C7E2FF',
    marginLeft: 8,
    borderTopLeftRadius: 3,
  },

  otherBubble: {
    backgroundColor: '#D2F5E5',
    marginRight: 8,
    borderTopRightRadius: 3,
  },

  messageText: {
    fontSize: 10,
    lineHeight: 15,
    color: '#222222',
  },

  inputContainer: {
    minHeight: 43,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    marginHorizontal: 9,
    marginBottom: 10,
    paddingLeft: 16,
    paddingRight: 7,
  },

  input: {
    flex: 1,
    fontSize: 10,
    color: '#222222',
    paddingVertical: 10,
  },

  sendButton: {
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: '#E7F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sendText: {
    color: '#0785F7',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;

