# Ionic 4 and Angular 6 Tutorial: Firebase Realtime CRUD Mobile App

This source code is part of
[Building a CRUD Ionic application with Firestore](https://javebratt.com/crud-ionic-firestore/) tutorial.

# About

This is a CRUD Ionic application with Firestore.

Firestore is Firebase’s new database. It’s a managed NoSQL document-oriented database for mobile and web development.
[Firestoe Quickstart guide](https://firebase.google.com/docs/firestore/quickstart)

# To run locally:

* Clone this repo
* Run `npm install`
* Run `ionic serve`
* Run `ionic serve -l` for ionic lab view

# Android Publishing

To generate a release build for Android, we can use the following cordova cli command:


* To get the unsigned apk output.
Note: This form of release is unsigned and and cannot be installed in any device.
```bash
 ionic cordova build --release android
```
Next, we can find our unsigned APK file in platforms/android/build/outputs/apk


* To get the debug apk which can be debugged with Chrome
```bash
ionic cordova build android --prod
```
Next, we can find our unsigned APK file in platforms/android/debug/outputs/apk


* To get the production release
```bash
ionic cordova build android --prod --release
```
Next, we can find our unsigned APK file in platforms/android/prod/outputs/apk


# App screenshots:

```
* Firestore db screenshot
```

![firestore-db-shotpng](https://user-images.githubusercontent.com/24749532/53285966-b0f0d380-378d-11e9-8c05-6adb278049dc.PNG)

```
* Application home screenshot
```

![firestore-app-shot-1-home](https://user-images.githubusercontent.com/24749532/53285967-b5b58780-378d-11e9-9241-6f9d43b86d54.PNG)

```
* Application details view page screenshot
```

![firestore-app-shot-2-details](https://user-images.githubusercontent.com/24749532/53285968-b817e180-378d-11e9-8353-f6dc8439b227.PNG)

```
* Application create entry page screenshot
```

![firestore-app-shot-3-create](https://user-images.githubusercontent.com/24749532/53285969-bbab6880-378d-11e9-9f43-f5f0649a9c74.PNG)
