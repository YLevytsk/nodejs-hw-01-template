import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();

  const total = contacts.length;

  console.log(`🔢 Кількість контактів: ${total}`);
  return total;
};


countContacts();

