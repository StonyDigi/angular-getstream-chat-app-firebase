// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'angular-chat-app-231e8',
    appId: '1:542941297142:web:ffddf8530e88a0ba146fd7',
    storageBucket: 'angular-chat-app-231e8.appspot.com',
    apiKey: 'AIzaSyCWWlDQ3xWIGXD0BIdYWpW9wUPPuE1-lxg',
    authDomain: 'angular-chat-app-231e8.firebaseapp.com',
    messagingSenderId: '542941297142',
  },
  production: false,
  apiUrl: 'https://us-central1-get-stream-io-decoded.cloudfunctions.net',
  stream: {
    key: 'wxgsgqrws5v8'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
