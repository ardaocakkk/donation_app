import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';
import Heading from '../../components/Heading/Heading';
import {useDispatch, useSelector} from 'react-redux';
import {resetToInitialState} from '../../redux/reducers/User';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import {setSelectedCategoryId} from '../../redux/reducers/Categories';
import {useEffect, useState} from 'react';
import donationItems, {
  resetToInitial,
  selectDonationItem,
} from '../../redux/reducers/DonationItems';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {Routes} from '../../navigation/Routes';

const Home = ({navigation}) => {
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donationItems);
  const dispatch = useDispatch();
  const [donationItems, setDonationItems] = useState([]);

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const categoryPageSize = 4;
  dispatch(() => resetToInitial());
  useEffect(() => {
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prevState => prevState + 1);
  }, []);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  useEffect(() => {
    const filteredItems = donations.items.filter(item =>
      item.categoryIds.includes(categories.selectedCategoryId),
    );
    console.log('filtered items : ', filteredItems);
    setDonationItems(filteredItems);
  }, [categories.selectedCategoryId]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerGreetingText}>Hello, </Text>
            <View style={styles.usernameBox} />
            <Heading
              title={`${user.firstName} ${user.lastName.slice(0, 1)}.`}
              color={'#022150'}
              type={1}
            />
          </View>
          <Image
            resizeMode={'contain'}
            source={{uri: user.profileImg}}
            style={styles.image}
          />
        </View>
        <View style={styles.searchBox}>
          <Search />
        </View>
        <Pressable style={styles.highlightedImageContainer}>
          <Image
            style={styles.highlightedImage}
            source={require('../../assets/images/highlighted_image.png')}
          />
        </Pressable>
        <View style={styles.flatListContainer}>
          <View style={{marginBottom: verticalScale(10)}}>
            <Heading title={'Select Category'} type={2} color={'#022150'} />
          </View>
          <FlatList
            horizontal={true}
            onEndReachedThreshold={0.5}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            onEndReached={() => {
              if (categoryList.length === categories.categories.length) {
                return;
              }
              setCategoryList([
                ...categoryList,
                ...pagination(
                  categories.categories,
                  categoryPage,
                  categoryPageSize,
                ),
              ]);
              setCategoryPage(prevState => prevState + 1);
            }}
            renderItem={item => (
              <View style={styles.categoryItem} key={item.item.categoryId}>
                <Tab
                  onPress={() => {
                    dispatch(setSelectedCategoryId(item.item.categoryId));
                  }}
                  tabId={item.item.categoryId}
                  title={item.item.name}
                  isInactive={
                    item.item.categoryId !== categories.selectedCategoryId
                  }
                />
              </View>
            )}
          />
        </View>
        {donationItems.length > 0 && (
          <View style={styles.donationItemsContainer}>
            {donationItems.map(item => {
              return (
                <View
                  key={item.donationItemId}
                  style={styles.singleDonationItem}>
                  <SingleDonationItem
                    img={item.image}
                    onPress={() => {
                      dispatch(selectDonationItem(item.donationItemId));
                      navigation.navigate(Routes.SingleDonationItem, {
                        donationItemId: item.donationItemId,
                        image: item.image,
                        name: item.name,
                        price: item.price,
                        description: item.description,
                        badgeTitle: categories.categories.filter(
                          val =>
                            val.categoryId === categories.selectedCategoryId,
                        )[0].name,
                      });
                    }}
                    donationTitle={item.name}
                    price={item.price}
                    badgeTitle={
                      categories.categories.filter(
                        val => val.categoryId === categories.selectedCategoryId,
                      )[0].name
                    }
                    key={item.donationItemId}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerGreetingText: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    fontWeight: '400',
    color: '#636776',
  },
  usernameBox: {
    marginTop: verticalScale(5),
  },
  image: {
    width: horizontalScale(50),
    height: horizontalScale(50),
  },
  searchBox: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
  },
  highlightedImageContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
  },
  highlightedImage: {
    width: '100%',
    height: verticalScale(160),
    borderRadius: horizontalScale(10),
  },
  flatListContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
  },
  categoryItem: {
    marginRight: horizontalScale(10),
  },
  donationItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexWrap: 'wrap',
  },
  singleDonationItem: {
    maxWidth: '49%',
  },
});

export default Home;
