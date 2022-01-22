import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  SafeAreaView,
  Text,
} from 'react-native';
import {logo, forwardArrow} from '../../utiles/images';
import CustomHeader from '../../Components/customeHeader';
import {fontblack, fontgray, white} from '../../utiles/colors';
import {bold, medium} from '../../utiles/fontFamily';
import {font4} from '../../utiles/fontSize';
const LoginScreen = () => {
  const navigation = useNavigation();
  const [type, setType] = useState('Email');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title1={'Home'} title2={'Page'} img={logo} />
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={[
              styles.btnMain,
              {
                borderWidth: type === 'Email' ? 0.5 : 0,
              },
            ]}
            onPress={() => {
              setType('Email'), setNumber('');
            }}>
            <Text style={{color: type === 'Email' ? '#000' : fontgray}}>
              Email
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnMain,
              {
                borderWidth: type === 'Phone' ? 0.5 : 0,
              },
            ]}
            onPress={() => {
              setType('Phone'), setEmail('');
            }}>
            <Text style={{color: type === 'Phone' ? '#000' : fontgray}}>
              Phone
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 20}}>
          {type === 'Phone' ? (
            <TextInput
              style={[
                styles.input,
                {
                  borderWidth: number ? 1 : 0.5,
                  borderColor: number ? '#B072FF' : null,
                },
              ]}
              onChangeText={setNumber}
              value={number}
              placeholder={'Ex (337) 378 8383'}
              keyboardType={'number-pad'}
            />
          ) : (
            <TextInput
              style={[
                styles.input,
                {
                  borderWidth: email ? 1 : 0.5,
                  borderColor: email ? '#B072FF' : null,
                },
              ]}
              onChangeText={setEmail}
              value={email}
              placeholder={'johndoe@gmail.com'}
              keyboardType={'email-address'}
            />
          )}
        </View>

        <TouchableOpacity
          style={[
            styles.registerButton,
            {backgroundColor: number || email ? '#B072FF' : '#BEBEC2'},
          ]}
          disabled={type === 'Email' ? !email : !number}
          onPress={() => {
            setEmail(''),
              setNumber(''),
              navigation.navigate('Otp', {
                data: {
                  email: type === 'Email' ? email : '',
                  phone: type === 'Phone' ? number : '',
                },
              });
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.btnTxt}>Continue</Text>
            <Image style={styles.fArrow} source={forwardArrow} />
          </View>
        </TouchableOpacity>
        <View style={styles.bottom}>
          <Text style={styles.desc}>
            by clicking continue you must agree to near labs
          </Text>
          <Text style={[styles.desc, {color: '#B072FF'}]}>
            Terms & Conditions ans Privacy Policy
          </Text>
        </View>

        <View style={styles.line} />
        <Text style={styles.fontstyle1}>Already have NEAR account?</Text>
        <TouchableOpacity
          style={[styles.registerButton, {backgroundColor: '#000'}]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.btnTxt}>Log in with NEAR</Text>
            <Image style={styles.fArrow} source={forwardArrow} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
    padding: 16,
  },

  registerButton: {
    alignSelf: 'center',
    marginTop: 12,
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: '#BEBEC2',
    borderRadius: 10,
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  btnMain: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  input: {height: 40, margin: 12, padding: 10, borderRadius: 5},
  fArrow: {width: 6, height: 10, left: 10},
  btnTxt: {color: white, fontFamily: bold, fontSize: font4},
  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  desc: {color: fontgray, fontSize: font4, fontFamily: medium},
  line: {borderWidth: 1, borderColor: '#E9E6E6'},
  fontstyle1: {
    color: fontblack,
    fontFamily: medium,
    fontSize: font4,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default LoginScreen;
