import React, { Component } from "react"
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      age: 0
    }
  }

  handleChange = key => val => {
    this.setState({ [key]: val })
  }

  moveScreen() {
    if (this.state.age == 0) {
      alert('Please, Insert Your Age in From')
    } else if (this.state.age.length > 3) {
      alert('Masukkan Umur dengan Benar')
    } else {
      this.props.navigation.navigate('Screen3', this.state.age)
    }
  }
  render() {

    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 20,
          color: '#444'
        }}>How Old Are You?</Text>
        <View style={{
          flexDirection: 'row'
        }}>
          <TextInput
            keyboardType={'numeric'}
            value={this.state.age}
            onChangeText={this.handleChange('age')}
            style={{
              marginBottom: 15,
              padding: 10,
              borderWidth: 1,
              borderColor: '#aaa',
              width: '80%',
              borderRadius: 5
            }}
            placeholder="How Old Are You"
          />
          <TouchableOpacity style={{
            backgroundColor: 'blue',
            paddingHorizontal: 20,
            paddingVertical: 16,
            marginBottom: 15,
            justifyContent: 'center',
            marginLeft: -65,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5

          }}
            onPress={() => this.moveScreen()}
          >
            <Text style={{ color: 'white' }}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
