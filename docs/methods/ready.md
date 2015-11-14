# .ready()

```js
.ready(handler)
```

Returns: [DOMQuery](../README.md#domquery-q)

**Description:** Execute a function when DOM is fully loaded.

**NOTE:** This method comes handy if for example we want to run our code inside the ```head``` node element and the DOM has not been loaded yet. If such is the case, then this is usually the best place to attach all other event handlers and run other DOMQuery code.

```.ready()``` attaches the ```DOMContentLoaded``` event on document. So, it only works with ```document``` as the selector. Therefore, the statements below will not work.

```js
function handler() {/*Do something...*/}

Q().ready(handler);
Q('p').ready(handler);
```

## Arguments

> **handler** {function}<br>
> A function to execute when DOM is loaded.

## Examples

```js
Q(document).ready(function (e) {
    // Run your code in here...
    Q('body').append('DOM is now loaded!');
});
```
