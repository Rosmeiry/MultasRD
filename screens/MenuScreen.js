// MenuScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MenuScreen({ navigation }) {
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menú Principal</Text>
      <Button title="Tarifario de Multas" onPress={() => navigateTo('Tarifario')} />
      <Button title="Consulta por Placa" onPress={() => navigateTo('ConsultaPlaca')} />
      <Button title="Consulta por Licencia" onPress={() => navigateTo('ConsultaLicencia')} />
      <Button title="Aplicar Multa" onPress={() => navigateTo('AplicarMulta')} />
      <Button title="Multas Registradas" onPress={() => navigateTo('MultasRegistradas')} />
      <Button title="Mapa de Multas" onPress={() => navigateTo('MapaMultas')} />
      <Button title="Noticias" onPress={() => navigateTo('Noticias')} />
      <Button title="Estado del Clima" onPress={() => navigateTo('EstadoClima')} />
      <Button title="Horóscopo" onPress={() => navigateTo('Horoscopo')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});
