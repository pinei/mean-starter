var winston = require('winston');
require('winston-daily-rotate-file');

var logger = new (winston.Logger)({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'all-logs.log' }),
    new winston.transports.DailyRotateFile({
      filename: 'log',
      datePattern: 'yyyy-MM-dd.',
      prepend: true,
      level: process.env.ENV === 'development' ? 'debug' : 'info'
    })
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: 'exceptions.log' }),
  ]
});