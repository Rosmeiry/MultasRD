import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HoroscopoScreen = () => {
  const [horoscopoInfo, setHoroscopoInfo] = useState('');

  const obtenerInformacionHoroscopo = (signo) => {
    // Aquí podrías realizar una llamada a una API o simplemente establecer información estática
    // En este ejemplo, se establece información estática para los signos de Cáncer y Leo
    switch (signo) {
      case 'Cancer':
        setHoroscopoInfo('Cáncer es un signo de agua, regido por la Luna. Personas nacidas entre el 21 de junio y el 22 de julio. Características: intuitivas, emocionales, protectoras.');
        break;
      case 'Leo':
        setHoroscopoInfo('Leo es un signo de fuego, regido por el Sol. Personas nacidas entre el 23 de julio y el 22 de agosto. Características: apasionadas, creativas, líderes.');
        break;
      // Agrega más casos según tus necesidades
      default:
        setHoroscopoInfo('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona tu Signo</Text>
      <TouchableOpacity onPress={() => obtenerInformacionHoroscopo('Cancer')}>
        <Image source={require('./img/Cancer.jpeg')} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => obtenerInformacionHoroscopo('Leo')}>
        <Image source={require('./img/Leo.jpeg')} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.horoscopoText}>{horoscopoInfo}</Text>
    </View>
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
    color: '#1a237e', // Azul oscuro
    marginBottom: 16,
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
