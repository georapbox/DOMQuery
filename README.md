# DOMQuery.js (alpha)

DOMQuery (aka Q) is a skinny, experimental DOM library for **modern browsers** with a jQuery like API. So far it comes with some of the methods I found myself using more often when I mess around with DOM.

The reason behind DOMQuery is the fact that I wanted a minimal library for DOM manipulation that utilizes the newest DOM API but also allows chaining. DOMQuery is by no means a replacement of jQuery despite the fact that the API is a lot like this of jQuery.
This was intentional, as the jQuery's API is very elegant and most developers are familiar with it.

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

## License

This code is [MIT](http://opensource.org/licenses/mit-license.php) licenced:

Copyright (c) 2015 George Raptis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
