import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {styles} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

export const Button = ({label, ...rest}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};
