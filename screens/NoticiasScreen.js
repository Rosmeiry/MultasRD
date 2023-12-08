import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const NoticiasScreen = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    // Llamada a la API de News para obtener noticias
    const obtenerNoticias = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=9a650729bb1442d09db0b6c5f41962e2');
        const data = await response.json();

        if (response.ok) {
          setNoticias(data.articles); // Acceder a la propiedad articles
        } else {
          console.error('Error al obtener noticias');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };

    // Llamar a la función para obtener noticias al cargar la pantalla
    obtenerNoticias();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Noticias Relevantes</Text>
      <FlatList
        data={noticias}
        keyExtractor={(item) => item.title} // Usar el título como identificador único
        renderItem={({ item }) => (
          <View style={styles.noticiaContainer}>
            <Text style={styles.noticiaTitulo}>{item.title}</Text>
            <Text style={styles.noticiaContenido}>{item.description}</Text>
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
    marginBottom: 16,
  },
  noticiaContainer: {
    marginBottom: 16,
  },
  noticiaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  noticiaContenido: {
    fontSize: 16,
  },
});

export default NoticiasScreen;
