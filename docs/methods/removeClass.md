# .removeClass()

```js
.removeClass(className)
```

Returns: [DOMQuery](../README.md#domquery-q)

**Description:** Adds the specified class(es) to each element in the set of matched elements.

## Parameters

> **className** {string}<br>
> One or more space-separated classes to be removed from the class attribute of each matched element.

## Examples

```js
Q('p').removeClass('newClass'); // => Removes the "newClass" from all "p" elements found.
Q('p').removeClass('foo bar'); // => Removes the classes "foo" and "bar" from all "p" elements found.
```
