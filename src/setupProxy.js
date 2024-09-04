// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://suggestqueries.google.com', // Target server
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove /api from the request URL
      },
    })
  );
};
