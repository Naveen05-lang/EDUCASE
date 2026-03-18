import React from 'react';
import { View, Text, Button } from 'react-native';

export default ({ message, onRetry }) => (
  <View>
    <Text>{message}</Text>
    <Button title="Retry" onPress={onRetry} />
  </View>
);