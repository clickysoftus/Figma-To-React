import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {font4} from '../utiles/fontSize';
import {bold} from '../utiles/fontFamily';
import {darkgray, gray, purple} from '../utiles/colors';

function CustomHeader(props) {
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.main,
        {backgroundColor: props?.bgColor ? props.bgColor : gray},
      ]}>
      <View style={styles.leftMain}>
        {props?.title1 ? (
          <>
            <Image style={styles.img} source={props?.img} />
            <Text style={[styles.centerTxt, {color: purple}]}>
              {props?.title1}
            </Text>
          </>
        ) : null}
        <Text style={styles.centerTxt}>{props?.title2}</Text>
      </View>

      <View style={styles.rightMain}>
        {props?.right === 'cross' ? (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.circle}>
            <Text style={styles.circleTxt}>x</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftMain: {
    flexDirection: 'row',
    paddingLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.92,
  },
  rightMain: {
    paddingRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.08,
  },
  centerTxt: {fontSize: font4, fontFamily: bold},
  img: {width: 16, height: 18, marginRight: 5},
  circle: {backgroundColor: darkgray, borderRadius: 15},
  circleTxt: {paddingHorizontal: 9, paddingVertical: 3},
});

export default CustomHeader;
