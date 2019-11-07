import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableHighlight, Alert } from 'react-native';

export default function App() {
  const [products, setProducts] = useState('');
  const [product, setProduct] = useState('');
  const [value, setValue] = useState('');
  const [values, setValues] = useState('');

  function handleChangeProduct(text) {
    console.log(text);
    setProduct(text);
  }

  function handleChangeValue(text) {
    console.log(text);
    setValue(text);
  }

  function handleSubmit() {
    console.log("product: " + product.length);

    if (product.length > 0 && value.length > 0) {
      const newProduct = {
        id: products.length,
        product,
      };
      
      setProducts([...products, newProduct]);

      const newValue = {
        id: values.length,
        value,
      };
      setValues([...values, newValue]);
    } else {
      Alert.alert('Error!', 'Each input is require', []);
    }
    setProduct("");
    setValue("");
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Wallmart App</Text>
      <Text style={styles.title}>The best store to buy</Text>

      <View style={styles.products}>
        
        <View>
          <Text>Product</Text>
          <FlatList
            key={product.id}
            style={styles.list}
            data={products}
            renderItem={({ item }) => <Text>{item.product}</Text>}
            keyExtractor={(product, index) => (product.id, index.toString())}
          />
        </View>

        <View>
          <Text>Price ($)</Text>
          <FlatList
            key={value.id}
            style={styles.list}
            data={values}
            renderItem={({ item }) => <Text>{item.value}</Text>}
            keyExtractor={(value, index) => (value.id, index.toString())}
          />
        </View>

      </View>

      <TextInput
        style={styles.input}
        placeholder="Agregar producto"
        onChangeText={handleChangeProduct}
        value={product}
        returnKeyType="done"
      />

      <TextInput
        style={styles.input}
        placeholder="Valor"
        onChangeText={handleChangeValue}
        value={value}
        keyboardType="number-pad"
        returnKeyType="done"
      />

      <TouchableHighlight
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.textButton}>Send</Text>
      </TouchableHighlight>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
  },
  button: {
    backgroundColor: 'skyblue',
    paddingTop: 15,
    paddingBottom: 15,
  },
  textButton: {
    textAlign: 'center',
    color: 'white'
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 5
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 4,
    fontSize: 16,
  },
  list: {
    flex: 1
  },
  products: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
