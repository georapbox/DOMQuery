# DOMQuery
Skinny library to touch the DOM for modern browsers

## Build

### 1. Install dependancies
In root folder run:
```sh
$ npm install
```

### 2. Build files for production
In the root folder run:
```sh
$ npm run build
```
This will create a ```dist``` folder containing the distributable files. (unminified and minified versions)
The filenames depend on the project's name defined in ```package.json```.

### 3. Watch for changes (only for library development)
In the root folder run:
```sh
$ npm run watch
```
This will watch for any changes that happen in ```src``` folder and will generate the unminified bundle in ```dist``` folder. 
