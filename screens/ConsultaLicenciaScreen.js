import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ConsultaLicenciaScreen = () => {
  const [licencia, setLicencia] = useState('');
  const [detalleConductor, setDetalleConductor] = useState(null);

  const conductores = {
    LICENCIA1: { nombre: 'Amadis Suarez', edad: 67, telefono: 829-447, ciudad: 'Santo Domingo' },
    LICENCIA2: { nombre: 'Nombre2', edad: 25, ciudad: 'Ciudad2' },
    // Agrega más conductores según tus necesidades
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

      <Picker
        selectedValue={licencia}
        style={styles.picker}
        onValueChange={(itemValue) => setLicencia(itemValue)}
      >
        <Picker.Item label="Seleccione una licencia" value="" />
        <Picker.Item label="DGTTXMD" value="LICENCIA1" />
        <Picker.Item label="HKLGBCR" value="LICENCIA2" />
        {/* Agrega más licencias según tus necesidades */}
      </Picker>

      <View style={styles.buttonContainer}>
        <Button
          title="Consultar"
          onPress={consultarConductor}
          color="#ffffff" // Color del texto blanco
        />
      </View>

      {detalleConductor && (
        <View style={styles.card}>
          <Text style={styles.detailS}>Detalles del conductor:</Text>
          <Text style={styles.detail}>Nombre: {detalleConductor.nombre}</Text>
          <Text style={styles.detail}>Edad: {detalleConductor.edad}</Text>
          <Text style={styles.detail}>Telefono: {detalleConductor.telefono}</Text>
          <Text style={styles.detail}>Ciudad: {detalleConductor.ciudad}</Text>
          {/* Agrega más campos según tus necesidades */}
        </View>
      )}
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
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 130,
    backgroundColor: '#1a237e', // Fondo azul oscuro
    borderRadius: 10, // Bordes redondeados
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
