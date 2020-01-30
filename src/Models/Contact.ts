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

  constructor(source: Address | null) {
    if (source !== null) {
      this.city = source.city;
      this.street = source.street;
      this.suite = source.suite;
      this.zipcode = source.zipcode;
      this.geo = { ...source.geo };
    }
  }
}

export default class Contact {
  suffix:number = Math.floor((Math.random() * 100) + 1)
  id = Date.now() * this.suffix;

  @observable name: string = '';
  @observable phone: string = '';
  @observable address: Address = new Address(null);
  @observable isFavorite: boolean = false;

  constructor(source: Contact | null) {
    if (source !== null) {
      this.name = source.name;
      this.phone = source.phone;
      this.isFavorite = source.isFavorite;
      this.address = new Address(source.address);
    }
  }

  @action toggleFavorite = () => {
    this.isFavorite = !this.isFavorite;
  };

  @computed get fullAddress() {
    return `${this.address.street} ${this.address.suite}, ${this.address.city}`;
  }

  @computed get avatar() {
    return `https://randomuser.me/api/portraits/thumb/women/${this.suffix}.jpg`;
  }
}
