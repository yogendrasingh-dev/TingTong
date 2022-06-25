import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {register} from '../../redux/actions';

const SignupScreen = ({navigation}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const dispatch = useDispatch();

  function onChangeText(val, key) {
    setFormData({...formData, [key]: val});
  }

  const handleResiter = function () {
    const {email, password, confirmPassword} = formData;
    if (password == confirmPassword) {
      dispatch(register(email, password))
        .then(res => {
          console.warn('Login Successfully');
          console.log(res);
        })
        .catch(err => console.warn(err));
    } else {
      alert("Password doesn't match");
    }
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
      <TextInput
        style={styles.inputStyle}
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChangeText={val => onChangeText(val, 'confirmPassword')}
        maxLength={15}
        secureTextEntry={true}
      />
      <Button color="#3740FE" title="Signup" onPress={() => handleResiter()} />
      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate('Login')}>
        Already Registered? Click here to login
      </Text>
    </View>
  );
};

export default SignupScreen;

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
