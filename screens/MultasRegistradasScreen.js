import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const MultasRegistradasScreen = () => {
  const [multasRegistradas, setMultasRegistradas] = useState([
    {
      id: '1',
      nombre: 'Juan Pérez',
      tipoVehiculo: 'Automóvil',
      fecha: '2023-12-15',
      latitud: 37.7749,
      longitud: -122.4194,
      detalles: 'Exceso de velocidad',
    },
    {
      id: '2',
      nombre: 'María Rodríguez',
      tipoVehiculo: 'Motocicleta',
      fecha: '2023-12-16',
      latitud: 34.0522,
      longitud: -118.2437,
      detalles: 'Estacionamiento indebido',
    },
    
  ]);

  const [detallesMulta, setDetallesMulta] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleMultaClick(item)}>
      <View style={styles.item}>
        <Text style={styles.label}>Nombre: {item.nombre}</Text>
        <Text style={styles.label}>Tipo de Vehículo: {item.tipoVehiculo}</Text>
        <Text style={styles.label}>Fecha: {item.fecha}</Text>
        <Text style={styles.label}>Ubicación: Latitud {item.latitud}, Longitud {item.longitud}</Text>
        <View style={styles.separator} />
      </View>
    </TouchableOpacity>
  );

  const handleMultaClick = (multa) => {
    
    setDetallesMulta(multa);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Multas Registradas</Text>

      <Image
        source={require('./img/registro.jpg')}
        style={styles.image}
      />

      <FlatList
        data={multasRegistradas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {/* Muestra los detalles de la multa seleccionada */}
      {detallesMulta && (
        <View style={styles.detallesContainer}>
          <Text style={styles.detallesTitle}>Detalles de la Multa</Text>
          <Text style={styles.label}>Nombre: {detallesMulta.nombre}</Text>
          <Text style={styles.label}>Tipo de Vehículo: {detallesMulta.tipoVehiculo}</Text>
          <Text style={styles.label}>Fecha: {detallesMulta.fecha}</Text>
          <Text style={styles.label}>Ubicación: Latitud {detallesMulta.latitud}, Longitud {detallesMulta.longitud}</Text>
          <Text style={styles.label}>Detalles: {detallesMulta.detalles}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8edf3',
    padding: 20,
    alignItems: 'center', // Centra los elementos horizontalmente
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0c6951',
    marginBottom: 16,
  },
  image: {
    width: 330,
    height: 200,
    marginBottom: 30,
  },
  item: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#1a237e',
    marginBottom: 8,
  },
  detallesContainer: {
    marginTop: 10,
    backgroundColor: '#219677',
    borderRadius: 10,
    padding: 20,
    marginBottom: 23,
  },
  detallesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#21233d',
    marginBottom: 10,
  },
});

export default MultasRegistradasScreen;
