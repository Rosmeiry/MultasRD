// api.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

const vehiculos = [
  { placa: 'ABC123', marca: 'Toyota', modelo: 'Corolla' },
  { placa: 'XYZ789', marca: 'Honda', modelo: 'Civic' },
  // Agrega más vehículos según sea necesario
];

app.post('/consultar-vehiculo', (req, res) => {
  const { placa } = req.body;
  const vehiculo = vehiculos.find((v) => v.placa === placa);

  if (vehiculo) {
    res.json(vehiculo);
  } else {
    res.status(404).json({ error: 'Vehículo no encontrado' });
  }
});

app.listen(port, () => {
  console.log(`API de vehículos escuchando en http://localhost:${port}`);
});
