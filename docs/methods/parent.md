# .parent()

```js
.parent()
```

Returns: [DOMQuery](../README.md#domquery-q)

**Description:** Get the parent of each element in the of matched elements set.

## Examples

#### HTML
```html
<body>
    <section class="my-section">
        <ul id="list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </section>

    <p>My parent is "body"</p>

    <section>
        <p>My parent is section</p>
        <p>My parent is section</p>
    <section>
</body>    
```

#### Javascript
```js
Q('#list').parent();
// => Object { 0: <section.my-section>, length: 1, selector: "#list.parent()" }

Q('p').parent();
// => Object { 0: <body>, 1: <section>, length: 2, selector: "p.parent()" }
```
