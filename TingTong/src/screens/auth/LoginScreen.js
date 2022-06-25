import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {login} from '../../redux/actions';

const LoginScreen = ({navigation}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  function onChangeText(val, key) {
    setFormData({...formData, [key]: val});
  }

  const handleLogin = function () {
    const {email, password} = formData;

    dispatch(login(email, password))
      .then(res => {
        console.warn('Login Successfully');
        console.log(res);
      })
      .catch(err => console.warn(err));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={formData.email}
        onChangeText={val => onChangeText(val, 'email')}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        value={formData.password}
        onChangeText={val => onChangeText(val, 'password')}
        maxLength={15}
        secureTextEntry={true}
      />

      <Button color="#3740FE" title="Login" onPress={() => handleLogin()} />
      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate('SignUp')}>
        Not Registered? Click here to Signup
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: '#fff',
    width: '100%',
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: 'center',
    borderColor: '#ccc',
    borderBottomWidth: 1,
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
