import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const EstadoClimaScreen = () => {
  const [search, setSearch] = useState('roma');
  const [values, setValues] = useState(null);

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=0edd1ecdd818c9ecaa72c0643e1668ee`;

  const getData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();

      if (data.cod >= 400) {
        setValues(null);
      } else {
        setValues(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (text) => {
    setSearch(text);
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conoce tu clima: </Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Buscar ciudad..."
          onChangeText={handleSearch}
          autoFocus
        />
      </View>

      <View style={styles.card}>
        {values ? (
          <View style={styles.cardContainer}>
            <Text style={styles.cityName}>{values.name}</Text>
            <Text style={styles.temp}>{values.main.temp.toFixed(0)}&deg;</Text>
            <View style={styles.cardFooter}>
              <Text style={styles.tempMinMax}>
                {values.main.temp_min.toFixed(0)}&deg; | {values.main.temp_max.toFixed(0)}&deg;
              </Text>
            </View>
          </View>
        ) : (
          <Text>{"City not found"}</Text>
        )}
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
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  card: {
    marginTop: 20,
    alignItems: 'center',
  },
  cardContainer: {
    width: '80%',
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
  cityName: {
    fontWeight: '300',
    fontSize: 30,
    color: '#6b778d',
    marginBottom: 10,
  },
  temp: {
    fontWeight: '300',
    fontSize: 60,
    color: '#17223b',
    marginBottom: 10,
  },
  cardFooter: {
    backgroundColor: '#16459d',
    color: 'aliceblue',
    borderRadius: 10,
    padding: 10,
  },
  tempMinMax: {
    fontWeight: '300',
    fontSize: 18,
    color: 'aliceblue',
  },
});

export default EstadoClimaScreen;
