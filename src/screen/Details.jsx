import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Details = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: item.image_link }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemBrand}>{item.brand}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemCategory}>Categoria: {item.category}</Text>
      <Text style={styles.itemPrice}>
      <Text style={{ fontWeight: 'bold' }}>Preço: US$ </Text> {item.price}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6CEF5',
    padding: 20,
  },
  itemImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemBrand: {
    fontSize: 18,
    color: '#888',
  },
  itemDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  itemCategory: {
    fontSize: 16,
    marginBottom: 10,
  },
  itemPrice: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default Details;
