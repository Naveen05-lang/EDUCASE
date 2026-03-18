import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { scale } from '../utils/responsive';

const DetailsScreen = ({ route }) => {
  const item = route?.params?.item;
  const [error, setError] = useState(false);

  if (!item) {
    return (
      <View style={styles.center}>
        <Text>No Data</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={
          error
            ? require('../assets/fallback.jpg')
            : { uri: item.thumbnail }
        }
        onError={() => setError(true)}
        style={styles.image}
      />

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>₹ {item.price}</Text>

      <Text style={styles.section}>Description</Text>
      <Text style={styles.text}>{item.description}</Text>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    padding: scale(16),
  },
  image: {
    width: '100%',
    height: scale(220),
    borderRadius: scale(10),
    backgroundColor: '#eee',
  },
  title: {
    fontSize: scale(20),
    fontWeight: 'bold',
  },
  price: {
    fontSize: scale(18),
    color: 'green',
    marginVertical: scale(10),
  },
  section: {
    fontSize: scale(16),
    marginTop: scale(10),
  },
  text: {
    fontSize: scale(14),
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});