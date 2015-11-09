# .css()

```js
.css(styles)
```

Returns: [DOMQuery](../README.md#domquery-q)

**Description:** Set one or more CSS properties for the set of matched elements.

## Arguments

> **styles** {object}<br>
> An object of property-value pairs to set.

## Examples

```js
Q('#test a').css({
    color: 'dodgerblue',
    textDecoration: 'none',
    'font-weight': 'bold'
});
```
