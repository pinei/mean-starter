# MongoDB, Express, Node 6, Angular 2 Starter

## Setting up Express

### Replacing Jade with EJS

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



