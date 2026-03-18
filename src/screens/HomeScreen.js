import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  RefreshControl,
  AppState,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  setProducts,
  reset,
} from '../redux/productSlice';
import ProductItem from '../components/ProductItem';
import Loader from '../components/Loader';
import ErrorView from '../components/ErrorView';
import EmptyView from '../components/EmptyView';
import useDebounce from '../hooks/useDebounce';
// import { saveProducts, loadProducts } from '../utils/storage';
import { scale } from '../utils/responsive';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { list, loading, error, page, hasMore } =
    useSelector((s) => s.products);

  const [search, setSearch] = useState('');
  const debounced = useDebounce(search);

  useEffect(() => {
    const init = async () => {
      // const cached = await loadProducts();
      // if (cached.length) {
      //   dispatch(setProducts(cached));
      // } else {
      //   dispatch(fetchProducts(1));
      // }

      // Direct API call instead
      dispatch(fetchProducts(1));
      
    };
    init();
  }, []);

  useEffect(() => {
    // saveProducts(list);
  }, [list]);

  useEffect(() => {
    const sub = AppState.addEventListener('change', (state) => {
      // if (state === 'background') saveProducts(list);
    });
    return () => sub.remove();
  }, [list]);

  const filtered = list.filter((i) =>
    i.title.toLowerCase().includes(debounced.toLowerCase())
  );

  const loadMore = () => {
    if (!loading && hasMore) dispatch(fetchProducts(page));
  };

  const refresh = () => {
    dispatch(reset());
    dispatch(fetchProducts(1));
  };

  if (error) {
    return (
      <ErrorView
        message={error}
        onRetry={() => dispatch(fetchProducts(1))}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="Search..."
        value={search}
        onChangeText={setSearch}
        style={{
          borderWidth: 1,
          margin: scale(10),
          padding: scale(10),
          borderRadius: 8,
        }}
      />

      <FlatList
        data={filtered}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <ProductItem
            item={item}
            onPress={() =>
              navigation.navigate('Details', { item })
            }
          />
        )}
        onEndReached={loadMore}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
        ListFooterComponent={loading && <Loader />}
        ListEmptyComponent={!loading && <EmptyView />}
      />
    </View>
  );
};

export default HomeScreen;