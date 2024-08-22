import { Text, View, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import {getFontFamily} from '../../assets/fonts/helper';
import { horizontalScale, scaleFontSize, verticalScale } from "../../styles/scaling";

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.isDisabled} style={[styles.button, props.isDisabled && styles.disabled ]}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    height: verticalScale(55),
    borderRadius: horizontalScale(50),
    justifyContent: 'center',
  },
  title: {
    fontFamily: getFontFamily('Inter', '500'),
    fontWeight: '500',
    fontSize: scaleFontSize(16),
    color: 'white',
    lineHeight: scaleFontSize(19),
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
  }
});
export default Button;
