const addItemToCart = (event, itemsInState1, itemsInState2, setRelevantState) => {
  const foundItem = itemsInState1 && itemsInState1.find(
    (itemInTheList) => itemInTheList.name === event.target.value
  );
  const updatedCartItem = itemsInState2 && itemsInState2.find((el) => event.target.value === el.name);

  if (!foundItem) {
    setRelevantState([...itemsInState1, { ...updatedCartItem, quantity: 1 }]);
  } else {
    foundItem.quantity++;
    setRelevantState([...itemsInState1]);
  }
};

const minusButton = (item, setRelevantState, relevantState) => {
  if (item.quantity === 1) {
    const updatedItems = relevantState.filter((e) => e !== item);
    setRelevantState(updatedItems);
  } else {
    item.quantity--;
    setRelevantState([...relevantState]);
  }
};

const plusButton = (item,  setRelevantState, relevantState) => {
  item.quantity++;
  setRelevantState([...relevantState]);
};

const calculator = (itemsInState1, relevantState, setRelevantState) => {
  const sum = itemsInState1.reduce(
    (state, currentValue) => state + currentValue.price * currentValue.quantity,
    0
  );
  setRelevantState(sum);
};

export { addItemToCart, calculator, minusButton, plusButton };
