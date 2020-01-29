import React from 'react';
import TasksStore from './TasksStore';
import ContactsStore from './ContactsStore';

class Store {
  tasks: TasksStore;
  contacts: ContactsStore;

  constructor() {
    this.tasks = new TasksStore();
    this.contacts = new ContactsStore();
  }
}

const Context = React.createContext<Store>({} as Store);

export const createStore = (): Store => new Store();

export const useStore = () => React.useContext(Context);

export const Provider = Context.Provider;

// https://levelup.gitconnected.com/react-hooks-mobx-todolist-c138eb4f3d04
