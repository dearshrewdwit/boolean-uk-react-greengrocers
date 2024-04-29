Component Tree
root(App.jsx) - Store - StoreItem - Cart - CartItem

Store imports the data on store-items.js and displays a list using StoreItem component.
Receives a list parameter with the actual store data and a "onAddToCart" handler

StoreItem has a button that upon click calls a handler to add a item to the cart. the handler should receive the element as a parameter
Receives the handler callback and the item data as props

Cart component is similar to the store, except it expects an additional "onRemoveItem" function to remove elements
Has a local variable to manage the total price that derives from the list prop (doesn't require the use of useState since the whole component gets re-rendered when the list prop changes)

CartItem is similar to StoreItem, but then again expects the extra "onRemove" handler

Finally on the App component, a reducer handles the cart state, accepting either an ADD or DEL action, with an item to update the cart.
