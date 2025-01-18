// app/index.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  const products = useSelector(state => state.products.items);

  const renderProduct = ({ item }) => (
    <TouchableOpacity 
      style={styles.productCard}
      onPress={() => router.push({ pathname: '/product', params: { product: JSON.stringify(item) } })}
    >
      <Image 
        source={{ uri: item.image }} 
        style={styles.productImage}
      />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}

// ... styles remain the same