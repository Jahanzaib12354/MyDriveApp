
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
  
//   TouchableOpacity,
//   Image,
//   StatusBar,
// } from 'react-native';

// import styles from './styles';

// const MyRidesScreen = ({ navigation }) => {
//   const [activeTab, setActiveTab] = useState('Upcoming');

//   // Ride Card
//   const RideCard = ({ pending = false }) => {
//     return (
//       <View style={styles.rideCard}>

//         {/* Rider Blue Header */}
//         <View style={styles.riderHeader}>
//           <Image
//             source={require('../../../assets/img2.png')}
//             style={styles.profileImage}
//             resizeMode="cover"
//           />

//           <View style={styles.riderInfo}>
//             <View style={styles.nameRow}>
//               <Text style={styles.riderName}>
//                 John Smith
//               </Text>

//               <Text style={styles.riderLevel}>
//                 {' '} (Level 1 Rider)
//               </Text>
//             </View>

//             <Text style={styles.riderEmail}>
//               leilanielangel@gmail.com
//             </Text>

//             <Text style={styles.riderPhone}>
//               Phone: +12 345 6789
//             </Text>

//             <Text style={styles.rating}>
//               ★ 5.0
//             </Text>
//           </View>
//         </View>

//         {/* Car Details */}
//         <View style={styles.detailsContainer}>
//           <View style={styles.detailRow}>
//             <Text style={styles.detailLabel}>
//               Car Type
//             </Text>

//             <Text style={styles.detailValue}>
//               Honda HRV
//             </Text>
//           </View>

//           <View style={styles.detailRow}>
//             <Text style={styles.detailLabel}>
//               Car Seat
//             </Text>

//             <Text style={styles.detailValue}>
//               3/4 Seats Available
//             </Text>
//           </View>

//           <View style={styles.detailRow}>
//             <Text style={styles.detailLabel}>
//               Time & Date
//             </Text>

//             <Text style={styles.detailValue}>
//               Mon, Jan 15, 9:30 AM -{' '}
//               <Text style={styles.departing}>
//                 Departing Soon
//               </Text>
//             </Text>
//           </View>
//         </View>

//         {/* Locations and Buttons: Offering Ride Only */}
//         {!pending && (
//           <View style={styles.locationContainer}>

//             <View style={styles.routeLine} />

//             {/* Starting Location */}
//             <View style={styles.locationRow}>
//               <View style={styles.greyDot} />

//               <View style={styles.locationBox}>
//                 <Text style={styles.locationText}>
//                   Mall Central
//                 </Text>

//                 <View style={styles.locationActions}>
//                   <TouchableOpacity
//                     style={styles.smallIcon}
//                     activeOpacity={0.7}
//                   >
//                     <Text style={styles.searchIcon}>
//                       ⌕
//                     </Text>
//                   </TouchableOpacity>

//                   <TouchableOpacity
//                     style={styles.mapIcon}
//                     activeOpacity={0.7}
//                   >
//                     <Text style={styles.greenPin}>
//                       ◎
//                     </Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>

//             {/* Destination */}
//             <View style={styles.locationRow}>
//               <View style={styles.redDot} />

//               <View style={styles.locationBox}>
//                 <Text style={styles.locationText}>
//                   University Campus
//                 </Text>

//                 <View style={styles.locationActions}>
//                   <TouchableOpacity
//                     style={styles.smallIcon}
//                     activeOpacity={0.7}
//                   >
//                     <Text style={styles.searchIcon}>
//                       ⌕
//                     </Text>
//                   </TouchableOpacity>

//                   <TouchableOpacity
//                     style={styles.redMapIcon}
//                     activeOpacity={0.7}
//                   >
//                     <Text style={styles.redPin}>
//                       ◎
//                     </Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>

//             {/* Bottom Buttons */}
//             <View style={styles.bottomActions}>
              
//                 <Text style={styles.chatIcon}>
//                   ☏
//                 </Text>
            

//               <TouchableOpacity
//                 style={styles.activeButton}
//                 activeOpacity={0.7}
//               >
//                 <Text style={styles.activeText}>
//                   Active
//                 </Text>
//               </TouchableOpacity>
//             </View>

//           </View>
//         )}

//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar
//         backgroundColor="#F5F5F5"
//         barStyle="dark-content"
//       />

//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           onPress={() => navigation.goBack()}
//           style={styles.backButton}
//           activeOpacity={0.7}
//         >
//           <Text style={styles.backArrow}>
//             ‹
//           </Text>
//         </TouchableOpacity>

//         <View style={styles.headerTextContainer}>
//           <Text style={styles.headerTitle}>
//             My Rides
//           </Text>

