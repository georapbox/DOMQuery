# .removeAttr()

```js
.removeAttr(attrName)
```

Returns: [DOMQuery](../README.md#domquery-q)

**Description:** Remove one or more attributes from each element in the set of matched elements.

## Arguments

> **attrName** {string}<br>
> The attribute(s) to remove. To remove more than one attribute, use a space-seperated string.

## Examples

#### HTML
```html
<section>
    <div id="test" data-name="test" contentEditable="true" width="250"></div>
<section>
```

#### Javascript
```js
Q('#test').removeAttr('data-name contenteditable');
// => Will remove "data-name" and "contenteditable" attributes
```
