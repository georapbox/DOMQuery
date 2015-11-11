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
|[.append()](methods/append.md#append)|Insert HTML content to the end of every matched element.|
|[.attr()](methods/attr.md#attr)|Set one or more attributes for every element in the matched elements set or get the value of an attribute for the first element in the matched elements.|
|[.css()](methods/css.md#css)|Set one or more CSS properties for the set of matched elements.|
|[.each()](methods/each.md#each)|Iterate over a DOMQuery object, executing a function for each matched element.|
|[.hasClass()](methods/hasClass.md#hasclass)|Determine whether any element in the set of matched elements contain the given class.|
|[.html()](methods/html.md#html)|Set the HTML contents of every matched element or get the HTML contents of the first element in the matched elements set.|
|[.next()](methods/next.md#next)|Get the immediately following sibling of each element in the set of matched elements.|
|[.off()](methods/off.md#off)|Remove an event listener previously registered with ```.on()```.|
|[.on()](methods/on.md#on)|Attach an event handler function for one event to the mathed elements.|
|[.parent()](methods/parent.md#parent)|Get the parent of each element in the of matched elements set.|
|[.prev()](methods/prev.md#prev)|Get the immediately preceding sibling of each element in the set of matched elements.|
|[.removeAttr()](methods/removeAttr.md#removeattr)|Remove one or more attributes from each element in the set of matched elements.|
|[.removeClass()](methods/removeClass.md#removeclass)|Removes the specified class(es) from each element in the set of matched elements.|
|[.toggleClass()](methods/toggleClass.md#toggleclass)|Add or remove one or more classes from each matched element, depending on either the class's presence or the value of the optional state argument.|
