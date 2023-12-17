import { StatusBar } from 'expo-status-bar';
import { DrawerLayoutAndroid, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen.js'
import UserScreen from './screens/UserScreen.js'
import {Ionicons} from '@expo/vector-icons'

// const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#3c0a6b'},
          headerTintColor: 'white',
          tabBarActiveTintColor: 'green',
          tabBarBadge: 'go'
          // drawerActiveBackgroundColor: 'blue',
          // drawerActiveTintColor: '#ffff',
          // drawerStyle: {backgroundColor: '#ccc'},
        }}
      >
        <BottomTab.Screen name='Welcome' component={WelcomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name='home' color={color} size={size} />
            )
            // drawerLabel: 'Welcome Screen',
            // drawerIcon: ({color, size}) => (
            //   <Ionicons name='home' color={color} size={size} />
            // )
          }}
        />
        <BottomTab.Screen name='User' component={UserScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name='person' color={color} size={size} />
            )
            // drawerIcon: ({color, size}) => (
            //   <Ionicons name='person' color={color} size={size} />
            // )
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
