import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, AppRegistry, KeyboardAvoidingView  } from 'react-native';
import LoginForm from './LoginForm';


export default class Login extends Component {
      render() {
            return (
            <View style={styles.container}>
            <View style={styles.loginContainer}>
                  <Image
                  resizeMode="contain"
                  style={styles.logo} 
                  source={require('../../components/images/logo.png')} />
            </View>
            

            <View style={styles.formContainer}>
                <LoginForm />  
            </View>
              
            
            </View>

            );
      }
}

const styles = StyleSheet.create({
      
      container: {
        flex: 1,
        backgroundColor: '#c1272d',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 200,
        height: 50
    }
});
