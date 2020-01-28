import { observable, action, computed } from 'mobx';
import Task from '../Models/Task';

export default class TasksStore {
  @observable.shallow list: Task[] = [];

  constructor(list: Task[] = [new Task('Task1', 'Task1 description')]) {
    this.setTasks(list);
  }

  @action setTasks = (list: Task[]) => {
    this.list = list;
  };

  @action add = (task: Task) => {
    this.list.push(task);
  };

  @action remove = (task: Task) => {
    this.list = this.list.filter(t => t.id !== task.id);
  };

  @computed get count() {
    return this.list.length;
  }

  @computed get unDone() {
    return this.list.filter(t => !t.isDone);
  }

  @computed get done() {
    return this.list.filter(t => t.isDone);
  }

  @computed get countDone() {
    return this.done.length;
  }

  @computed get countUnDone() {
    return this.unDone.length;
  }
}
