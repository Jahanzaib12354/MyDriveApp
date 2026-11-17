
import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

const InputField = ({
  value,
  onChangeText,
  placeholder = 'Enter something',
  customStyle,
  secureTextEntry = false,
  editable = true,
  keyboardType = 'default',
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={[styles.container, customStyle]}
      secureTextEntry={secureTextEntry}
      editable={editable}
      keyboardType={keyboardType}
    />
  );
};

export default InputField;

