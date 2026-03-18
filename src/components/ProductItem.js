import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { scale } from '../utils/responsive';

const ProductItem = React.memo(({ item, onPress }) => {
  const [error, setError] = useState(false);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={
          error
            ? require('../assets/fallback.jpg')
            : { uri: item.thumbnail }
        }
        onError={() => setError(true)}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.price}>₹ {item.price}</Text>
      </View>
    </TouchableOpacity>
  );
});

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: scale(10),
  },
  image: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(8),
    backgroundColor: '#eee',
  },
  info: {
    marginLeft: scale(10),
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: scale(14),
  },
  price: {
    marginTop: scale(4),
    color: 'green',
  },
});