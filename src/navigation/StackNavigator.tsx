import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import Header from '../components/Header';
const Stack = createNativeStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => <Header title="Eyeglasses" />,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
      />

    </Stack.Navigator>
    
  )
}

export default StackNavigator