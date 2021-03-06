import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';
 
import {Actions} from 'react-native-router-flux';
 
export default class Form extends Component {
 
    constructor(props){
        super(props);
        this.state={
            phone:'',
            password: ''
        }
    }
    saveData =async()=>{
        const {phone,password} = this.state;
 
        //save data with asyncstorage
        let loginDetails={
            phone: phone,
            password: password
        }
 
        if(this.props.type !== 'Login')
        {
            AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));
 
            Keyboard.dismiss();
            alert("You successfully registered. Phone: " + phone + ' password: ' + password);
            this.login();
        }
        else if(this.props.type == 'Login')
        {
            try{
                let loginDetails = await AsyncStorage.getItem('loginDetails');
                let ld = JSON.parse(loginDetails);
 
                if (ld.phone != null && ld.password != null)
                {
                    if (ld.phone == phone && ld.password == password)
                    {
                        alert('Login Successful');
                        this.props.navigation.navigate('createSwitchNavigator')
                        
                    }
                    else
                    {
                        alert('Phone or Password does not exist!');
                    }
                }
 
            }catch(error)
            {
                alert(error);
            }
        }
    }
 
    showData = async()=>{
        let loginDetails = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);
        alert('phone: '+ ld.phone + ' ' + 'password: ' + ld.password);
    }
 
    render() {
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                onChangeText={(phone) => this.setState({phone})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Phone"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                keyboardType="phone-address"
                onSubmitEditing={()=> this.password.focus()}/>
                
                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#002f6c"
                ref={(input) => this.password = input}
                />
 
                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText} onPress={this.saveData}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
            
        )
    }
}
 
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: 300,
        backgroundColor: '#eeeeee', 
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});