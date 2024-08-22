import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Input from '../../components/Input/Input';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../styles/scaling';
import {useState} from 'react';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {getFontFamily} from '../../assets/fonts/helper';
import { Routes } from "../../navigation/Routes";

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={{marginBottom: verticalScale(24)}}>
          <Heading title={'Welcome Back!'} type={'1'} color={'#022150'} />
        </View>
        <View>
          <Input
            secureTextEntry={false}
            keyboardType={'email-address'}
            onChangeText={value => {
              setEmail(value);
            }}
            placeholder={'Enter your email'}
            label={'Email'}
          />
        </View>
        <View>
          <Input
            secureTextEntry={true}
            keyboardType={'email-address'}
            onChangeText={value => {
              setEmail(value);
            }}
            placeholder={'********'}
            label={'Password'}
          />
        </View>
        <View style={{marginTop: verticalScale(37)}}>
          <Button title={'Login'} />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(Routes.Register);
          }}
          style={styles.dontHaveAnAccountContainer}>
          <Text style={styles.dontHaveAnAccountText}>
            Don't Have an Account?
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginHorizontal: horizontalScale(24),
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(24),
  },
  dontHaveAnAccountContainer: {
    marginTop: verticalScale(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  dontHaveAnAccountText: {
    color: '#156CF7',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    fontFamily: getFontFamily('Inter', '700'),
  },
});

export default Login;
