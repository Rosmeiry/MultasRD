import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const MultasScreen = () => {
  const [multas, setMultas] = useState([
    { id: '1', tipo: 'Exceso de velocidad', detalle: 'Circular a una velocidad superior a la permitida.' },
    { id: '2', tipo: 'Estacionamiento indebido', detalle: 'Estacionar en lugares no permitidos.' },
    { id: '3', tipo: 'Alcoholemia', detalle: 'Conducir bajo los efectos del alcohol.' },
    { id: '4', tipo: 'Saltarse un semáforo', detalle: 'No respetar la señal de semáforo en rojo.' },
    { id: '5', tipo: 'Saltarse un STOP', detalle: 'No detenerse en una señal de STOP.' },
    { id: '6', tipo: 'Saltarse un ceda el paso', detalle: 'No ceder el paso cuando es obligatorio.' },
    { id: '7', tipo: 'Uso del móvil', detalle: 'Utilizar el móvil mientras se conduce.' },
  ]);

  const renderMultaItem = ({ item }) => (
    <View style={styles.multaItem}>
      <Text style={styles.tipoMulta}>{item.tipo}</Text>
      <Text style={styles.detalleMulta}>{item.detalle}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8edf3',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#17223b', // Azul oscuro
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
    marginBottom: 10,
    color: '#6b778d',
  },
  detalleMulta: {
    fontSize: 16,
    color: '#6b778d',
  },
});

export default MultasScreen;
