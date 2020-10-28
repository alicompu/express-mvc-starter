Express MVC Starter
==================================
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![Build Status](https://travis-ci.org/oguzhanoya/express-mvc-boilerplate.svg?branch=master)](https://travis-ci.org/oguzhanoya/express-mvc-boilerplate)

> A simple mvc boilerplate for express.js (gulp + expressjs + nodemon + browser-sync)

## Related modules

* express - web application framework for node
* pug - template engine
* stylus - pre-processor CSS
* mongoose - nodejs orm for mongodb
* bower - a package manager for the web
* gulp - automate workflow
* routes => api || web

## Prerequisites

* Node.js `http://nodejs.org`
* MongoDB `brew install mongodb`

## Project Structure
```sh
.
├── app/
│   └── controllers           # contains controller files
│   └── helpers               # contains helper files
│   └── models                # contains model files
│   └── views                 # contains express view (pug) files
├── config/
│   ├── index.js              # environment config file
│   └── db.js                 # db config
├── public/                   # contains static assets
│   ├── components            # bower components folder
│   │   └── ...
│   ├── favicon               # favicon folder
│   ├── fonts                 # contains font files
│   ├── css                   # all files will generate from gulp
│   ├── styl                  # contains style sheets (stylus)
│   ├── js                    # contains js files
│   └── img                   # contains image files
├── routes/
│   ├── web.js                # routes for web
│   └── api.js                # routes for api
├── test/
│   └── spec.js               # unit & func tests
├── .bowerrc                  # bower config
├── .env                      # .env config system
├── .bower.json               # bower dependencies
├── .Procfile                 # process file for heroku implementation
├── .gitignore                # specifies intentionally untracked files to ignore
├── .editorconfig.js          # editor config
├── .gulpfile.js              # gulp config
├── .eslintrc.yml             # eslint config
├── .eslintignore             # eslint ignore specific files and directories config file
├── .travis.yml               # travis ci config
├── app.js                    # app setup file
└── package.json              # build scripts and dependencies

```

## Getting Started

The easiest way to get started is to clone the repository:

```sh
# Get the latest snapshot
$ git clone https://github.com/alicompu/express-mvc-starter.git myproject
$ cd myproject

# Install dependencies
$ npm install
$ bower install

$ node app.js
```

## Development

    npm run start
    
Your app should now be running on [localhost:3000](http://localhost:3000/).

## Test

    npm test

## Lint

    npm run lint

## Docker Support

* Docker `https://docs.docker.com/engine/installation/`

```
# Build the project
docker-compose build  

# Start the application
docker-compose up
```

## Deploy

Make sure you have the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```
heroku create
git push heroku master
heroku open
```
## Contact
Site me for help you [Ali Najafi](http://alinajaficv.ir/)

## License

MIT
