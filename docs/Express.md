# MongoDB, Express, Node 6, Angular 2 Starter

## Setting up Express

### Rewrite app.js

- Rewrite app.js with class and method chaining

### Favicon

- Convert a logo image into ICO format ... name it favicon.ico
- Setup app.js to use favicon.ico

### Replace Jade with EJS

```bash
$ npm install ejs --save
ejs@2.5.2

$ npm uninstall jade --save
- jade@1.11.0 node_modules/jade
```

```javascript
app.set('view engine', 'ejs');
```

- Delete .jade files from 'view' folder


## References
* [3 ways to define a Javascript class](http://www.phpied.com/3-ways-to-define-a-javascript-class/)
* [Method Chaining](https://schier.co/blog/2013/11/14/method-chaining-in-javascript.html)
* [Convert SVG to ICO](https://cloudconvert.com/svg-to-ico)