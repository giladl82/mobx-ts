import React from 'react';
import TasksStore from './TaskStore';

class Store {
  tasks: TasksStore;

  constructor() {
    this.tasks = new TasksStore();
  }
}

const Context = React.createContext<Store>({} as Store);

export const createStore = (): Store => new Store();

export const useStore = () => React.useContext(Context);

export const Provider = Context.Provider;

// https://levelup.gitconnected.com/react-hooks-mobx-todolist-c138eb4f3d04
