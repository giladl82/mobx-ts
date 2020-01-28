import { observable, computed, action } from 'mobx';

export default class Contact {
  id = Date.now();

  @observable name: string = '';
  @observable phoneNumber: string = '';
  @observable city: string = '';
  @observable street: string = '';
  @observable houseNumber: number = 0;
  @observable isFavorite: boolean = false;

  constructor(name: string, phoneNumber: string, city: string, street: string, houseNumber: number) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.city = city;
    this.street = street;
    this.houseNumber = houseNumber;
  }

  @computed get address(): string {
    return `${this.street} ${this.houseNumber}, ${this.city}`;
  }

  @action toggleFavorite = () => {
    this.isFavorite = !this.isFavorite;
  };
}
