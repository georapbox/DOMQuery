# .attr()

```js
.attr(attributes)
```

Returns: [DOMQuery](../README.md#domquery-q)

**Description:** Set one or more attributes for every element in the matched elements set.

## Arguments

> **attributes** {object}<br>
> An object of attribute-value pairs to set.

## Examples

#### Javascript
```js
Q('p').attr({
    'data-id': 1,
    'data-test': 'test',
    'data-bool': false
}); // => Sets 3 attributes and their values on every "p" element found.
```

-------------------------------------------------------------------------------------------------------------

```js
.attr(attributeName)
```

Returns: String

**Description:** Get the value of an attribute for the first element in the matched elements set.

## Arguments

> **attributeName** {string}<br>
> The name of the attribute to get.

## Examples

#### HTML
```html
<p id="foobar" data-name="foobar-name">Foo Bar</p>

<section>
    <p>Lorem ipsum dolor sit amet...</p>
    <p data-name="sample-paragraph">Lorem ipsum dolor sit amet...</p>
<section>
```

#### Javascript
```js
Q('#foobar').attr('data-name'); // => "foobar-name"

Q('#foobar').attr('id'); // => "foobar"

Q('section p').attr('data-name'); // => undefined, because it only returns the value of an attribute for the first element in the matched elements set
```
