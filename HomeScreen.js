import React, {Component} from 'react';
import {View, FlatList} from 'react-native';

import Product from './Product';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  async fetchData() {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json => {
        let arr = [];
        for (let x = 0; x < json.length; ++x)
          if (
            json[x].category == "women's clothing" ||
            json[x].category == "men's clothing"
          )
            arr = [...arr, json[x]];
        this.setState({data: arr});
      });
  }
  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <FlatList
          style={{
            width: '90%',
            alignSelf: 'center',
          }}
          showsVerticalScrollIndicator={false}
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({item}) => (
            <Product image={item.image} title={item.title} price={item.price} />
          )}></FlatList>
      </View>
    );
  }
}
