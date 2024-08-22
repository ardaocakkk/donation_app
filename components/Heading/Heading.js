import {StyleSheet, Text, View} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {scaleFontSize} from '../../styles/scaling';

const Heading = ({title, type, color, numberOfLines}) => {
  const styleToApply = () => {
    switch (type) {
      case 1: {
        return styles.title1;
      }
      case 2: {
        return styles.title2;
      }
      case 3: {
        return styles.title3;
      }
      default: {
        return styles.title1;
      }
    }
  };
  return (
    <View>
      <Text
        numberOfLines={numberOfLines ? numberOfLines : null}
        style={[styleToApply(), color && {color: color}]}>
        {title}
      </Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  title1: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
  },
  title2: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(24),
  },
  title3: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(22),
  },
});
