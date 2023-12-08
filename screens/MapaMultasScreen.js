import React, { useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { View, StyleSheet, Text } from 'react-native';

const MapaMultasScreen = () => {
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
    // Agrega más multas según sea necesario
  ]);

  const [selectedMulta, setSelectedMulta] = useState(null);

  const handleMarkerPress = (multa) => {
    setSelectedMulta(multa);
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{ latitude: 37.7749, longitude: -122.4194, latitudeDelta: 0.05, longitudeDelta: 0.05 }}>
        {multasRegistradas.map((multa) => (
          <Marker
            key={multa.id}
            coordinate={{ latitude: multa.latitud, longitude: multa.longitud }}
            onPress={() => handleMarkerPress(multa)}
          >
            <Callout>
              <Text>{multa.nombre}</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>

      {/* Muestra los detalles de la multa seleccionada */}
      {selectedMulta && (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Detalles de la Multa</Text>
          <Text>{`Nombre: ${selectedMulta.nombre}`}</Text>
          <Text>{`Tipo de Vehículo: ${selectedMulta.tipoVehiculo}`}</Text>
          <Text>{`Fecha: ${selectedMulta.fecha}`}</Text>
          <Text>{`Ubicación: Latitud ${selectedMulta.latitud}, Longitud ${selectedMulta.longitud}`}</Text>
          <Text>{`Detalles: ${selectedMulta.detalles}`}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  detailsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default MapaMultasScreen;
