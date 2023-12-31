import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert, Platform, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AplicarMultaScreen = () => {
  const [cedula, setCedula] = useState('');
  const [placa, setPlaca] = useState('');
  const [motivo, setMotivo] = useState('');
  const [fotoEvidencia, setFotoEvidencia] = useState('');
  const [comentario, setComentario] = useState('');
  const [notaVoz, setNotaVoz] = useState('');
  const [latitud, setLatitud] = useState('');
  const [longitud, setLongitud] = useState('');
  const [fechaHora, setFechaHora] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    obtenerMotivosMulta();
  }, []);

  const obtenerMotivosMulta = async () => {
    
    const response = await fetch('https://api.example.com/motivosMulta');
    const data = await response.json();

    if (response.ok) {
      
    } else {
      Alert.alert('Error', 'Error al obtener motivos de multa');
    }
  };

  const aplicarMulta = () => {
    const multaData = {
      cedula,
      placa,
      motivo,
      fotoEvidencia,
      comentario,
      notaVoz,
      latitud,
      longitud,
      fechaHora,
    };

    Alert.alert('Multa Aplicada', JSON.stringify(multaData, null, 2));
  };

  const onChangeFechaHora = (event, selectedDate) => {
    const currentDate = selectedDate || fechaHora;
    setShowDatePicker(Platform.OS === 'ios');
    setFechaHora(currentDate);
  };

  const mostrarDatePicker = () => {
    setShowDatePicker(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicar Multa</Text>

      <Image
        source={require('./img/multa.jpg')}
        style={styles.image}
      />

      <TextInput
        style={styles.input}
        placeholder="Cédula"
        value={cedula}
        onChangeText={(text) => setCedula(text)}
      />

      <View>
        <TextInput
          style={styles.input}
          placeholder="Fecha & Hora"
          value={fechaHora ? fechaHora.toISOString().split('T')[0] : ''}
          onTouchStart={mostrarDatePicker}
          editable={false}
        />

        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={fechaHora || new Date()}
            mode="datetime"
            is24Hour={true}
            display="default"
            onChange={onChangeFechaHora}
          />
        )}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Placa"
        value={placa}
        onChangeText={(text) => setPlaca(text)}
      />

      <Text style={styles.label}>Motivo de la Multa</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu motivo aquí"
        value={motivo}
        onChangeText={(text) => setMotivo(text)}
      />

      <View style={styles.buttonContainer}>
        <Button title="Aplicar Multa" color="#fafbfd" onPress={aplicarMulta} />
      </View>
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
    color: '#0c6951', // Azul oscuro
    marginBottom: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderRadius: 0.4,
    width: '70%',
    padding: 10,
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34375f', // Azul oscuro
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#34375f', // Fondo azul oscuro
    borderRadius: 10, // Bordes redondeados
    overflow: 'hidden', // Para que los bordes redondeados se apliquen correctamente
    padding: 6,
  },
  image: {
    width: 180,
    height: 120,
    marginTop: 10, 
    marginBottom: 25,
  },
});

export default AplicarMultaScreen;
