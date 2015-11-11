# DOMQuery.js (experimental)
DOMQuery (aka Q) is a skinny, experimental DOM library for modern browsers with a jQuery like API. So far it comes with some of the methods I found myself using more often when I mess around with DOM.

## Build

### 1. Install dependancies \*
In root folder run:
```sh
$ npm install
```

### 2. Build files for production \*
In the root folder run:
```sh
$ npm run build
```
This will create a ```dist``` folder containing the distributable files. (unminified and minified versions)
The filenames depend on the project's name defined in ```package.json```.

\* ***Steps 1 and 2 are required to use the library.***

### 3. Watch for changes (only for library development)
In the root folder run:
```sh
$ npm run watch
```
This will watch for any changes that happen in ```src``` folder and will generate the unminified bundle in ```dist``` folder.

## Custom build

### 1. Change the library name and alias
DOMQuery exposes 2 variables to the window global object:

1. ```DOMQuery```
2. ```Q``` as alias for DOMQuery

To avoid any possible conflicts with other global objects you can change those namespaces in the ```package.json``` file by changing the ```name``` and ```alias``` properties. After you change any of them make sure to rebuild the library in order to generate the updated bundles.

### 2. Build with custom methods
All API methods are defined in ```src/main.js``` file.
You can delete or comment out any methods you may not need for your custom build and they will not be included in the final bundle file.

## DOMQuery API documentation

[Find the API documention here](docs#domquery-api)

## TODO
1. Add more methods to library
2. Do some unit testing for each library method
3. Optimize for performance where possible
