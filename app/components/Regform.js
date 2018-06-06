import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class Regform extends Component {
  constructor(props) {
      super(props);
      this.state = {
          route: 'Create Account',
          username: '',
          emailid: '',
          password: '',
          rememberpassword: '',
      };
  }

  userSignUp (e) {
      this.props.onSignUp(this.state.username, this.state.emailid, this.state.password);
      e.preventDefault();
  }

  toggleRoute (e) {
      let alt = (this.state.route === 'Create Account');
      this.setState({ route: alt });
      e.preventDefault();
  }

  render() {
    let alt = (this.state.route === 'Create Account'); 
    return (
      <ScrollView style={styles.regform}>
          <Text style={styles.header}>{this.state.route}</Text>

          <TextInput 
          style={styles.textinput} 
          placeholder='User Name'
          autoCapitalize='none'
          autoCorrect={false}
          autoFocus={true}
          value={this.state.username}
          onChangeText={(text) => this.setState({ username: text })} 
          underlineColorAndroid={'#ef589c'} />

          <TextInput 
          style={styles.textinput} 
          placeholder='Email id'
          autoCapitalize='none'
          autoCorrect={false}
          autoFocus={true}
          keyboardType='email-address'
          value={this.state.emailid}
          onChangeText={(text) => this.setState({ emailid: text})} 
          underlineColorAndroid={'#ef589c'} />

          <TextInput 
          style={styles.textinput} 
          placeholder='Password'
          autoCapitalize='none'
          autoCorrect={false} 
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text})} 
          underlineColorAndroid={'#ef589c'} />

          <CheckBox 
          title='Remember Password'
          checked={this.state.rememberpassword}
          />

          <View style={{margin: 7}}/>
          
          {/* <TouchableOpacity style={styles.button}> */}
          <Button onPress={(e) => this.userSignUp(e)} color='#ef589c' title={this.state.route}/>
                <Text style={{fontSize: 16, color: '#fff'}} onPress={(e) => this.toggleRoute(e)}>{alt}</Text>
          {/* </TouchableOpacity> */}
      
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    padding: 20,
  },
  header: {
      fontSize: 24,
      color: '#fff',
      paddingBottom: 10,
      marginBottom: 40,
    borderBottomColor: '#ef589c',
    borderBottomWidth: 1
  },
  textinput: {
      alignSelf: 'stretch',
      height: 40,
      marginBottom: 30,
      color: '#000',
      borderBottomColor: '#f8f8f8',
      borderBottomWidth: 1
  },
//   button: {
//       alignSelf: 'stretch',
//       alignItems: 'center',
//       padding: 20,
//       backgroundColor: '#ef589c',
//       marginTop: 30
//   },
//   btntext: {
//       color: '#fff',
//       fontWeight: 'bold',
//   },
});