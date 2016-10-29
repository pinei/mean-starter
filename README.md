# MongoDB, Express, Node 6, Angular 2 Starter

## Prerequisite

* Node.js 6
* NPM
* Mongo DB

## Setting up Express

```bash
$ npm install -g express-generator
...
express-generator@4.13.4
npm info ok

$ express mean-starter
...
$ cd mean-starter
$ npm install
...
mean-starter@0.0.0
npm info ok
```

## Setting up Angular 2

```bash
$ cd mean-starter
$ mkdir client
$ cd client
```

Create configuration files:

- package.json
- tsconfig.json
- systemjs.config.js

```bash
$ npm install
...

npm info ok
$ mkdir app
```

Create the root module, a component and boostraping

- app/app.module.ts
- app/app.component.ts
- app/main.ts

```bash
$ npm start
...
My First Angular App (at the browser)
```


## Setting Express app to serve Angular 2 app

```javascript
app.use(express.static(path.join(__dirname, 'client')));
```

- Open http://localhost:3000
- It renders "My First Angular App"

## References

* [Building an Express Node JS app with Angular 2](https://medium.com/defmethod-works/building-an-express-node-js-app-with-angular-2-and-the-twitter-api-4eebd06fecff)
* [Angular Quickstart](https://angular.io/docs/ts/latest/quickstart.html)
* [NPM - Front End Packaging](http://blog.npmjs.org/post/101775448305/npm-and-front-end-packaging)
* [GruntJS in a MEAN stack application](https://scotch.io/tutorials/using-gruntjs-in-a-mean-stack-application)
