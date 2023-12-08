import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ConsultaPlacaScreen = () => {
  const [placa, setPlaca] = useState('');
  const [detalleVehiculo, setDetalleVehiculo] = useState(null);

  const vehiculos = {
    PLACA1: { marca: 'TOYOTA', modelo: 'Toyota AE86' },
    PLACA2: { marca: 'CORVETTE', modelo: 'Z06 2023' },
    
  };

  const consultarPlaca = () => {
    const vehiculoSeleccionado = vehiculos[placa];

    if (vehiculoSeleccionado) {
      setDetalleVehiculo(vehiculoSeleccionado);
    } else {
      Alert.alert('Error', 'No se encontró información para la placa seleccionada');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de Vehículo por Placa</Text>

      <Image
        source={require('./img/placa.png')} 
        style={styles.placaImage}
      />

      <Picker
        selectedValue={placa}
        style={styles.picker}
        onValueChange={(itemValue) => setPlaca(itemValue)}
      >
        <Picker.Item label="Seleccione una placa" value="" />
        <Picker.Item label="ABC123" value="PLACA1" />
        <Picker.Item label="XBZ456" value="PLACA2" />
        
      </Picker>

      <View style={styles.buttonContainer}>
        <Button title="Consultar" onPress={consultarPlaca} color="#ffffff" />
      </View>

      {detalleVehiculo && (
        <View style={styles.card}>
          <Text style={styles.detail}>Detalles del vehículo:</Text>
          <Text style={styles.detail}>Marca: {detalleVehiculo.marca}</Text>
          <Text style={styles.detail}>Modelo: {detalleVehiculo.modelo}</Text>
         
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    backgroundColor: '#fafbfd',
    padding: 20,
    paddingTop: 40, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0c6951',
    marginBottom: 25,
  },
  placaImage: {
    width: 200,
    height: 120,
    marginTop: 5,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 140,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#34375f', // Fondo azul oscuro
    borderRadius: 10, // Bordes redondeados
    overflow: 'hidden',
    padding: 8,
  },
  card: {
    marginTop: 25,
    alignItems: 'center',
    backgroundColor: '#f2f4f6',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
  },
  detail: {
    fontWeight: '300',
    fontSize: 18,
    color: '#6b778d',
    marginBottom: 10,
  },
});

export default ConsultaPlacaScreen;
