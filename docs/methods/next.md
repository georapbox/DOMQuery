# .next()

```js
.next()
```

Returns: [DOMQuery](../README.md#domquery-q)

**Description:** Get the immediately following sibling of each element in the set of matched elements.

## Examples

#### HTML
```html
<ul id="list">
    <li id="a">Item 1</li>
    <li id="b">Item 2</li>
    <li id="c">Item 3</li>
    <li id="d">Item 4</li>
</ul>
```

#### Javascript
```js
Q('#a').next(); // => Object { 0: <li#b>, length: 1, selector: "#a" }
Q('#list li').next(); // => Object { 0: <li#b>, 1: <li#c>, 2: <li#d>, length: 3, selector: "#list li" }
```
