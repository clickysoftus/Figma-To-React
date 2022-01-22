import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {darkgray, fontblack, purple, white} from '../../utiles/colors';
import {bold, medium, regular} from '../../utiles/fontFamily';
import {font4, font5} from '../../utiles/fontSize';
import {forwardArrow} from '../../utiles/images';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CustomHeader from '../../Components/customeHeader';

const CELL_COUNT = 6;
const Otp = props => {
  const [data, setdata] = useState(props?.route?.params?.data);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [propsOtp, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.main}>
      <CustomHeader title2={'Verification'} right={'cross'} />

      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={styles.container}>
        <View style={{alignItems: 'center'}}>
          <View style={{padding: 20}}>
            <Text style={styles.title}>
              We've sent a 6-digit verification code to the email address
            </Text>
            <Text style={styles.phoneTxt}>
              {data?.phone ? data.phone : data?.email}
            </Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.title}>Enter verification code</Text>
            <CodeField
              ref={ref}
              {...propsOtp}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <View
                  onLayout={getCellOnLayoutHandler(index)}
                  key={index}
                  style={[styles.cellRoot, isFocused && styles.focusCell]}>
                  <Text style={styles.cellText}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <TouchableOpacity
            style={[
              styles.registerButton,
              {
                backgroundColor:
                  value.length == CELL_COUNT ? purple : '#BEBEC2',
              },
            ]}
            disabled={value.length != CELL_COUNT}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: '#FFFFFF'}}>Continue</Text>
              <Image
                style={{width: 6, height: 10, left: 10}}
                source={forwardArrow}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{borderWidth: 1, borderColor: '#E9E6E6', marginTop: 30}}
          />

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{marginTop: 30, padding: 5}}>
              <Text
                style={{
                  color: fontblack,
                  fontFamily: medium,
                  fontSize: font4,
                }}>
                Didn't receive your code?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: 15, padding: 5}}>
              <Text
                style={{
                  color: purple,
                  fontFamily: medium,
                  fontSize: font4,
                }}>
                Send to a different email address
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: 15, padding: 5}}>
              <Text
                style={{color: purple, fontFamily: medium, fontSize: font4}}>
                Resend your code
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    backgroundColor: white,
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  top: {flex: 0.4, justifyContent: 'center', alignItems: 'center'},

  title: {
    fontFamily: regular,
    fontSize: font4,
    color: fontblack,
    textAlign: 'center',
  },
  phoneTxt: {
    fontFamily: regular,
    fontSize: font4,
    color: purple,
    textAlign: 'center',
    marginTop: 10,
  },
  codeFieldRoot: {marginTop: 20, width: '80%'},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: purple,
    borderWidth: 2,
    //   borderColor: primary,
  },

  cellRoot: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: darkgray,
    textAlign: 'center',
  },
  cellText: {
    height: 40,
    width: 40,
    fontSize: font5,
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    fontFamily: bold,
    //   color: purple
  },
  registerButton: {
    alignSelf: 'center',
    marginTop: 12,
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: '#BEBEC2',
    borderRadius: 10,
  },
});

export default Otp;
