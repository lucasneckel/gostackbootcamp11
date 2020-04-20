import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.104:3333',
});

export default api;


/**
 * iOS com Emulador: localhost
 * iOS com físico: ip da máquina
 * 
 * Android com Emulador: localhost (adb reverse tcp:3333 tcp:3333)
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com outro emulador: 10.0.3.2 (Genymotion)
 * Androi com físico: IP da máquina
 */