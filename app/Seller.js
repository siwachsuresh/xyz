// screens/SellerDashboard.js
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet,
  ScrollView 
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addProduct } from '../app/src/store/productSlice';

export default function SellerDashboard() {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    stock: '',
  });

  const handleSubmit = () => {
    dispatch(addProduct({
      ...productData,
      id: Date.now().toString(),
      price: parseFloat(productData.price),
      stock: parseInt(productData.stock),
    }));
    setProductData({
      name: '',
      price: '',
      description: '',
      image: '',
      stock: '',
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add New Product</Text>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={productData.name}
        onChangeText={(text) => setProductData({...productData, name: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={productData.price}
        onChangeText={(text) => setProductData({...productData, price: text})}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={productData.description}
        onChangeText={(text) => setProductData({...productData, description: text})}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={productData.image}
        onChangeText={(text) => setProductData({...productData, image: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Stock Quantity"
        value={productData.stock}
        onChangeText={(text) => setProductData({...productData, stock: text})}
        keyboardType="numeric"
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Add Product</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});