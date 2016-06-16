# .on()

```js
.on(eventName, listener [, useCapture])
```

Returns: [DOMQuery](../README.md#domquery-q)

**Description:** Attach an event handler function for one event to the mathed elements.

## Arguments

> **eventName** {string}<br>
> A string representing the event type to listen for.

> **listener** {function}<br>
> A function to execute when the event is triggered.

> **[useCapture]** {boolean}<br>
> Default value: ```false``` <br>
> If true, useCapture indicates that the user wishes to initiate capture. After initiating capture, all events of the specified type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree. Events which are bubbling upward through the tree will not trigger a listener designated to use capture. Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. The event propagation mode determines in which order the elements receive the event.

**NOTE:** ```.on()``` is just a wrapper of the native ```.addEventListener()``` and as such, to effectively remove an event listener the last one must always be a named function. In the statement below, the event listener cannot be removed.

```js
// This listener cannot be removed later on
Q('#myButton').on('click', function (e) {
    // Do your magic in here...
});
```

## Examples

```js
function myListener(e) {
    alert(e.target);
}

Q('#myButton').on('click', myListener); // Without useCapture
Q('#myButton').on('click', myListener, true); // With useCapture
```
