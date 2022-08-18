import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
export default class Product extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}>
        <Image
          style={{
            width: '100%',
            height: 300,
            resizeMode: 'center',
          }}
          source={{uri: this.props.image}}
        />
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            marginTop: '5%',
            marginBottom: '2.5%',
            textAlign: 'center',
          }}
          numberOfLines={2}>
          {this.props.title}
        </Text>
        <View
          style={{
            width: '10%',
            backgroundColor: 'orange',
            height: 2,
            marginBottom: '5%',
          }}
        />
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
          }}>
          ${this.props.price}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            width: '100%',
            marginVertical: '5%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              marginVertical: '2.5%',
            }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
