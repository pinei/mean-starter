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
    }),
    new winston.transports.Console(),
    new winston.transports.File({ filename: './logs/all-logs.log' })
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: 'exceptions.log' }),
  ]
});

module.exports = logger