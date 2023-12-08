import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MenuScreen({ navigation }) {
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { marginTop: 40 }]}>Menú Principal</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo('Tarifario')}
      >
        <Text style={styles.buttonText}>Tarifario de Multas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo('ConsultaPlaca')}
      >
        <Text style={styles.buttonText}>Consulta por Placa</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo('ConsultaLicencia')}
      >
        <Text style={styles.buttonText}>Consulta por Licencia</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo('AplicarMulta')}
      >
        <Text style={styles.buttonText}>Aplicar Multa</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo('MultasRegistradas')}
      >
        <Text style={styles.buttonText}>Multas Registradas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo('MapaMultas')}
      >
        <Text style={styles.buttonText}>Mapa de Multas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo('Noticias')}
      >
        <Text style={styles.buttonText}>Noticias</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo('EstadoClima')}
      >
        <Text style={styles.buttonText}>Estado del Clima</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo('Horoscopo')}
      >
        <Text style={styles.buttonText}>Horóscopo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0c6951', // Azul oscuro
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#34375f', // Azul oscuro
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    width: '70%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
