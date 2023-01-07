import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import RegisterProfile from './src/screens/RegisterProfile';
import Swipe from './src/screens/Swipe';
import SplashScreen from './src/screens/SplashScreen';
import Mode from './src/screens/Mode';
import Settings from './src/screens/Settings';
import Home from './src/screens/Home';

import routes from './src/constants/routes';
import colors from './src/constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import fontFamily from './src/constants/fontFamily';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="#FFF"
      />
      <Stack.Navigator>
      <Stack.Screen
          name="Hashi"
          component={Home}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: colors.primary,
              fontFamily: fontFamily.bold,
              fontSize: 27,
            },
            headerTransparent: true,
            headerRight: () => (
              <Image source={require('./assets/edit.png')} />
            ),
            headerLeft: () => (
              <Image source={require('./assets/returnBlack.png')} />

            ),
          }}
        />

        <Stack.Screen
          name="Setting"
          component={Settings}
          options={{
            headerTitleAlign: 'center',
            headerTransparent: true,
            headerRight: () => (
              <LinearGradient
                colors={[colors.card.colorOne, colors.card.colorTwo]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.LinearGradient}>
                <TouchableOpacity>
                  <Text style={styles.buttonText1}>Save</Text>
                </TouchableOpacity>
              </LinearGradient>
            ),
            headerLeft: () => (
              <LinearGradient
                colors={['#fff', '#fff']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={[styles.LinearGradient, {borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.5)'}]}>
                <TouchableOpacity>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </LinearGradient>
            ),
          }}
        />
        <Stack.Screen
          name="Mode"
          component={Mode}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={routes.mainFlow.SplashScreen}
          component={Swipe}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={routes.authenticationFlow.registerProfileScreen}
          component={RegisterProfile}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen name={routes.authenticationFlow.loginScreen} component={Login} options={{ 
          headerShown: false,
         }}/> */}
        <Stack.Screen
          name={routes.authenticationFlow.registerEmailScreen}
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  LinearGradient:{
    borderRadius: 50,
    alignItems: "center",
    // padding: 10,
    width: 80,
    height: 30,
    justifyContent: 'center'
},

buttonText:{
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
    fontFamily: fontFamily.bold
},
buttonText1:{
  fontSize: 16,
  fontWeight: "bold",
  color: colors.backgroundColor,
  fontFamily: fontFamily.bold
}
});
