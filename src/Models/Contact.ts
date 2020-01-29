import { observable, action, computed } from 'mobx';

export class Geo {
  lat: number = 0;
  lng: number = 0;
}

export class Address {
  street: string = '';
  suite: string = '';
  city: string = '';
  zipcode: string = '';
  geo: Geo = new Geo();
}

export default class Contact {
  id = Date.now();

  @observable name: string = '';
  @observable phone: string = '';
  @observable address: Address = new Address();
  @observable isFavorite: boolean = false;

  @action toggleFavorite = () => {
    this.isFavorite = !this.isFavorite;
  };

  @computed get fullAddress() {
    return `${this.address.street} ${this.address.suite}, ${this.address.city}`;
  }
}
