import { observable, action } from 'mobx';

export default class Task {
  readonly id = Date.now();

  @observable title: string = '';
  @observable description: string = '';
  @observable isDone: boolean = false;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }

  @action toggleStatus = () => {
    this.isDone = !this.isDone;
  };
}
