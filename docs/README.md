# DOMQuery API

## DOMQuery (Q)
A DOMQuery object contains a collection of Document Object Model (DOM) elements that have been created from an HTML string or selected from a document.

Most frequently, you will use the ```DOMQuery()``` function to create a DOMQuery object. DOMQuery() can also be accessed by its alias of ```Q()```. Many DOMQuery methods return the DOMQuery object itself, so that method calls can be chained:

In API calls that return DOMQuery, the value returned will be the original DOMQuery object unless otherwise documented by that API. Some API methods modify their incoming set and thus return a new DOMQuery object.
In the example below the ```css``` method returns the original DOMQuery object so we can add class "highlight" to the selected elements.

```js
Q('.error').css({color: 'red'}).addClass('highlight');
```

A DOMQuery object may be empty if a selector doesn't select any elements. Any further methods called on that DOMQuery object simply have no effect since they have no elements to act upon. In the example below we create an empty DOMQuery object and call a couple of methods on that object without any errors occuring.

```js
Q().parent().css({color: 'blue'}).toggleClass('foo').attr('data-test', 'test');
```

## API methods

| Method | Description |
|--------|-------------|
|[.addClass()](methods/addClass.md#addclass)|Adds the specified class(es) to each element in the set of matched elements.|
|[.hasClass()](methods/hasClass.md#hasclass)|Determine whether any element in the set of matched elements contain the given class.|
|[.removeClass()](methods/removeClass.md#removeclass)|Removes the specified class(es) from each element in the set of matched elements.|
|[.toggleClass()](methods/toggleClass.md#toggleclass)|Add or remove one or more classes from each matched element, depending on either the class's presence or the value of the optional state argument.|
