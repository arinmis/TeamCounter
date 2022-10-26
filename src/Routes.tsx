import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './login/Login';
import Welcome from './welcome/Welcome';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} options={{title: 'Login'}} />
      <Stack.Screen name="welcome" component={Welcome} />
    </Stack.Navigator>
  );
}

export default Routes;
