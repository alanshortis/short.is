var analytics = require('./modules/_analytics');

if (document.body.className.match('post')) {
  var prism = require('prismjs');
  var prismScss = require('./modules/_prism-scss');
}

analytics.goog();
