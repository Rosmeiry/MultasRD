// App.js
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AuthScreen from './screens/AuthScreen';
import MenuScreen from './screens/MenuScreen';
import TarifarioScreen from './screens/TarifarioScreen';
import ConsultaLicenciaScreen from './screens/ConsultaLicenciaScreen';
import AplicarMultaScreen from './screens/AplicarMultaScreen';
import MultasRegistradasScreen from './screens/MultasRegistradasScreen';
import MapaMultasScreen from './screens/MapaMultasScreen';
import NoticiasScreen from './screens/NoticiasScreen';
import EstadoClimaScreen from './screens/EstadoClimaScreen';
import HoroscopoScreen from './screens/HoroscopoScreen';
import ConsultaPlacaScreen from './screens/ConsultaPlacaScreen';


const Stack = createStackNavigator();



export default function App() {
  useEffect(() => {
    return () => {
   
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Autenticación">
        <Stack.Screen name="ORC" component={AuthScreen} />
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Menú" component={MenuScreen} />
        <Stack.Screen name="Tarifario" component={TarifarioScreen} />
        <Stack.Screen name="ConsultaPlaca" component={ConsultaPlacaScreen} />
        <Stack.Screen name="ConsultaLicencia" component={ConsultaLicenciaScreen} />
        <Stack.Screen name="AplicarMulta" component={AplicarMultaScreen} />
        <Stack.Screen name="MultasRegistradas" component={MultasRegistradasScreen} />
        <Stack.Screen name="MapaMultas" component={MapaMultasScreen} />
        <Stack.Screen name="Noticias" component={NoticiasScreen} />
        <Stack.Screen name="EstadoClima" component={EstadoClimaScreen} />
        <Stack.Screen name="Horoscopo" component={HoroscopoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
