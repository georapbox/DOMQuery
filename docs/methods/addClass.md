# .addClass()

```js
.addClass(className)
```

Returns: [DOMQuery](../README.md#domquery-q)

**Description:** Adds the specified class(es) to each element in the set of matched elements.

## Parameters

> **className** {string}<br>
> One or more space-separated classes to be added to the class attribute of each matched element.

## Examples

```js
Q('p').addClass('newClass'); // => Adds the "newClass" to all "p" elements found.
Q('.newClass').addClass('foo bar'); // => Adds the classes "foo" and "bar" to all elements with class "newClass".
```
