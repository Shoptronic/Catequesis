self.addEventListener('fetch', function(event) {
  // Este archivo vacío es suficiente para engañar a Chrome
  // y que nos permita instalar la web como App.
  event.respondWith(fetch(event.request));
});
