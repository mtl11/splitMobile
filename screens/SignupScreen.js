import {Text, View , TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import styles from '../styles/SignupScreenStyles';
const SignUpScreen = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [username, setUsername] = useState("");
    const [age, setAge] = useState(0);

    return(
        <SafeAreaView style={styles.modalView}>
        <View style={styles.dialogBox}>
            <Text style ={styles.bigText}>
                Sign Up for Split
            </Text>
            <View>
                <Text style = {styles.smallText}>
                    Enter Information:
                </Text>
                <TextInput
                    placeholder = {'First Name'}
                    style = {styles.userInput}
                    onChangeText={text => setUsername(text)}
                    autoCapitalize = {'none'}
                    autoCorrect = {false}
                />
                <TextInput
                    placeholder = {'Email'}
                    style = {styles.userInput}
                    onChangeText={text => setFirstName(text)}
                    autoCapitalize = {'none'}
                    autoCorrect = {false}
                />
                <TextInput
                    placeholder = {'Age'}
                    style = {styles.userInput}
                    onChangeText={text => setAge(text)}
                    autoCapitalize = {'none'}
                    autoCorrect = {false}
                    keyboardType = {'number-pad'}
                />
                <TextInput
                    placeholder = {'Password'}
                    style = {styles.userInput}
                    onChangeText={text => setEmail(text)}
                    autoCapitalize = {'none'}
                    autoCorrect = {false}
                    secureTextEntry={true}
                />
                <TextInput
                    placeholder = {'Re-enter Password'}
                    style = {styles.userInput}
                    onChangeText={text => setPassword(text)}
                    autoCapitalize = {'none'}
                    autoCorrect = {false}
                    secureTextEntry={true}
                />
                <TouchableOpacity style = {styles.buttonContainer} 
                onPress={() => {props.navigation.navigate('Login')}}>
                    <View>
                        <Text style = {styles.button}>
                            Sign Up
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.buttonContainerCancel}
                onPress={()=>{props.navigation.navigate('Login')}}>
                <View><Text style = {styles.cancelButton}
                    >Cancel</Text></View> 
                </TouchableOpacity>
                </View>
            </View>
    </SafeAreaView>
    )
}

export default SignUpScreen;