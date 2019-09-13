import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';
// import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fzontawesome'; 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGooglePlus, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default class App extends React.Component {

  componentDidMount() {
    //initial configuration
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: '951947602271-tp9iphsmvi2im6tvj0ntdpf72mubchfn.apps.googleusercontent.com',
    });
  }


  loginWaiting() {
    alert('Login via Masih bingung Configurasi')
    setTimeout(() => {
      this.props.navigation.navigate('Screen2')
    }, 500);


  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.warn('User Info --> ', userInfo);
      this.setState({ userInfo: userInfo });
    } catch (error) {
      console.warn('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.warn('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.warn('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.warn('Play Services Not Available or Outdated');
      } else {
        console.warn('Some Other Error Happened');
        this.props.navigation.navigate('Screen2')
      }
    }
  };

  render() {

    return (
      <View style={styles.container}>
        <Text style={{
          fontSize: 30,
          marginBottom: 20,
          fontWeight: 'bold'
        }}>Login</Text>
        <TouchableOpacity style={{
          backgroundColor: '#DD4B39',
          marginBottom: 15,
          justifyContent: 'center',
          width: 245,
          height: 55,
          borderRadius: 3,
          elevation: 2,
          borderWidth: 0.5,
          borderColor: '#aaa',
        }}
          onPress={this._signIn}
        >
          <View style={{ flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faGooglePlus} style={{ color: 'white', marginLeft: 20 }} size={26} />
            <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18 }}>Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: '#405DE6',
          marginBottom: 15,
          justifyContent: 'center',
          width: 245,
          height: 55,
          borderRadius: 3,
          elevation: 2,
          borderWidth: 0.5,
          borderColor: '#aaa'
        }}
          onPress={() => this.loginWaiting()}
        >
          <View style={{ flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faFacebook} style={{ color: 'white', marginLeft: 20 }} size={26} />
            <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18 }}>Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: '#E1306C',
          marginBottom: 15,
          justifyContent: 'center',
          width: 245,
          height: 55,
          borderRadius: 3,
          elevation: 2,
          borderWidth: 0.5,
          borderColor: '#aaa'
        }}
          onPress={() => this.loginWaiting()}
        >
          <View style={{ flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faInstagram} style={{ color: 'white', marginLeft: 20 }} size={26} />
            <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18 }}>Instagram</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: '#0077B5',
          marginBottom: 15,
          justifyContent: 'center',
          width: 245,
          height: 55,
          borderRadius: 3,
          elevation: 2,
          borderWidth: 0.5,
          borderColor: '#aaa'
        }}
          onPress={() => this.loginWaiting()}
        >
          <View style={{ flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faLinkedin} style={{ color: 'white', marginLeft: 20 }} size={26} />
            <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18 }}>LinkedIn</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 30,
  },
});
