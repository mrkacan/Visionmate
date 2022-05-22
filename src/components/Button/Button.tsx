import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type ButtonProps = {
  children: string;
  fitContent?: boolean;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ onPress, children, fitContent = false }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.wrapper, fitContent && styles.fitContent]}
  >
    <Text style={styles.text}>
      {children}
    </Text>
  </TouchableOpacity>
);

export default Button;
