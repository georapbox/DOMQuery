# .html()

```js
.html(htmlString)
```

Returns: [DOMQuery](../README.md#domquery-q)

**Description:** Set the HTML contents of every element in the matched elements set.

## Arguments

> **htmlString** {string}<br>
> An HTML string to set as the content of each matched element.

## Examples

#### HTML
```html
<p id="foobar">Foo Bar</p>
```

#### Javascript
```js
Q('#foobar').html('<span>Lorem ipsum dolor sit amet...</span>');
```

will result in:

```html
<p id="foobar">
    <span>Lorem ipsum dolor sit amet...</span>
</p>
```

-------------------------------------------------------------------------------------------------------------

```js
.html()
```

Returns: String

**Description:** Get the HTML contents of the first element in the matched elements set.

## Examples

#### HTML
```html
<p id="foobar">
    <span>Lorem ipsum dolor sit amet...</span>
</p>
```

#### Javascript
```js
Q('#foobar').html(); // => "<span>Lorem ipsum dolor sit amet...</span>"
```
