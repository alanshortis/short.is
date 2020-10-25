self.addEventListener('install', evt => {
  console.log('Installed');
});

self.addEventListener('activate', evt => {
  console.log('Activated');
});
