import './js/main.js';
import './styl/main.styl';

let requireAll = r => r.keys().forEach(r);

// подключение svg-спрайтов
requireAll(require.context('./ico/', true, /\.svg$/));
// подключение pug-шаблонов
requireAll(require.context('./pug/', false, /\.pug$/));
