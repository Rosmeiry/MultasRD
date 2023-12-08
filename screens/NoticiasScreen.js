import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const NoticiasScreen = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    
    const obtenerNoticias = async () => {
      try {
        const response = await fetch('https://remolacha.net/wp-json/wp/v2/posts?search=digeset');
        const data = await response.json();

        if (response.ok) {
          setNoticias(data); 
        } else {
          console.error('Error al obtener noticias');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };

   
    obtenerNoticias();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Noticias Relevantes</Text>
      <FlatList
        data={noticias}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <View style={styles.noticiaContainer}>
            <Text style={styles.noticiaTitulo}>{item.title.rendered}</Text>
            <Text style={styles.noticiaContenido}>{item.excerpt.rendered}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#0c6951',
    textAlign: 'center',
  },
  noticiaContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  noticiaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#34375f',
  },
  noticiaContenido: {
    fontSize: 16,
    color: '#555',
  },
});

export default NoticiasScreen;
