var winston = require('winston');
require('winston-daily-rotate-file');

var logger = new (winston.Logger)({
  level: 'debug',
  transports: [
    new winston.transports.DailyRotateFile({
      filename: './logs/log',
      datePattern: 'yyyy-MM-dd.',
      prepend: true,
      timestamp: true,
      level: 'debug'
    })
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: './logs/exceptions.log' }),
  ]
});

module.exports = logger