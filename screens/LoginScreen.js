import { StyleSheet, Text, View , Image, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

import fonts from '../constants/fonts';
import styles from '../styles/LoginScreenStyle';

const LoginScreen = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style ={styles.headerName} >
                Split
                </Text>
                <Image 
                style = {styles.img}
                source={{   
                    uri: 'https://upload.wikimedia.org/wikipedia/en/1/19/LearntoFlySurfacesEltonJohn.png',
                }}/>
                <View style={styles.dialogBox}>
                    <Text style = {styles.smallText}>
                            Enter Information:
                    </Text>
                        <View  style = {styles.userInput}>
                        <AntDesign name="user" size={24} color="gray" />
                        <TextInput
                            placeholder = {'Email'}
                            style = {{fontSize:20,width:"90%", fontFamily: fonts.main}}
                            onChangeText={text => setEmail(text)}
                            autoCapitalize = {'none'}
                            autoCorrect = {false}
                            keyboardType = {'email-address'}
                        />
                        </View>
                        <View  style = {styles.userInput}>
                        <AntDesign name="lock" size={24} color="gray" />
                        <TextInput
                            placeholder = {'Password'}
                            style = {{fontSize:20, width:"90%", fontFamily: fonts.main}}
                            onChangeText={text => setPassword(text)}
                            autoCapitalize = {'none'}
                            autoCorrect = {false}
                            secureTextEntry={true}
                        />
                        </View>
                </View>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity 
                style = {styles.authContainer}
                onPress={()=>{props.navigation.navigate('Home')}}>
                        <Text style={styles.titleText}>
                            Login 
                        </Text>
            </TouchableOpacity>
        <View style = {styles.authContainer2}>
            <Text style={styles.signUpTextNoBold}>Don't have an account ? </Text>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('SignUp')}}> 
                <View>
                    <Text style = {styles.signUpText}>
                        Sign Up
                    </Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
)
}
export default LoginScreen;