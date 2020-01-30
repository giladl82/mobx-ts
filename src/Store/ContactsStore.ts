import { observable, action, computed, runInAction } from 'mobx';
import { fetchContacts } from '../Services/Contacts';
import Contact from '../Models/Contact';

export default class ContactsStore {
  @observable list: Contact[] = [];

  loadContacts = async () => {
    const contacts: Contact[] = await fetchContacts();

    runInAction(() => {
      this.list = contacts.map(c => new Contact(c));
    });
  };
}
