import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {postUserRegistration} from '../../services/auth';

// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';

const Login = () => {
  // useEffect(() => {
  //   GoogleSignin.configure({
  //     scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  //     webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
  //     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //     hostedDomain: '', // specifies a hosted domain restriction
  //     loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
  //     forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  //     accountName: '', // [Android] specifies an account name on the device that should be used
  //     iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  //     googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  //   });
  // }, [])

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameChangeHandler = name => {
    setName(name);
  };

  const emailChangeHandler = email => {
    setEmail(email);
  };

  const passwordChangeHandler = password => {
    setPassword(password);
  };

  const onRegisterHandler = () => {
    const dataToSend = {
      username: name,
      email: email,
      password: password,
    };

    postUserRegistration(dataToSend).then(response => {
      console.log('response', response);
    });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.bgImage} source={require('../../../unnamed.jpg')} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>LetsChat</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Username"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={nameChangeHandler}
        />
        <MaterialCommunityIcons
          style={styles.inputIcon}
          name="account"
          size={25}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={emailChangeHandler}
        />
        <MaterialCommunityIcons
          style={styles.inputIcon}
          name="email"
          size={25}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={passwordChangeHandler}
        />
        <MaterialCommunityIcons
          style={styles.inputIcon}
          name="lock"
          size={25}
        />
      </View>

      <TouchableOpacity onPress={() => {}} style={styles.btnForgotPassword}>
        <Text style={styles.btnText}>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={onRegisterHandler}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttonContainer, styles.registerButton]}
        onPress={() => {}}>
        <Text style={styles.btnText}>Already have an account? Login.</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 42,
    color: '#fff',
    fontWeight: 'bold',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 1,
    textShadowColor: 'black',
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
  btnForgotPassword: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
    width: 300,
    backgroundColor: 'transparent',
  },
  loginButton: {
    backgroundColor: '#fabe3c',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  registerButton: {
    backgroundColor: '#e83ae2',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
