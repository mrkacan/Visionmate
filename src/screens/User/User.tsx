import React from 'react';
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootStackScreenProps } from '../../navigation/types';
import { getUserSelector } from '../../features/users/selectors';
import styles from './styles';

export default function User({ route }: RootStackScreenProps<'User'>) {
  const user = useSelector(getUserSelector(route.params?.id, route.params?.isRandom));
  const username = user?.login?.username;

  return (
    <View>
      <Image source={{ uri: user?.picture.large }} style={styles.image} />
      <Text style={styles.fullName}>{`${user?.name.first} ${user?.name.last}`}</Text>
      <Text style={styles.username}>{username}</Text>
      <Text
        style={styles.address}
      >
        {`${user?.location?.street?.name}, ${user?.location?.city}, ${user?.location?.postcode}`}
      </Text>
    </View>
  );
}
