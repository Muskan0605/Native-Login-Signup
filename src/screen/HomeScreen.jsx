import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from './../utils/colors';
import { useNavigation } from 'expo-router';

const HomeScreen = () => {

  // for navigation from one page to another
  const navigation = useNavigation();

  //for handling login screen
  const handleLogin = () => {
    navigation.navigate("LOGIN");
  }

  // for handling signup screen
  const handleSignup = () => {
    navigation.navigate("SIGNUP");
  }
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo}/>
      <Image source={require("../assets/man.png")} style={styles.bannerImage}/>
      <Text style={styles.title}>Please Login Carefully!!</Text>
      <Text style={styles.subTitle}>A demo project of React-Native which is the login and signup page.</Text>
      <View style={styles.button}>
        <TouchableOpacity style={[ styles.loginButton, {backgroundColor: colors.primary} ]} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[ styles.loginButton, ]} onPress={handleSignup}>
          <Text style={styles.signUpButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
    },
    logo: {
       height: 40,
       width: 140,
       marginVertical: 30,
    },
    bannerImage: {
        height: 250,
        width: 231,
        marginVertical: 20,
    },
    title: {
        fontSize: 60,
        fontStyle: "italic",
        fontWeight: "500",
        textAlign: "center",
        paddingHorizontal: 20,
        color: colors.primary,
        marginTop: 50,
    },
    subTitle: {
      fontSize: 20,
      textAlign: "center", 
      color: colors.secondary,
      paddingHorizontal: 20,
      marginTop: 20,
      marginVertical: 20,
    },
    button: {
      flexDirection: "row",
      marginTop: 50,
      borderWidth: 2,
      borderColor: colors.primary,
      width: "80%",
      height: 60,
      borderRadius: 100,
    },
    loginButton: {
      justifyContent: "center",
      alignItems: "center",
      width: "50%",
      borderRadius: 98,
    },
    loginButtonText: {
      color: colors.white,
      fontSize: 23,
      fontStyle: "italic",
      fontWeight: "500",
    },
    signUpButtonText: {
      fontSize: 23,
      fontStyle: "italic",
      fontWeight: "500",
    }
})

