# .on()

```js
.off(eventName, listener [, useCapture])
```

Returns: [DOMQuery](../README.md#domquery-q)

**Description:** Remove an event listener previously registered with ```.on()```.

## Arguments

> **eventName** {string}<br>
> A string representing the event type to remove.

> **listener** {function}<br>
> The EventListener function to remove from the event target.

> **[useCapture]** {boolean}<br>
> Default value: ```false``` <br>
> Specifies whether the EventListener to be removed was registered as a capturing listener or not.
> If a listener was registered twice, one with capture and one without, each must be removed separately.
> Removal of a capturing listener does not affect a non-capturing version of the same listener, and vice versa.

## Examples

```js
function myListener(e) {
    alert(e.target);
}

// Example 1
Q('#myButton').on('click', myListener); // Attach event listener with useCapture set to false
Q('#myButton').off('click', myListener); // Remove the event listener attached above

// Example 2
Q('#myButton').on('click', myListener, true); // Attach event listener with useCapture set to true
Q('#myButton').off('click', myListener, true); // Remove the event listener attached above
```
