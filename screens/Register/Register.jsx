import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../styles/scaling';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {Routes} from '../../navigation/Routes';
import {getFontFamily} from '../../assets/fonts/helper';
import {useState} from 'react';
import BackButton from '../../components/BackButton/BackButton';
import {createUser} from '../../api/user';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: verticalScale(7)}}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={{marginBottom: verticalScale(24)}}>
          <Heading title={'Hello and Welcome !'} type={'1'} color={'#022150'} />
        </View>
        <View>
          <Input
            secureTextEntry={false}
            keyboardType={'default'}
            onChangeText={value => {
              setFullName(value);
              const name = value.split(' ');
              setFirstName(name[0]);
              setLastName(name[1]);
            }}
            placeholder={'Arda Ocak'}
            label={'First & Last Name'}
          />
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
          <Button
            onPress={async () => {
              await createUser(fullName, email, password);
            }}
            title={'Register'}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(Routes.Login);
          }}
          style={styles.dontHaveAnAccountContainer}>
          <Text style={styles.dontHaveAnAccountText}>
            Already Have an Account?
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
export default Register;
