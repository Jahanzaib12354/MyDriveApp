
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
chatList: {
  flex: 1,
},
  header: {
    height: 95,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },

  backArrow: {
    fontSize: 35,
    color: '#222222',
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222222',
  },

  headerSpace: {
    width: 18,
  },

  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    gap: 8,
    backgroundColor: '#F8F8F8',
    marginTop: 8,
  },

  tabButton: {
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 22,
    backgroundColor: '#EEEEEE',
  },

  activeTab: {
    backgroundColor: '#087FF5',
  },

  tabText: {
    fontSize: 12,
    color: '#777777',
    fontWeight: '500',
  },

  activeTabText: {
    color: '#FFFFFF',
  },

  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 13,
    minHeight: 75,
    borderBottomWidth: 1,
    borderBottomColor: '#D9DDE2',
    backgroundColor: '#EAF2FC',
  },

  activeChat: {
    backgroundColor: '#0785F7',
  },

  profileImage: {
    width: 43,
    height: 43,
    borderRadius: 25,
    marginRight: 11,
  },

  chatInfo: {
    flex: 1,
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  name: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#222222',
  },

  activeName: {
    color: '#FFFFFF',
  },

  date: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#222222',
    marginLeft: 5,
  },

  activeDate: {
    color: '#FFFFFF',
  },

  status: {
    fontSize: 10,
    color: '#777777',
    marginTop: 4,
  },

  activeStatus: {
    color: '#FFFFFF',
  },

  message: {
    fontSize: 11,
    color: '#333333',
    marginTop: 5,
  },

  activeMessage: {
    color: '#FFFFFF',
  },

  emptyBox: {
    padding: 35,
    alignItems: 'center',
  },

  emptyText: {
    fontSize: 16,
    color: '#777777',
  },
});

export default styles;

