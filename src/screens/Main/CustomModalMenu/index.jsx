
import React from 'react';

import {View,Text,TouchableOpacity,Alert,Image,} from 'react-native';

import {LayoutDashboard,Car,Settings,CircleHelp,LogOut,ChevronRight,X,} from 'lucide-react-native';

import styles  from './styles';
const CustomModalMenu = ({ navigation, onClose }) => {

  const showMessage = (title) => {
    onClose();
    Alert.alert(
      title,
      `${title} screen is not connected yet.`
    );
  };

  const MenuItem = ({ icon: Icon, title, onPress }) => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Icon
        size={29}
        color="#1683FF"
        strokeWidth={2.2}
      />

      <Text style={styles.menuText}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>
          Menu
        </Text>

        <TouchableOpacity
          onPress={onClose}
          activeOpacity={0.7}
          style={styles.closeButton}
        >
          <X size={25} color="#333333" />
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      

{/* Profile Section */}
<TouchableOpacity
  style={styles.profile}
  activeOpacity={0.7}
  onPress={() => showMessage('Edit Profile')}
>
  <Image
    source={require('../../../assets/img3.png')}
    style={styles.avatarImage}
    resizeMode="cover"
  />

  <View style={styles.profileInfo}>
    <Text style={styles.profileName} numberOfLines={1}>
      Anastasia Sya
    </Text>

    <Text style={styles.editProfile}>
      Edit Profile
    </Text>
  </View>

  <ChevronRight size={19} color="#777777" />
</TouchableOpacity>



      <View style={styles.divider} />

      {/* Menu Items */}
      <View style={styles.menuContainer}>

        <MenuItem
          icon={LayoutDashboard}
          title="Home"
          onPress={() => {
            onClose();
            navigation.navigate('AlexScreen');
          }}
        />

        {/* <MenuItem
          icon={Car}
          title="My ride"
          onPress={() => showMessage('My Ride')}
        /> */}
      
             <MenuItem
                icon={Car}
                title="My ride"
                onPress={() => {
                onClose();
                navigation.navigate('MyRidesScreen');
             }}
                  />
       

        <MenuItem
          icon={Settings}
          title="Settings"
          onPress={() => { onClose();
            navigation.navigate('SettingScreen')}
             }
        />

        <MenuItem
          icon={CircleHelp}
          title="Help"
          onPress={() => { onClose();
            navigation.navigate('HelpScreen')}
          }
        />

      </View>

    

             <View style={styles.bottomSection}>
               <View style={styles.divider} />

             <TouchableOpacity
                  style={styles.logoutItem}
                  activeOpacity={0.7}
                  onPress={() => {
                   Alert.alert(
                    'Logout',
                       'Do you want to logout?',
                   [
                    {
                       text: 'Cancel',
                       style: 'cancel',
                   },
               {
                        text: 'Logout',
                         style: 'destructive',
                        onPress: () => {
                         navigation.getParent()?.reset({
                          index: 0,
                      routes: [
                  {
                    name: 'AuthStack',
                    state: {
                      routes: [
                        { name: 'LoginScreen' },
                      ],
                    },
                  },
                ],
              });
            },
          },
        ]
      );
    }}
  >
    <View style={styles.logoutIcon}>
      <LogOut size={19} color="#FFFFFF" />
    </View>

    <Text style={styles.logoutText}>
      Logout
    </Text>

    <ChevronRight size={19} color="#777777" />
  </TouchableOpacity>
</View>

    </View>
  );
};

export default CustomModalMenu;


