# .each()

```js
.each(func)
```

Returns: [DOMQuery](../README.md#domquery-q)

**Description:** Iterate over a DOMQuery object, executing a function for each matched element.

## Arguments

> **func** {function}<br>
> A function to execute for each mathed element.<br/>
> **NOTE:** You can stop the loop from within the callback function by returning ```false```.

## Examples

```js
Q('section p').each(function (element, index) {
    console.log(element); // => The DOM element
    console.log(index); // => The index of the lement in matched set

    // To use DOMQuery methods on an element...
    Q(element).addClass('test');
}); // => Iterate over all "p" elements in section.
```
