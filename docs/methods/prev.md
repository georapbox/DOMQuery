# .prev()

```js
.prev()
```

Returns: [DOMQuery](../README.md#domquery-q)

**Description:** Get the immediately preceding sibling of each element in the set of matched elements.

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
Q('#b').prev(); // => Object { 0: <li#b>, length: 1, selector: "#b" }
Q('#list li').prev(); // => Object { 0: <li#a>, 1: <li#b>, 2: <li#c>, length: 3, selector: "#list li" }
```
