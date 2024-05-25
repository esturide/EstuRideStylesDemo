import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../styles/GlobalStyles';

const Button = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
