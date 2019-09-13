import React, {Component} from "react"
import { View, Text, TouchableOpacity, TextInput, Picker, InputButton} from 'react-native'

export default class Screen4 extends Component {
  constructor(){
    super()
    this.state = {
      result: 0,
      input: 0,
      param: 0,
      jari: 0,
      panjang: 0,
      lebar: 0
    }
  }

  handleChange = key => val => {
    this.setState({ [key]: val })
}

result(){
  const {input,param, jari, lebar, panjang} = this.state
  if(param == 0){
    if(input== 0){
      alert('Masukkan Operasi')
    } else {
      setTimeout(() => {
        alert('Result untuk Operasi ini Masih Belum')
      }, 500);
    }
    
  } else if(param == 1){
   if(jari== 0){
    alert('Masukkan Operasi')
   } else {
     let Llingkaran = 3.14*jari*jari
     this.setState({
       result : Llingkaran
     })
   }
  } else if(param ==2){
    if(panjang== 0 || lebar== 0){
      alert('Masukkan Operasi')
    } else {
      let LPPanjang = panjang*lebar
      this.setState({
        result: LPPanjang
      })
    }
  }
}
  render() {
console.warn(this.state.param)
    return (
      <View>
        <View style={{
          height: 480
        }}>
        {
          this.state.param == 0
          ?
          <View style={{
         justifyContent: 'flex-start',
         alignItems: 'center'
       }}>
       <Text style={{
         fontSize: 24,
         marginTop: 50
       }}>Masukkan Operasi</Text>
       <TextInput
       value={this.state.input}
       onChangeText={this.handleChange('input')}
       style={{
        marginBottom: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: '#aaa',
        width: '80%',
        borderRadius: 5,
        marginTop: 50
       }}
            placeholder="Masukkan Operasi"
        />
        </View>
        :
          this.state.param == 1 
          ?
          <View style={{
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: 24,
         marginTop: 50
            }}>Luas Lingkaran</Text>
            <View style={{flexDirection: 'row',marginTop: 50}}>
            <Text style={{
              fontSize: 20,
              marginTop: 10,
              marginRight: 10
            }}>3.14 x</Text>
            <TextInput
            keyboardType={'numeric'}
            value={this.state.jari}
            onChangeText={this.handleChange('jari')}
            style={{
              marginBottom: 15,
              height:50,
              borderWidth: 1,
              borderColor: '#aaa',
              width: '20%',
              borderRadius: 5,
            }}
                  placeholder="r"
              />
              <Text style={{
              fontSize: 20,
              marginTop: 10,
              marginHorizontal: 10,
            }}>x</Text>
            <TextInput
            keyboardType={'numeric'}
            value={this.state.jari}
            onChangeText={this.handleChange('jari')}
            style={{
              marginBottom: 15,
              height:50,
              borderWidth: 1,
              borderColor: '#aaa',
              width: '20%',
              borderRadius: 5
            }}
                  placeholder="r"
              />
            </View>
          </View>
          :
          this.state.param == 2
          ?
          <View style={{
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: 24,
         marginTop: 50
            }}>Luas Persegi Panjang</Text>
            <View style={{flexDirection: 'row',marginTop: 50}}>
            <TextInput
            keyboardType={'numeric'}
            value={this.state.panjang}
            onChangeText={this.handleChange('panjang')}
            style={{
              marginBottom: 15,
              height:50,
              borderWidth: 1,
              borderColor: '#aaa',
              width: '20%',
              borderRadius: 5
            }}
                  placeholder="Panjang"
              />
              <Text style={{
              fontSize: 20,
              marginTop: 10,
              marginHorizontal: 10,
            }}>x</Text>
            <TextInput
            keyboardType={'numeric'}
            value={this.state.lebar}
            onChangeText={this.handleChange('lebar')}
            style={{
              marginBottom: 15,
              height:50,
              borderWidth: 1,
              borderColor: '#aaa',
              width: '20%',
              borderRadius: 5
            }}
                  placeholder="Lebar"
              />
            </View>
          </View>
          :
          <Text></Text>
        }
        </View>
        <View style={{
          marginHorizontal: '10%',
          flexDirection: 'row'
        }}>
        <Picker
        selectedValue={this.state.param}
        style={{height: 50, width: 205}}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({param: itemValue, result: 0, panjang: 0, lebar: 0, jari: 0})
        }>
        <Picker.Item label="Pilih Operasi" value="0" />
        <Picker.Item label="Luas Lingkaran" value="1" />
         <Picker.Item label="Luas Persegi Panjang" value="2" />
        </Picker>
        <TouchableOpacity style={{
          backgroundColor: 'blue',
          paddingHorizontal: 20,
          paddingVertical: 16,
          marginBottom: 15,
          width: '28%',
          borderRadius: 5

        }}
        onPress={() => this.result()}
        >
          <Text style={{color: 'white'}}>Result</Text>
        </TouchableOpacity>
        </View>
        <View style={{
          justifyContent: 'center',
          borderWidth: 1,
          borderRadius: 5,
          height: 50,
          marginHorizontal: '10%',
          borderColor: '#aaa',
          paddingLeft: 10
        }}>
        <Text style={{
          fontSize: 16,
          
        }}>{this.state.result}</Text>
        </View>
       </View>
    )
  }
}
