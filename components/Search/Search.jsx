import {Text, View, StyleSheet, TextInput, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';
import {useRef, useState} from 'react';
import {text} from '@fortawesome/fontawesome-svg-core';

const Search = props => {
  const textInputRef = useRef(null);
  const handleFocus = () => {
    textInputRef.current.focus();
  };
  const [search, setSearch] = useState('');
  const handleSearch = text => {
    setSearch(text);
  };
  return (
    <Pressable onPress={handleFocus} style={styles.searchInputContainer}>
      <FontAwesomeIcon icon={faSearch} size={24} color={'#25C0FF'} />
      <TextInput
        value={search}
        onChangeText={value => handleSearch(value)}
        ref={textInputRef}
        style={[styles.searchInput, styles.searchInputText]}
        placeholder={'Search'}
        placeholderTextColor={'#686C7A'}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    marginLeft: horizontalScale(5),
  },
  searchInputText: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(14),
    color: '#686C7A',
    lineHeight: verticalScale(14),
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F5F9',
    paddingHorizontal: horizontalScale(16),
    height: verticalScale(50),
    borderRadius: 100,
    padding: 10,
  },
});

export default Search;
