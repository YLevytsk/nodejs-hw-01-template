import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const contacts = await readContacts();

  console.log('📋 Усі контакти:');
  console.table(contacts);
};

getAllContacts();
