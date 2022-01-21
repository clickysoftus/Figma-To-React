import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { font4 } from '../utiles/fontSize';
import { bold, semibold } from '../utiles/fontFamily';
import { gray, purple } from '../utiles/colors';

function CustomHeader(props) {
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.main,
        {backgroundColor: props?.bgColor ? props.bgColor : gray},
      ]}>
      <View style={styles.leftMain}>
       
      {props?.title1 ?
      <Text style={[styles.centerTxt,{color:purple}]}>{props?.title1}</Text>:null}
        <Text style={styles.centerTxt}>{props?.title2}</Text>
      </View>

      <View style={styles.rightMain}/>
          
        
    </View>
  );
}
const styles = StyleSheet.create({
    main: {
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center'
    },
    leftMain: {
      flexDirection: 'row',
      paddingLeft: 15,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    rightMain: {
      flexDirection: 'row',
      paddingRight: 15,
      justifyContent: 'flex-end',
      alignItems: 'center',
      flex: 0.05,
    },
   
    centerTxt: {fontSize: font4, fontFamily: bold},
  });

export default (CustomHeader);
