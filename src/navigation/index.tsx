import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from 'react-native';
import User from '../screens/User/User';
import Users from '../screens/Users/Users';
import Index from '../screens/Index/Index';
import { RootStackParamList } from './types';
import COLORS from '../constants/theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={{ headerTintColor: COLORS.PRIMARY }}>
      <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
      <Stack.Screen name="Users" component={Users} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name="User"
          component={User}
          options={{
            headerLeft: () => (
              <Button
                title="Back"
                color={COLORS.PRIMARY}
                onPress={navigation.goBack}
              />
            ),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
