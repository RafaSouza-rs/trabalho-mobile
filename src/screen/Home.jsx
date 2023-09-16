import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Button } from 'react-native';
import axios from 'axios';

const Home = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?page=${page}`);
      if (response.data.length > 0) {
        if (page === 1) {
          setProducts(response.data.slice(0, 3)); // Mostra os 3 primeiros produtos na primeira página
        } else {
          setProducts((prevProducts) => [...prevProducts, ...response.data]); // Adiciona mais produtos às páginas subsequentes
        }
        setIsLoading(false); // Marca que a carga está completa
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false); // Marca que a carga está completa, mesmo em caso de erro
    }
  };

  const loadMore = () => {
    setIsLoadingMore(true); // Marca que está carregando mais produtos
    setPage((prevPage) => prevPage + 1); // Incrementa a página
  };

  useEffect(() => {
    if (page > 1) {
      fetchProducts();
      setIsLoadingMore(false); // Marca que o carregamento de mais produtos foi concluído
    }
  }, [page]);

  const goToDetails = (item) => {
    if (item) {
      navigation.navigate('Details', { item });
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#FF6B98" />
      ) : (
        <>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => goToDetails(item)}>
                <View style={styles.productContainer}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productBrand}>{item.brand}</Text>
                  <Image source={{ uri: item.image_link }} style={styles.productImage} />
                  <Text>Clique na imagem para saber mais.</Text>
                </View>
              </TouchableOpacity>
            )}
          />
          {isLoadingMore ? (
            <ActivityIndicator size="small" color="#FF6B98" />
          ) : (
            <Button title="Carregar Mais" onPress={loadMore} />
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6CEF5',
  },
  productContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productBrand: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Home;
