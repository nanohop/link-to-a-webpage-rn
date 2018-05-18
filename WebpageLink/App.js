import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Home from './Home'
import Browser from './Browser'

export default createStackNavigator({
  Home: { screen: Home },
  Browser: { screen: Browser }
});