//           <Text style={styles.headerSubtitle}>
//             Manage your offered and joined rides
//           </Text>
//         </View>
//       </View>

//       {/* Tabs */}
    
//       <View style={styles.tabsContainer}>
//   <Text style={styles.selectedTab}>Upcoming (2)</Text>

//   <Text style={styles.tabText}>Completed (0)</Text>

//   <Text style={styles.tabText}>Cancelled (0)</Text>
// </View>

//       {/* Rides List */}
//       <View
//         style={styles.scrollView}
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         {activeTab === 'Upcoming' ? (
//           <>
//             <Text style={styles.sectionTitle}>
//               Rides You're Offering
//             </Text>

//             <RideCard />

//             <Text style={styles.sectionTitle}>
//               Pending Requests
//             </Text>

//             <RideCard pending />
//           </>
//         ) : (
//           <View style={styles.emptyContainer}>
//             <Text style={styles.emptyText}>
//               No {activeTab.toLowerCase()} rides found.
//             </Text>
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// export default MyRidesScreen;



import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

import styles from './styles';

const MyRidesScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Upcoming');

  // Ride Card
  const RideCard = ({ pending = false }) => {
    return (
      <View style={styles.rideCard}>
        {/* Rider Blue Header */}
        <View style={styles.riderHeader}>
          <Image
            source={require('../../../assets/img2.png')}
            style={styles.profileImage}
            resizeMode="cover"
          />

          <View style={styles.riderInfo}>
            <View style={styles.nameRow}>
              <Text style={styles.riderName}>
                John Smith
              </Text>

              <Text style={styles.riderLevel}>
                {' '}(Level 1 Rider)
              </Text>
            </View>

            <Text style={styles.riderEmail}>
              leilanielangel@gmail.com
            </Text>

            <Text style={styles.riderPhone}>
              Phone: +12 345 6789
            </Text>

            <Text style={styles.rating}>
              ★ 5.0
            </Text>
          </View>
        </View>

        {/* Car Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              Car Type
            </Text>

            <Text style={styles.detailValue}>
              Honda HRV
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              Car Seat
            </Text>

            <Text style={styles.detailValue}>
              3/4 Seats Available
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              Time & Date
            </Text>

            <Text style={styles.detailValue}>
              Mon, Jan 15, 9:30 AM -{' '}
              <Text style={styles.departing}>
                Departing Soon
              </Text>
            </Text>
          </View>
        </View>

        {/* Locations: Offering Ride Only */}
        {!pending && (
          <View style={styles.locationContainer}>
            <View style={styles.routeLine} />

            {/* Starting Location */}
            <View style={styles.locationRow}>
              <View style={styles.greyDot} />

              <View style={styles.locationBox}>
                <Text style={styles.locationText}>
                  Mall Central
                </Text>

                <View style={styles.locationActions}>
                  <TouchableOpacity
                    style={styles.smallIcon}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.searchIcon}>
                      ⌕
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.mapIcon}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.greenPin}>
                      ◎
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Destination */}
            <View style={styles.locationRow}>
              <View style={styles.redDot} />

              <View style={styles.locationBox}>
                <Text style={styles.locationText}>
                  University Campus
                </Text>

                <View style={styles.locationActions}>
                  <TouchableOpacity
                    style={styles.smallIcon}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.searchIcon}>
                      ⌕
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.redMapIcon}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.redPin}>
                      ◎
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Bottom Buttons */}
            <View style={styles.bottomActions}>
              
                <Text style={styles.chatIcon}>
                  ☏
                </Text>
             

              <TouchableOpacity
                style={styles.activeButton}
                activeOpacity={0.7}
              >
                <Text style={styles.activeText}>
                  Active
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#F5F5F5"
        barStyle="dark-content"
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Text style={styles.backArrow}>
            ‹
          </Text>
        </TouchableOpacity>

        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>
            My Rides
          </Text>

          <Text style={styles.headerSubtitle}>
            Manage your offered and joined rides
          </Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {['Upcoming', 'Completed', 'Cancelled'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              activeTab === tab && styles.selectedTab,
            ]}
            onPress={() => setActiveTab(tab)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.selectedTabText,
              ]}
            >
              {tab}{' '}
              {tab === 'Upcoming' ? '(2)' : '(0)'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Scrollable Rides List */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        {activeTab === 'Upcoming' ? (
          <>
            <Text style={styles.sectionTitle}>
              Rides You're Offering
            </Text>

            <RideCard />

            <Text style={styles.sectionTitle}>
              Pending Requests
            </Text>

            <RideCard pending />
          </>
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No {activeTab.toLowerCase()} rides found.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default MyRidesScreen;
