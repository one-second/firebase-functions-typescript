# firebase-functions-typescript
A starter repo for firebase functions with typescript

## Setup

```
cd functions
npm install
```

### .firebaserc

Update your project id in the .firebaserc file

### service-account.json

Add your service-account.json in the `functions` folder
It's ignored by git.

### webpack

This starter uses webpack to to transpile and build the `functions/index.js` based on `functions/src/index.ts` and all it's imports.

`functions/index.js` is ignored by git.


## serve and deploy

Currently you can only serve https functions locally.

`npm run serve`

`npm run deploy`

You can also build the project with `npm run webpack` and then use the firebase tools cli to update your functions


