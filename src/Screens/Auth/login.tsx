import { View, Text,SafeAreaView } from 'react-native';
import React from 'react';
import CustomHeader from '../../Components/customeHeader';
import { logo } from '../../utiles/images';
const login = () => {
  return (
    <SafeAreaView>
      <CustomHeader title1={"Home"} title2={"Page"} img={logo}/>
      <Text style={{}}>HElloe</Text>
    </SafeAreaView>
  );
};

export default login;


// import { useNavigation } from "@react-navigation/native";
// import React, { useContext, useState } from "react";
// import {
//   Alert,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   View,
//   TextInput,
//   Image
// } from "react-native";
// import SafeAreaView from "react-native-safe-area-view";
// import {
//   HeaderLine,
//   PrimaryButton,
//   Separator,
//   // TextInput,
//   KeyboardView,
//   Text,
// } from "../components";
// import { AuthenticationContext } from "../context";
// import { useLocalization } from "../localization";
// import NavigationNames from "../navigations/NavigationNames";
// import { AuthService } from "../services";
// import { useTheme } from "../theme";
// import forwardArrow from '../../assets/forwardArrow.png';
// export const LoginScreen = () => {
//   const authContext = useContext(AuthenticationContext);
//   const navigation = useNavigation();
//   const { getString } = useLocalization();
//   const { colors } = useTheme();

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [type, setType] = useState("Email");
//   const [number, setNumber] = useState("");
//   const [email, setEmail] = useState("");

//   const onClickLogin = () => {
//     if (username === "" || password === "") {
//       Alert.alert(getString("required_login_inputs"));
//       return;
//     }
//     // AuthService.login(username, password)
//     //   .then(async (user: any) => {
//     //     await authContext.login(user);
//     //     navigation.goBack();
//     //   })
//     //   .catch((e) => Alert.alert(e.message));
//   };

//   const onClickRegister = () => {
//     navigation.navigate(NavigationNames.RegisterScreen);
//   };

//   return (
//     <SafeAreaView style={styles.container}
//      >
//       <HeaderLine />
//       <KeyboardView style={styles.content}>
       
//         <ScrollView contentContainerStyle={styles.contentContainerStyle}>
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "center",
//             marginTop: 10,
//           }}
//         >
//           <TouchableOpacity
//             style={{
//               paddingVertical: 10,
//               paddingHorizontal: 20,
//               borderRadius: 10,
//               borderWidth: type === "Email" ? 0.5 : 0,
//               marginRight: 10,
//             }}
//             onPress={() => setType("Email")}
//           >
//             <Text style={{color: type === "Email" ? '#000':'#6F6E73'}}>Email</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{
//               paddingVertical: 10,
//               paddingHorizontal: 20,
//               borderRadius: 10,
//               borderWidth: type === "Phone" ? 0.5 : 0,
//               marginRight: 10,
//             }}
//             onPress={() => setType("Phone")}
//           >
//             <Text style={{color:type === "Phone" ? '#000':'#6F6E73'}}>Phone</Text>
//           </TouchableOpacity>
//         </View>
//           {/* <Text
//             style={[
//               styles.titleText,
//               {
//                 color: colors.primaryColor,
//               },
//             ]}
//           >
//             {getString("login_title")}
//           </Text> */}
//           <View style={{marginTop:20}}>
//           {type === "Phone" ?
//             <TextInput
//             style={{
//               height: 40,
//               margin: 12,
//               borderWidth: number ? 1 : 0.5,
//               padding: 10,
//               borderRadius: 5,
//               borderColor: number ? "#B072FF" : null
//             }}
//             onChangeText={setNumber}
//             value={number}
//             placeholder={"Ex (337) 378 8383"}
//             keyboardType={"number-pad"}
//           />
//           :
//           <TextInput
//             style={{
//               height: 40,
//               margin: 12,
//               borderWidth: email ? 1 : 0.5,
//               padding: 10,
//               borderRadius: 5,
//               borderColor: email ? "#B072FF" : null
//             }}
//             onChangeText={setEmail}
//             value={email}
//             placeholder={"johndoe@gmail.com"}
//             keyboardType={"email-address"}
//           />}
//           </View>
          
         
//           <TouchableOpacity
//             style={[styles.registerButton,{backgroundColor: number ? "#B072FF" : '#BEBEC2' }]}
//             // onPress={onClickRegister}
//           >
//             <View style={{flexDirection:'row',alignItems:'center'}}>
//             <Text style={{ color: '#FFFFFF' }}>
//             Continue
//             </Text>
//             <Image style={{width:6,height:10,left:10}} source={forwardArrow}/>
//             </View>
//           </TouchableOpacity>
//             <View style={{justifyContent:'center',alignItems:'center',marginVertical:30}}>
//           <Text style={{color:'#6F6E73'}}>by clicking continue you must agree to near labs
//             </Text>
//             <Text  style={{color:'#B072FF'}}>Terms & Conditions ans Privacy Policy</Text>
//             </View>

//             <View style={{borderWidth:0.5,borderColor:'#6F6E73'}}/>
//             <Text style={{color:'#000000',textAlign:'center',marginVertical:20}}>Already have NEAR account?
//             </Text>
//             <TouchableOpacity
//             style={[styles.registerButton,{backgroundColor:'#000'}]}
//             // onPress={onClickRegister}
//           >
//             <View style={{flexDirection:'row',alignItems:'center'}}>
//             <Text style={{ color: '#FFFFFF' }}>
//             Log in with NEAR
//             </Text>
//             <Image style={{width:6,height:10,left:10}} source={forwardArrow}/>
//             </View>
//           </TouchableOpacity>
//         </ScrollView>
//       </KeyboardView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   content: {
//     flex: 1,
//   },
//   contentContainerStyle: {
//     flexGrow: 1,
//     // justifyContent: "center",
//     padding: 16,
//   },
//   titleText: {
//     fontSize: 42,
//     fontFamily: "default-light",
//     marginBottom: 24,
//   },
//   registerButton: {
//     alignSelf: "center",
//     marginTop: 12,
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     backgroundColor:'#BEBEC2',
//     borderRadius:10,
//   },
// });




