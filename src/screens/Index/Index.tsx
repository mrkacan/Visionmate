import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import Button from '../../components/Button/Button';
import Spacer from '../../components/Spacer';
import * as userAction from '../../features/users/actions';

export default function Index() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAction.getUsers());
  }, []);

  const navigateToUserScreen = () => {
    navigation.navigate('Users');
  };

  const navigateToRandomizeUser = () => {
    navigation.navigate('User', { isRandom: true });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Welcome to VisionMate Mobile Application
      </Text>
      <Spacer height={50} />
      <Button onPress={navigateToUserScreen}>
        Users list
      </Button>
      <Spacer height={20} />
      <Button onPress={navigateToRandomizeUser}>
        Randomize user
      </Button>
    </SafeAreaView>
  );
}
