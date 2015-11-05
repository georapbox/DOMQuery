# .toggleClass()

```js
.toggleClass(className [, state])
```

Returns: [DOMQuery](../README.md#domquery-q)

**Description:** Add or remove one or more classes from each matched element, depending on either the class's presence or the value of the optional state argument.

## Parameters

> **className** {string}<br>
> One or more space-separated classes to be toggled for each matched element.

> **[state]** {boolean}<br>
> A boolean value to determine whether the class should be added or removed.

## Examples

```js
Q('p').toggleClass('newClass'); // => The "newClass" will be removed from any "p" elements that already have it and will be added to those that don't.
```

Using the optional ```state``` argument, one can determine whether the class should be added or removed.

```js
Q('#foo').toggleClass('bar', shouldAdd);
```

The statement above is equivalent to the statement below:

```js
if (shouldAdd === true) {
    Q('#foo').addClass('bar');
} else {
    Q('#foo').removeClass('bar');
}
```
