var analytics = require('./modules/_analytics');

if (document.body.className.match('post')) {
  require('prismjs');
  require('./modules/_prism-scss');
}

analytics.goog();
