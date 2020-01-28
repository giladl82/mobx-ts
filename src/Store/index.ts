import React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import TasksStore from './TaskStore';

const Context = React.createContext({
  tasks: new TasksStore()
});

export const useStores = () => React.useContext(Context);

export const Provider = Context.Provider;


// https://levelup.gitconnected.com/react-hooks-mobx-todolist-c138eb4f3d04