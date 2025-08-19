
const os = require('os');
const dotenv = require("dotenv");
const app = require("./App");
const Loaders = require("./src/Loaders/index");

dotenv.config();
Loaders.start();

const PORT = process.env.PORT || 8000;
const HOST = '0.0.0.0';

// Só quero saber qual o ip que ta rodando essa disgraça
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const iface of Object.values(interfaces)) {
    for (const config of iface) {
      if (config.family === 'IPv4' && !config.internal) {
        return config.address;
      }
    }
  }
  return 'localhost';
}


const IP = getLocalIP();

app.listen(PORT, HOST, () => {
  console.log(`🚀 Servidor rodando em http://${IP}:${PORT}`);
});
