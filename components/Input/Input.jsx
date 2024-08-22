import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {getFontFamily} from '../../assets/fonts/helper';
import {scaleFontSize, verticalScale} from '../../styles/scaling';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

const Input = props => {
  const [value, setValue] = useState('');

  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <View>
        <TextInput
          keyboardType={props.keyboardType ? props.keyboardType : 'default'}
          placeholder={props.placeholder ? props.placeholder : null}
          style={styles.input}
          placeholderTextColor={'#022150'}
          value={value}
          onChangeText={e => {
            setValue(e);
            props.onChangeText(e);
          }}
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(30),
    color: '#36455A',
  },
  input: {
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167,167,167,0.5)',
  },
  inputSection: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Input;
