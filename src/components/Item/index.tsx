import React from 'react';
import {
  ImageBackground, Text, TouchableOpacity, View,
} from 'react-native';
import styles from './styles';
import { UserItem } from '../../features/users/types';
import Spacer from '../Spacer';

interface ItemProps extends UserItem {
  onPress: () => void;
}

const Item: React.FC<ItemProps> = ({
  name,
  picture,
  email,
  location,
  onPress,
}) => {
  const age = 30;
  return (
    <TouchableOpacity onPress={onPress} style={styles.generalItemWrapper}>
      <ImageBackground source={{ uri: picture.large }} style={styles.itemWrapper}>
        <View style={styles.textsWrapper}>
          <Text style={styles.itemText}>
            {`${name.first}, ${name.last}`}
          </Text>
          <Text style={styles.itemSmallText}>
            {`${location.city}`}
          </Text>
          <Spacer height={5} />
          <Text style={styles.itemXSmallText}>
            {`${email}`}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
export default Item;
