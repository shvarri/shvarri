const resource = [
  /* --- CSS --- */
  '/shvarri/assets/css/jekyll-theme-chirpy.css',

  /* --- PWA --- */
  '/shvarri/app.js',
  '/shvarri/sw.js',

  /* --- HTML --- */
  '/shvarri/index.html',
  '/shvarri/404.html',

  
    '/shvarri/categories/',
  
    '/shvarri/tags/',
  
    '/shvarri/archives/',
  
    '/shvarri/about/',
  
    '/shvarri/contact/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/shvarri/assets/img/favicons/.DS_Store',
    '/shvarri/assets/img/favicons/favicon-16x16.png',
    '/shvarri/assets/img/favicons/favicon-32x32.png',
    '/shvarri/assets/img/favicons/favicon.ico',
    '/shvarri/assets/img/favicons/mstile-150x150.png',
    '/shvarri/assets/js/dist/categories.min.js',
    '/shvarri/assets/js/dist/commons.min.js',
    '/shvarri/assets/js/dist/home.min.js',
    '/shvarri/assets/js/dist/misc.min.js',
    '/shvarri/assets/js/dist/page.min.js',
    '/shvarri/assets/js/dist/post.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];

