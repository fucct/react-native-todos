import {atom} from 'recoil';

const todoListState = atom({
  key: 'todoListState',
  default: [],
});

const todoFilterState = atom({
  key: 'todoFilterState',
  default: 'all',
})

export {todoListState, todoFilterState};
