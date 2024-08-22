import { View, StyleSheet, SafeAreaView, ScrollView, Image, Text } from "react-native";
import {useSelector} from 'react-redux';
import BackButton from '../../components/BackButton/BackButton';
import { horizontalScale, scaleFontSize, verticalScale } from "../../styles/scaling";
import Badge from '../../components/Badge/Badge';
import Heading from '../../components/Heading/Heading';
import { getFontFamily } from "../../assets/fonts/helper";
import Button from "../../components/Button/Button";

const SingleDonationItem = ({navigation, route}) => {
  const donationItemInformation = useSelector(
    state => state.donationItems.selectedDonationInformation,
  );
  const params = route.params;
  console.log('params : ', params);

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <BackButton onPress={() => navigation.goBack()} />
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode={'cover'}
            source={{uri: params.image}}
          />
        </View>
        <View style={styles.badgeContainer}>
          <Badge title={params.badgeTitle} />
        </View>
        <View style={styles.informationContainer}>
          <Heading title={params.name} type={1} color={'#022150'} />
          <View style={styles.informationTextContainer}>
            <Text style={styles.informationText}> {params.description} </Text>
          </View>
        </View>

      </ScrollView>
      <View style={styles.donationButtonContainer}>
        <Button title={'Donate'}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: horizontalScale(20),
    paddingTop: verticalScale(10),
    paddingRight: horizontalScale(22),
  },
  image: {
    width: '100%',
    height: verticalScale(240),
    borderRadius: horizontalScale(22),
  },
  imageContainer: {
    marginTop: verticalScale(12),

  },
  badgeContainer: {
    marginTop: verticalScale(24),
  },
  informationContainer: {
    marginTop: verticalScale(16),
  },
  informationTextContainer: {
    marginTop: verticalScale(7),
    width: horizontalScale(304),
  },
  informationText: {
    color: '#000000',
    lineHeight: verticalScale(22),
    fontSize: scaleFontSize(14),
    fontFamily: getFontFamily('Inter', '600'),
    textAlign: 'left'
  },
  donationButtonContainer: {
    paddingBottom: verticalScale(20),
  }

});

export default SingleDonationItem;
