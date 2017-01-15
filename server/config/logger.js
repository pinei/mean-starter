var winston = require('winston');

require('winston-daily-rotate-file');

var transports = [
    new winston.transports.DailyRotateFile({
      filename: './logs/log',
      datePattern: 'yyyy-MM-dd.',
      prepend: true,
      timestamp: true,
      level: 'debug'
    })
  ];

var logger = new (winston.Logger)({
  level: 'debug',
  transports: transports,
  exceptionHandlers: [
    new winston.transports.File({ filename: './logs/exceptions.log' }),
  ],
});

logger.middleware = require('express-winston').logger({
    transports: transports,
    meta: true, // optional: control whether you want to log the meta data about the request (default to true)
    msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: true
  });


module.exports = logger