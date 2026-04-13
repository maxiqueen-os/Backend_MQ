const express = require('express');
const { inject } = require('@vercel/analytics');
const app = express();

// Inject Vercel Analytics
inject();

app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('MaxiQueen OS Backend activo 🚀');
});

// API de prueba
app.get('/api/status', (req, res) => {
  res.json({
    status: "ok",
    sistema: "MaxiQueen OS",
    version: "1.0"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
