import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, Alert, Button, StatusBar, StyleSheet  } from 'react-native';

export default class LoginForm extends Component {

  constructor() {
 
    super()
 
    this.state = {
 
      UserEmail:'',
      UserPassword:''
 
    }
 
  }
 
UserRegistrationFunction = () => {

const { UserEmail }  = this.state ;
 const { UserPassword }  = this.state ;

   
      fetch('http://costking.org/test/index.php/helloworld', {
         method: 'POST',
         
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: UserEmail,
    password: UserPassword
  })
      })
      .then((response) => response.text())
      .then((responseJson) => {
         console.log(responseJson);
        Alert.alert(responseJson);
         })
      .catch((error) => {
         console.error(error);
          Alert.alert("error");
      });
   }
   render(){
     return(
      <View style={styles.container}>

        <TextInput style = {styles.input}
               autoCapitalize="none"
               
               autoCorrect={false}
               //keyboardType='email-address'
               //returnKeyType="next"

               placeholder='Email or Mobile Num'
               onChangeText={email => this.setState({UserEmail : email})}
               placeholderTextColor='rgba(225,225,225,0.7)'/>

            <TextInput style = {styles.input}   
              //returnKeyType="go"
              //ref={(input)=> this.passwordInput = input}

              placeholder='Password'
              onChangeText={password => this.setState({UserPassword : password})}
              placeholderTextColor='rgba(225,225,225,0.7)'
              secureTextEntry/>

              

            <TouchableOpacity style={styles.buttonContainer} onPress={this.UserRegistrationFunction}   >
              
              <Text  style={styles.buttonText}>LOGIN</Text>
            
            </TouchableOpacity>
           </View>
           
        );
  }
    

}


const styles = StyleSheet.create({
    container: {
     padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer:{
        backgroundColor: 'rgba(90,58,20,0.2)',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }

});
