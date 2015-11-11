# .append()

```js
.append(content)
```

Returns: [DOMQuery](../README.md#domquery-q)

**Description:** Insert HTML content to the end of every matched element.

## Arguments

> **content** {string|object}<br>
> The HTML string or DOM element or DocumentFragment node to insert.

## Examples

#### HTML
```html
<p id="foobar">Foo Bar</p>
```

#### Javascript
```js
Q('#foobar').append('<span>Lorem ipsum dolor sit amet...</span>');
```

will result in:

```html
<p id="foobar">
    Foo Bar
    <span>Lorem ipsum dolor sit amet...</span>
</p>
```
