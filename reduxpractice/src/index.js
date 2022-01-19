import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0;

const ADD = 'ADD'; // make string into const variable to avoid mistakes!
const MINUS = 'MINUS';

// reducer: function that 'modifies' your data (return the data)
// action: use when to call the reducer, when to modify the data (action should be object!)
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

// store : place to put your data(state)
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

// subscribe: allow us to listen to the changes in the store
countStore.subscribe(onChange);

// dispatch: function that triggers reducer and put the parameter into the action
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
