# .css()

```js
.css(properties)
```

Returns: [DOMQuery](../README.md#domquery-q)

**Description:** Set one or more CSS properties for the set of matched elements.

## Arguments

> **properties** {object}<br>
> An object of property-value pairs to set.

## Examples

```js
Q('#test a').css({
    color: 'dodgerblue',
    textDecoration: 'none',
    'font-weight': 'bold'
});
```

-----------------------------------------------------------------------

```js
.css(property)
```

Returns: String

**Description:** Get the computed style properties for the first element in the set of matched elements.

## Arguments

> **property** {string}<br>
> A string representing the property name.

## Examples

#### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        #foobar {
            position: absolute;
            left: 100px;
            top: 200px;
            height: 150px;
        }
    </style>
</head>
<body>
    <p id="foobar">Foo Bar</p>
</body>
</html>
```

#### Javascript
```js
Q('#foobar').css('position'); // => "absolute"
Q('#foobar').css('left'); // => "100px"
Q('#foobar').css('top'); // => "200px"
Q('#foobar').css('height'); // => "150px"
```
