import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Badge from '../Badge/Badge';
import Heading from '../Heading/Heading';
import {horizontalScale, verticalScale} from '../../styles/scaling';

const SingleDonationItem = ({img, badgeTitle, donationTitle, price, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{marginBottom: verticalScale(23)}}>
      <View>
        <View style={styles.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image resizeMode={'cover'} style={styles.image} source={{uri: img}} />
      </View>
      <View style={styles.donationContainer}>
        <Heading title={donationTitle} numberOfLines={1} type={3} color={'black'} />
        <View style={styles.priceBox}>
          <Heading title={`$${price}`} type={3} color={'#156CF7'} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: horizontalScale(140),
    height: horizontalScale(170),
    borderRadius: horizontalScale(20),
  },
  badge: {
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(10),
    left: horizontalScale(10),
  },
  donationContainer: {
    marginTop: verticalScale(16),
  },
  priceBox: {
    marginTop: verticalScale(5),
  }
});

export default SingleDonationItem;
