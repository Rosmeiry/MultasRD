import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const MultasScreen = () => {
  const [multas, setMultas] = useState([
    { id: '1', tipo: 'Exceso de velocidad', detalle: 'Circular a una velocidad superior a la permitida.', precio: '$100' },
    { id: '2', tipo: 'Estacionamiento indebido', detalle: 'Estacionar en lugares no permitidos.', precio: '$50' },
    { id: '3', tipo: 'Alcoholemia', detalle: 'Conducir bajo los efectos del alcohol.', precio: '$200' },
    { id: '4', tipo: 'Saltarse un semáforo', detalle: 'No respetar la señal de semáforo en rojo.', precio: '$150' },
  ]);

  const renderMultaItem = ({ item }) => (
    <View style={styles.multaItem}>
      <Text style={styles.tipoMulta}>{item.tipo}</Text>
      <Text style={styles.detalleMulta}>{item.detalle}</Text>
      <Text style={styles.precioMulta}>{item.precio}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tipo de Multas</Text>
      <FlatList
        data={multas}
        keyExtractor={(item) => item.id}
        renderItem={renderMultaItem}
        contentContainerStyle={styles.flatlistContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    backgroundColor: '#fafbfd',
    paddingTop: 30, 
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#0c6951', // Azul oscuro
  },
  flatlistContainer: {
    alignItems: 'center',
  },
  multaItem: {
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
    marginBottom: 20,
    width: '80%',
  },
  tipoMulta: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10, // Reducido el margen inferior
    color: '#34375f', // Azul oscuro
  },
  detalleMulta: {
    fontSize: 16,
    color: '#6b778d',
    marginBottom: 20,
  },
  precioMulta: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#581d1f', // Azul oscuro
    marginTop: 5, // Agregado margen superior
  },
});

export default MultasScreen;
