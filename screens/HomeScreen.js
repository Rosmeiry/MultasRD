// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a la Aplicación de Multas!</Text>
      <Button title="Ver Menú" onPress={() => navigation.navigate('Menú')} />
      {/* Agrega más botones u otros elementos según sea necesario */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});
