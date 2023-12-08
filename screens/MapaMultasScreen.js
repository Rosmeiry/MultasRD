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
    {
      id: '3',
      nombre: 'Carlos González',
      tipoVehiculo: 'Automóvil',
      fecha: '2023-12-17',
      latitud: 38.9072,
      longitud: -77.0370,
      detalles: 'Violación de semáforo',
    },
    {
      id: '4',
      nombre: 'Laura Martínez',
      tipoVehiculo: 'Motocicleta',
      fecha: '2023-12-18',
      latitud: 40.7128,
      longitud: -74.0060,
      detalles: 'Estacionamiento en zona prohibida',
    },
    {
      id: '5',
      nombre: 'Roberto Sánchez',
      tipoVehiculo: 'Automóvil',
      fecha: '2023-12-19',
      latitud: 41.8781,
      longitud: -87.6298,
      detalles: 'Exceso de velocidad',
    },
    
  ]);

  const [selectedMulta, setSelectedMulta] = useState(null);

  const handleMarkerPress = (multa) => {
    setSelectedMulta(multa);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {multasRegistradas.map((multa) => (
          <Marker
            key={multa.id}
            coordinate={{
              latitude: multa.latitud,
              longitude: multa.longitud,
            }}
            onPress={() => handleMarkerPress(multa)}
          >
            <Callout>
              <Text>{multa.nombre}</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>

  
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
    top: 20, 
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 20, 
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#34375f',
  },
});

export default MapaMultasScreen;
