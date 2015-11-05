# .hasClass()

```js
.hasClass(className)
```

Returns: Boolean

**Description:** Determine whether any element in the set of matched elements contain the given class.

## Arguments

> **className** {string}<br>
> The class name to check against.

## Examples

#### HTML
```html
<section>
    <p class="bar" id="bar">Bar 1</p>
    <p class="foo">Foo 1</p>
    <p class="foo">Foo 2</p>
<section>
```

#### Javascript
```js
Q('#bar').hasClass('bar'); // => true
Q('#bar').hasClass('foo'); // => false
Q('p').hasClass('bar'); // => true, because the the class "bar" exists at least at one of the "p" elements
Q('p').hasClass('test'); // => false, because the class "test" does not exist in any of the "p" elements
```
