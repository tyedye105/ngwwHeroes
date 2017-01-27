# _Wild World Heroes_

#### By _**Marty Kovach**, 01/27/2017_


## Known issues

Users can submit blank form, however it is easy enough to edit the blank entries so that they have meaningful content.

## Description

Wild World Heroes, is a website were the user can create and manage rosters of heroes. In the application they can click on the list heroes to find out more information about individual heroes, and make decision if they can help them out. Additionally the User can add new heroes to the roster if they are not on it already.

## Setup/Installation Requirements
### Setup Firebase
  _The databased use in the app is google's Firebase.  For you to have full functionality of the app. So here is the setup instructions for that._
   *First run npm install angularfire2 firebase --save in the terminal
   *Head to https://firebase.google.com to login/signup.
   *Start a new project, and then click "Add Firebase to your web app"._
   * in your src/tsconfig.json add "types": [ "firebase" ] into the "compilerOptions"
   * create a api-keys.ts with the following code:

   export var masterFirebaseConfig = {  

    apiKey: "xxxx",  

    authDomain: "xxxx.firebaseapp.com",  

    databaseURL: "https://xxxx.firebaseio.com",  

    storageBucket: "xxxx.appspot.com",  

    messagingSenderId: "xxxx"  

  };  


 *Then input the information you got from Firebase into the api-keys.ts
 * IMPORTANT ##MAKE SURE YOU ADD api-keys.ts TO YOUR .gitingore file!
 * Everything else regarding Firebase setup has already been done for you, so once finished these steps the app will be hooked up to your firebase.

 ###Installation

* Clone this repo: https://github.com/tyedye105/jsmealtracker
* In the terminal run $ npm install
* In the terminal run $ bower install
* In The terminal run ng serve
* Go to localhost:4200, and check out the app!

## Technologies Used

_hmtl, css, JavaScript, bootstrap, jquery, node, bower, Angular2 Firebase, Angular-CLI

### License

*MIT License*

Copyright (c) 2017 **_Marty Kovach_**
