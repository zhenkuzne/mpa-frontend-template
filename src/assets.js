const requireAll = r => r.keys().forEach(r);

// include svg-sprite
requireAll(require.context('./ico/', true, /\.svg$/));
// include pug-templates
requireAll(require.context('./pug/', false, /\.pug$/));
