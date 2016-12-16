# MongoDB, Express, Node 6, Angular 2 Starter

## Setting up a database client

Use Mongoose

```bash
$ npm install --save mongoose
mongoose@4.7.2
```

## Promise library

```
DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
```

```javascript
mongoose.Promise = Promise // node 4.x
```


## References

* [mongoose](http://mongoosejs.com/)
* [Using ES6 Promises Instead of Callbacks for Mongoose Queries](http://erikaybar.name/using-es6-promises-with-mongoosejs-queries/)



