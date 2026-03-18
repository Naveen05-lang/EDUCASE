import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveProducts = async (data) => {
  await AsyncStorage.setItem('products', JSON.stringify(data));
};

export const loadProducts = async () => {
  const data = await AsyncStorage.getItem('products');
  return data ? JSON.parse(data) : [];
};