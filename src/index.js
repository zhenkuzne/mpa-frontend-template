import './js/main.js';
import './styl/main.styl';

// подключение svg-спрайтов
let requireAll = r => r.keys().forEach(r);
requireAll(require.context('./ico/', true, /\.svg$/));
