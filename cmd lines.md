dans le répertoire dans la commande :

npm install -g bower
bower install bootstrap-sass --save






REACT //!!
Creating an App

To create a new app, run:

create-react-app my-app
cd my-app

It will create a directory called my-app inside the current folder.
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

my-app
+-- README.md
+-- node_modules
+-- package.json
+-- .gitignore
+-- public
¦   +-- favicon.ico
¦   +-- index.html
¦   +-- manifest.json
+-- src
    +-- App.css
    +-- App.js
    +-- App.test.js
    +-- index.css
    +-- index.js
    +-- logo.svg
    +-- registerServiceWorker.js

No configuration or complicated folder structures, just the files you need to build your app.
Once the installation is done, you can run some commands inside the project folder:
npm start or yarn start

Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

The page will automatically reload if you make changes to the code.
You will see the build errors and lint warnings in the console.

Build errors
npm test or yarn test

Runs the test watcher in an interactive mode.
By default, runs tests related to files changed since the last commit.

Read more about testing.
npm run build or yarn build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
By default, it also includes a service worker so that your app loads from local cache on future visits.

Your app is ready to be deployed.