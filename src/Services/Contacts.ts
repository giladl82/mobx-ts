import Contact from '../Models/Contact';

export const fetchContacts = (): Promise<Contact[]> => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => json);
};
