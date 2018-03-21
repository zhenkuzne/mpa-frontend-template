import './js/main';
import './styl/main.styl';

const requireAll = r => r.keys().forEach(r);

// подключение svg-спрайтов
requireAll(require.context('./ico/', true, /\.svg$/));
// подключение pug-шаблонов
requireAll(require.context('./pug/', false, /\.pug$/));
