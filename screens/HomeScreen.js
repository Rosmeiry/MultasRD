import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a la Aplicación de Multas!</Text>
      <Image
        source={require('./img/main.png')} 
        style={styles.mainImage}
      />
      <Text style={styles.paragraph}>
        Bienvenido a nuestra aplicación, la solución integral para gestionar y abonar tus multas de manera rápida y sencilla. Aquí, encontrarás una plataforma intuitiva que te permite manejar eficientemente tus infracciones de tráfico y realizar pagos de manera conveniente. Simplifica tu experiencia con las multas y mantén un control total con nuestra aplicación.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Menú')}
      >
        <Text style={styles.buttonText}>Ver Menú</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007556', // Azul oscuro
    marginBottom: 16,
    textAlign: 'center',
  },
  mainImage: {
    width: 200, 
    height: 210, 
    marginBottom: 16,
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Times New Roman', 
  },  
  button: {
    backgroundColor: '#34375f', 
    borderRadius: 10,
    padding: 13,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
