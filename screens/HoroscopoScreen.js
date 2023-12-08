import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const HoroscopoScreen = () => {
  const [horoscopoInfo, setHoroscopoInfo] = useState('');

  const obtenerInformacionHoroscopo = (signo) => {
    // Establecer información para cada signo
    switch (signo) {
      case 'Cancer':
        setHoroscopoInfo('Cáncer es un signo de agua, regido por la Luna. Personas nacidas entre el 21 de junio y el 22 de julio. Características: intuitivas, emocionales, protectoras.');
        break;
      case 'Leo':
        setHoroscopoInfo('Leo es un signo de fuego, regido por el Sol. Personas nacidas entre el 23 de julio y el 22 de agosto. Características: apasionadas, creativas, líderes.');
        break;
      case 'Sagitario':
        setHoroscopoInfo('Sagitario es un signo de fuego, regido por Júpiter. Personas nacidas entre el 23 de noviembre y el 21 de diciembre. Características: optimistas, aventureros, honestos.');
        break;
      case 'Escorpio':
        setHoroscopoInfo('Escorpio es un signo de agua, regido por Plutón y Marte. Personas nacidas entre el 23 de octubre y el 22 de noviembre. Características: intensos, apasionados, intuitivos.');
        break;
      default:
        setHoroscopoInfo('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>Selecciona tu Signo</Text>
      <Image
        source={require('./img/zodiaco.jpeg')}
        style={styles.zodiacoImage}
        resizeMode="contain"
      />
      <View style={styles.row}>
        <TouchableOpacity onPress={() => obtenerInformacionHoroscopo('Cancer')}>
          <Image source={require('./img/cancer.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => obtenerInformacionHoroscopo('Leo')}>
          <Image source={require('./img/leo.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => obtenerInformacionHoroscopo('Sagitario')}>
          <Image source={require('./img/sagitario.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => obtenerInformacionHoroscopo('Escorpio')}>
          <Image source={require('./img/escorpio.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
      <Text style={styles.horoscopoText}>{horoscopoInfo}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8edf3',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0c6951', // Azul oscuro
    marginBottom: 16,
  },
  zodiacoImage: {
    width: '80%',
    height: 140,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around', // Distribuye los elementos de manera uniforme
    marginVertical: 10, // Espacio vertical entre las filas
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    margin: 10,
  },
  horoscopoText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6b778d',
    marginTop: 20,
  },
});

export default HoroscopoScreen;
