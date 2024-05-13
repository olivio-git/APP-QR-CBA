import React, { useContext } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import { ScreenLogin } from './screens/ScreenLogin';
const Stack = createNativeStackNavigator();
 
export const Navigation = () => { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={ScreenLogin}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="admin"
          component={ScreenAdmin}
          options={{ headerShown: false }}
        />  */}
        {/* <Stack.Screen
          name="event"
          component={CreateEvent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="eventdetail"
          component={EventDetails}
          options={{ headerShown: false }}
        />  */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
