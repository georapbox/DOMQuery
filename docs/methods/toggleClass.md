# .toggleClass()

```js
.toggleClass(className)
```

Returns: [DOMQuery](../README.md#domquery-q)

**Description:** Add or remove one or more classes from each element in the set of matched elements, depending on the class's presence.

## Parameters

> **className** {string}<br>
> One or more space-separated classes to be toggled for each matched element.

## Examples

```js
Q('p').toggleClass('newClass'); // => The "newClass" will be removed from any "p" elements that already have it and will be added to those that don't.
```
