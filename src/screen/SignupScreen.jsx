import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { colors } from '../utils/colors'
import { useNavigation } from 'expo-router'

const SignupScreen = () => {
     const navigation = useNavigation();
    const [secureEntry, setSecureEntry] = useState(true);

    // handle arrow button
    const handleGoBack = () => {
        navigation.goBack();
    }

    // handling login btn in signup screen
    const handleLogin = () => {
        navigation.navigate("LOGIN");
    }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowButton} onPress={handleGoBack}>
        <Ionicons name={"arrow-back-outline"} color={colors.primary} size={25}/>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Let's Get</Text>
        <Text style={styles.headingText}>Started!!</Text>
      </View>

      {/* form */}
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
        <Ionicons name={"mail-outline"} size={30} color={colors.secondary}/>
            <TextInput style={styles.textInput} placeholder='Enter your email' placeholderTextColor={colors.secondary} keyboardType='email-address'/>
        </View> 
         </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
        <SimpleLineIcons name={"lock"} size={30} color={colors.secondary}/>
            <TextInput style={styles.textInput} placeholder='Enter your password' placeholderTextColor={colors.secondary} secureTextEntry={secureEntry}/>
               {/* when we will click on eye btn the password can be seen.. due to onPress toggling */}
           <TouchableOpacity onPress={() => {
            setSecureEntry((prev) => !prev);  
           }}>
              <SimpleLineIcons name={"eye"} size={20} color={colors.secondary}/>
           </TouchableOpacity>
        </View>
        </View>

        <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
        <SimpleLineIcons name={"screen-smartphone"} size={30} color={colors.secondary}/>
            <TextInput style={styles.textInput} placeholder='Enter your phone no' placeholderTextColor={colors.secondary} secureTextEntry={secureEntry} keyboardType='number-pad'/>
               {/* when we will click on eye btn the password can be seen.. due to onPress toggling */}
        </View>
          </View>
        
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Sign up</Text>
          </TouchableOpacity>

          <Text style={styles.subText}>or continue with</Text>

          <TouchableOpacity style={styles.googleButton}>
            <Image source={require("../assets/google.png")}/>
            <Text style={styles.googleText}>Google</Text>
          </TouchableOpacity>

          <View style={styles.footerText}>
            <Text style={styles.accountText}>Already have an account!</Text>
            <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.signupFooter}>Login</Text>
            </TouchableOpacity>
          </View>
      
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
    },
    arrowButton: {
        height: 40,
        width: 40,
        backgroundColor: colors.gray,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        marginVertical: 20,
    },
    headingText: {
        fontSize: 32,
        fontWeight: "500",
        color: colors.primary,
        fontStyle: "italic",
    },
    formContainer: {
        marginTop: 20,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 100,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginVertical: 4,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontStyle: "italic",
    },
    forgotPasswordText: {
        textAlign: "right",
        color: colors.primary,
        fontStyle: "italic",
        fontWeight: "500",
        marginVertical: 10,
    },
    loginButton: {
        backgroundColor: colors.primary,
        borderRadius: 100,
        marginTop: 30,
    },
    loginText: {
        color: colors.white,
        fontSize: 25,
        fontWeight: "500",
        fontStyle: "italic",
        textAlign: "center",
        padding: 10,
    },
    subText: {
        fontSize: 18,
        fontStyle: "italic",
        textAlign: "center",
        marginTop: 20,
        color: colors.primary,
    },
    googleButton: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: colors.primary,
        marginVertical: 20,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        gap: 10,
    },
    googleText: {
        fontSize: 25,
        fontWeight: "500",
        fontStyle: "italic",
        textAlign: "center",
    },
    footerText: {
        flexDirection: "row",
        marginVertical: 2,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },
    accountText: {
        fontSize: 18,
        fontStyle: "italic",
        color: colors.primary,
    },
    signupFooter: {
        fontSize: 18,
        fontStyle: "italic",
        color: colors.primary,
        fontWeight: "500",
    }
})