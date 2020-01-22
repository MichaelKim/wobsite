import { createStore as reduxCreateStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === `PULL_CHAIN`) {
    const newChain = (state.chain + 1) % 6;

    if (newChain === 0) document.body.className = '';
    else document.body.className = 'dark';

    return Object.assign({}, state, {
      chain: newChain
    });
  }
  return state;
};

const initialState = { chain: 0 };

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
