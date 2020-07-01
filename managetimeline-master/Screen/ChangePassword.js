import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    ListView,
    Keyboard,
    TextInput
} from 'react-native';

import styles from './styles.js'

class ChangePasswordController extends Component {
    /**
     * Default props
     */
    static defaultProps = {   
        backgroundColor :"white",
        submitText:"Save",
        placeHolderCurrentPassword:"Current Password",
        placeHolderNewPassword:"New Password",
        placeHolderConfirmPassword:"Confirm Password"
    };

    constructor(props) {
        super(props);
        this.state = {
            newPassword: "",
            currentPassword: "",
            confirmPassword: ""
        };
    }

    /**
     * Button Save pressed 
     */
    onbtnSavePress() {
        if (this.state.currentPassword.trim().length == 0) {
            console.log("Please enter current password");
        } else if (this.state.newPassword.trim().length == 0) {
            console.log("Please enter new password");
        } else if (this.state.newPassword != this.state.confirmPassword) {
            console.log("Password does not match");
        } else {
            Keyboard.dismiss();
            this.changePassword();
        }
    }

    /**
     * Call your webservice for update password
     */
    changePassword() {
        
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.bottomView,{backgroundColor:this.props.backgroundColor}]}>
                <View style={styles.inputView}>
                    <TextInput style={styles.inputText} placeholder={this.props.placeHolderCurrentPassword}
                        multiline={false} placeholderTextColor={"#3c3c3c"} autoCorrect={false} underlineColorAndroid={'transparent'}  secureTextEntry={true} onChangeText={(currentPassword) => this.setState({currentPassword})} value={this.state.currentPassword}></TextInput>
                </View>
                <View style={styles.inputView}>
                    <TextInput style={styles.inputText} placeholder={this.props.placeHolderNewPassword}
                        multiline={false} placeholderTextColor={"#3c3c3c"} autoCorrect={false} underlineColorAndroid={'transparent'}  secureTextEntry={true} onChangeText={(newPassword) => this.setState({newPassword})} value={this.state.newPassword}></TextInput>
                </View>
                <View style={styles.inputView}>
                    <TextInput style={styles.inputText} placeholder={this.props.placeHolderConfirmPassword}
                        multiline={false} placeholderTextColor={"#3c3c3c"} autoCorrect={false} underlineColorAndroid={'transparent'}  secureTextEntry={true} onChangeText={(confirmPassword) => this.setState({confirmPassword})} value={this.state.confirmPassword}></TextInput>
                </View>
                <TouchableOpacity style={styles.btnSave} activeOpacity={0.6} onPress={() => this.onbtnSavePress()}>
                    <Text style={styles.textSave} numberOfLines={1}>
                        {this.props.submitText}</Text>
                </TouchableOpacity>
                </View>
            </View>
           
        );
    }
}

export default ChangePasswordController