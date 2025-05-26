import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';


export const generateContacts = async (count = 1) => {
  const contacts = await readContacts();

  const newContacts = Array.from({ length: count }, () => createFakeContact());

  const updatedContacts = [...contacts, ...newContacts];

  await writeContacts(updatedContacts);

  console.log(`✅ Додано ${count} контактів. Загальна кількість: ${updatedContacts.length}`);
};


const countFromArg = Number(process.argv[2]) || 1; 
generateContacts(countFromArg);

