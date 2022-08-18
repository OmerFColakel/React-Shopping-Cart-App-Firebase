import React, {Component} from 'react';
import {View, Text, TouchableHighlight, SafeAreaView} from 'react-native';
import {Appbar} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import Home from './HomeScreen';

function RightDrawerContent() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#1B1A20',
      }}>
      <View style={{marginVertical: '5%'}}>
        <Icon name="shopping-cart" size={30} color="white"></Icon>
        <Text
          style={{
            position: 'absolute',
            right: -15,
            bottom: -15,
            color: 'white',
            backgroundColor: 'orange',
            borderRadius: 9,
            borderColor: 'orange',
            width: 18,
            textAlign: 'center',
          }}>
          10
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: '20%',
          justifyContent: 'space-around',
          borderTopWidth: 2,
          borderTopColor: 'black',
          borderTopEndRadius: 5,
          position: 'absolute',
          bottom: 1,
          backgroundColor: '#1B1A20',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-between',
            height: '20%',
          }}>
          <Text style={{color: 'grey'}}>SUBTOTAL</Text>
          <Text style={{color: 'yellow'}}>PRICE</Text>
        </View>
        <TouchableHighlight
          style={{
            backgroundColor: '#0C0B10',
            width: '90%',
            height: '20%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white'}}>CHECKOUT</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

function LeftDrawerContent() {
  return <View style={{backgroundColor: 'RED'}}></View>;
}
const LeftDrawer = createDrawerNavigator();
const LeftDrawerScreen = () => {
  return (
    <LeftDrawer.Navigator
      id="LeftDrawer"
      screenOptions={{drawerPosition: 'left', headerShown: false}}>
      <LeftDrawer.Screen name="Home" component={AppBar} />
    </LeftDrawer.Navigator>
  );
};
const RightDrawer = createDrawerNavigator();

const RightDrawerScreen = () => {
  return (
    <RightDrawer.Navigator
      id="RightDrawer"
      drawerContent={props => <RightDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
      }}>
      <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen} />
      <RightDrawer.Screen name="A" component={Home} />
    </RightDrawer.Navigator>
  );
};
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <RightDrawerScreen />
      </NavigationContainer>
    );
  }
}

export default App;

class AppBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 0.93}}>
        <Appbar.Header
          style={{
            justifyContent: 'space-between',
            backgroundColor: 'white',
          }}>
          <Appbar.Action
            icon="filter"
            onPress={() =>
              this.props.navigation.getParent('LeftDrawer').openDrawer()
            }
          />
          <Appbar.Action
            icon="cart"
            onPress={() => {
              console.log('B');
              this.props.navigation.getParent('RightDrawer').toggleDrawer();
            }}
          />
        </Appbar.Header>
        <Home />
      </View>
    );
  }
}
