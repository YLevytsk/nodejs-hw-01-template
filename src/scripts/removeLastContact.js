import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();

  if (contacts.length === 0) {
    console.log('⚠️ У списку немає контактів для видалення');
    return;
  }

  const removedContact = contacts[contacts.length - 1]; 
  const updatedContacts = contacts.slice(0, -1); 

  await writeContacts(updatedContacts);

  console.log('🗑️ Видалено останній контакт:', removedContact);
  console.log(`📊 Залишилось контактів: ${updatedContacts.length}`);
};


removeLastContact();