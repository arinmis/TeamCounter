import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './login/Login';
import Welcome from './welcome/Welcome';
import Singup from './signup/Singup';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="singup"
        component={Singup}
        options={{headerShown: false}}
      />
      <Stack.Screen name="welcome" component={Welcome} />
    </Stack.Navigator>
  );
}

export default Routes;
