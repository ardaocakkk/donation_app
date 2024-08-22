import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../styles/scaling';
import {useRef, useState} from 'react';

const Tab = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress(props.tabId);
      }}
      style={[styles.tab, props.isInactive && styles.inactiveTab, tabWidth]}>
      <Text
        onTextLayout={e => {
          setWidth(e.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[styles.title, props.isInactive && styles.inactiveText]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    height: verticalScale(55),
    borderRadius: horizontalScale(50),
    justifyContent: 'center',
  },
  inactiveTab: {
    backgroundColor: '#F3F5F9',
  },
  title: {
    fontFamily: getFontFamily('Inter', '500'),
    fontWeight: '500',
    fontSize: scaleFontSize(14),
    color: 'white',
    lineHeight: scaleFontSize(17),
    textAlign: 'center',
  },

  inactiveText: {
    color: '#79869F',
  },
});
export default Tab;
