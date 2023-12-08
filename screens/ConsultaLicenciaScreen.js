import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ConsultaLicenciaScreen = () => {
  const [licencia, setLicencia] = useState('');
  const [detalleConductor, setDetalleConductor] = useState(null);

  const conductores = {
    LICENCIA1: { nombre: 'Amadis Suarez', edad: 67, telefono: '829-447', ciudad: 'Santo Domingo' },
    LICENCIA2: { nombre: 'Nombre2', edad: 25, ciudad: 'Ciudad2' },
    
  };

  const consultarConductor = () => {
    const conductorSeleccionado = conductores[licencia];

    if (conductorSeleccionado) {
      setDetalleConductor(conductorSeleccionado);
    } else {
      Alert.alert('Error', 'No se encontró información para la licencia ingresada');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de Conductor por Licencia</Text>

      <Image
        source={require('./img/licencia.png')} 
        style={styles.licenciaImage}
      />

      <Picker
        selectedValue={licencia}
        style={styles.picker}
        onValueChange={(itemValue) => setLicencia(itemValue)}
      >
        <Picker.Item label="Seleccione una licencia" value="" />
        <Picker.Item label="DGTTXMD" value="LICENCIA1" />
        <Picker.Item label="HKLGBCR" value="LICENCIA2" />
        
      </Picker>

      <View style={styles.buttonContainer}>
        <Button
          title="Consultar"
          onPress={consultarConductor}
          color="#ffffff" 
        />
      </View>

      {detalleConductor && (
        <View style={styles.card}>
          <Text style={styles.detailS}>Detalles del conductor:</Text>
          <Text style={styles.detail}>Nombre: {detalleConductor.nombre}</Text>
          <Text style={styles.detail}>Edad: {detalleConductor.edad}</Text>
          <Text style={styles.detail}>Telefono: {detalleConductor.telefono}</Text>
          <Text style={styles.detail}>Ciudad: {detalleConductor.ciudad}</Text>
          
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
    backgroundColor: '#e8edf3',
    padding: 20,
    paddingTop: 40, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0c6951', 
    marginBottom: 16,
    textAlign: 'center',
  },
  licenciaImage: {
    width: 200,
    height: 120,
    marginBottom: 16,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 150, 
  },
  buttonContainer: {
    marginTop: 10, // Ajustado para reducir la distancia hacia arriba
    backgroundColor: '#34375f', // Fondo azul oscuro
    borderRadius: 10, 
    overflow: 'hidden', // Para que los bordes redondeados se apliquen correctamente
  },
  card: {
    marginTop: 20,
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
  detailS: {
    fontWeight: '300',
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default ConsultaLicenciaScreen;
