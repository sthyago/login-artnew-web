const proxy = [
    {
      context: ['/api'],
      target: 'http://hga.ddns.net:8090/',
      secure:false,
      logLevel: 'debug',
      pathRewrite: {'^/api' : '' }
    }
  ];
  module.exports = proxy;