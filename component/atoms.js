import { atom, selector } from 'recoil';

const todoListState = atom({
  key: 'todoListState',
  default: [],
});

const todoFilterState = atom({
  key: 'todoFilterState',
  default: 'all',
});

const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const filter = get(todoFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'done':
        return list.filter((item) => item.checked);
      case 'todo':
        return list.filter((item)=>!item.checked);
      default:
        return list;
    }
  },
});

export {todoListState, todoFilterState, filteredTodoListState};
