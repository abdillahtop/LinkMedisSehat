import React, { Component } from "react"
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import { WebView } from 'react-native-webview';
import { Button, Icon, Fab } from 'native-base';
import { LinkedInLoginButton } from "react-social-login-buttons";

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: this.props.navigation.state.params
    }
  }

  OpenWhatsUp = async () => {
    const whatsapp = `https://api.whatsapp.com/send?phone=6281617098942&text=Tes%20Link%20Medis%20Sehat%20Saya%20Berumur%20${this.state.age}%20Tahun`
    return Linking.openURL(whatsapp)
  }

  render() {
    console.warn(this.state.age)
    return (
      <>
        {
          this.state.age < 20
            ?
            <>
              <WebView
                style={{ flex: 1 }}
                originWhitelist={['*']}
                source={{ uri: "https://linkmedissehat.netlify.com/muda" }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
              />
              <Fab
                active={this.state.active}
                direction="up"
                containerStyle={{}}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => this.setState({ active: !this.state.active })}>
                <Icon name="add" />
                <Button
                  onPress={() => this.OpenWhatsUp()}
                  style={{ backgroundColor: '#34A34F' }}>
                  <Icon name="logo-whatsapp" />
                </Button>
                <Button
                  onPress={() => this.props.navigation.navigate('Screen4')}
                  style={{ backgroundColor: '#3B5998' }}>
                  <Icon name="arrow-forward" />
                </Button>
              </Fab>
            </>
            :
            this.state.age <= 50
              ?
              <>
                <WebView
                  style={{ flex: 1 }}
                  originWhitelist={['*']}
                  source={{ uri: "https://linkmedissehat.netlify.com/dewasa" }}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                />
                <Fab
                  active={this.state.active}
                  direction="up"
                  containerStyle={{}}
                  style={{ backgroundColor: '#5067FF' }}
                  position="bottomRight"
                  onPress={() => this.setState({ active: !this.state.active })}>
                  <Icon name="add" />
                  <Button
                    onPress={() => this.OpenWhatsUp()}
                    style={{ backgroundColor: '#34A34F' }}>
                    <Icon name="logo-whatsapp" />
                  </Button>
                  <Button
                    onPress={() => this.props.navigation.navigate('Screen4')}
                    style={{ backgroundColor: '#3B5998' }}>
                    <Icon name="arrow-forward" />
                  </Button>
                </Fab>
              </>
              :

              <>
                <WebView
                  style={{ flex: 1 }}
                  originWhitelist={['*']}
                  source={{ uri: "https://linkmedissehat.netlify.com/tua" }}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                />
                <Fab
                  active={this.state.active}
                  direction="up"
                  containerStyle={{}}
                  style={{ backgroundColor: '#5067FF' }}
                  position="bottomRight"
                  onPress={() => this.setState({ active: !this.state.active })}>
                  <Icon name="add" />
                  <Button
                    onPress={() => this.OpenWhatsUp()}
                    style={{ backgroundColor: '#34A34F' }}>
                    <Icon name="logo-whatsapp" />
                  </Button>
                  <Button
                    onPress={() => this.props.navigation.navigate('Screen4')}
                    style={{ backgroundColor: '#3B5998' }}>
                    <Icon name="arrow-forward" />
                  </Button>
                </Fab>
              </>

        }
      </>
    )
  }
}
