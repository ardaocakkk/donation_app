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

const Badge = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 10;
  const badgeWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  return (
    <View style={[styles.badge, badgeWidth]}>
      <Text
        onTextLayout={e => {
          setWidth(e.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[styles.title]}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    height: verticalScale(22),
    borderRadius: horizontalScale(50),
    justifyContent: 'center',
  },
  title: {
    fontFamily: getFontFamily('Inter', '600'),
    fontWeight: '500',
    fontSize: scaleFontSize(10),
    color: 'white',
    lineHeight: scaleFontSize(12),
    textAlign: 'center',
  },
});
export default Badge;
