import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import Question1Screen from './screens/Question1';
import Question2Screen from './screens/Question2';
import Question3Screen from './screens/Question3';
import SuccessScreen from './screens/Success';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
        <Stack.Screen name="Question3" component={Question3Screen} />
        <Stack.Screen name="Question2" component={Question2Screen} />
        <Stack.Screen name="Question1" component={Question1Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;