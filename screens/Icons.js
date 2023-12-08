import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Icons = ({ name, size, color }) => {
  // Define el nombre de los iconos según el estado del clima
  let iconName;
  switch (name) {
    case 'Thunderstorm':
      iconName = 'thunderstorms-rain';
      break;
    case 'Drizzle':
      iconName = 'drizzle';
      break;
    case 'Rain':
      iconName = 'rain';
      break;
    case 'Snow':
      iconName = 'snowy';
      break;
    case 'Clear':
      iconName = 'clear-day';
      break;
    case 'Atmosphere':
      iconName = 'weather';
      break;
    case 'Clouds':
      iconName = 'fog';
      break;
    case 'Fog':
      iconName = 'fog';
      break;
    case 'Haze':
      iconName = 'haze';
      break;
    case 'Smoke':
      iconName = 'smoke';
      break;
    default:
      iconName = 'clear-day';
  }

  return <Icon name={iconName} size={size} color={color} />;
};

export default Icons;
