import { writeFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (contacts) => {
  try {
    const stringifiedData = JSON.stringify(contacts, null, 2);
    console.log('ЗАПИСАНО:', stringifiedData); 
    console.log('У файл:', PATH_DB);           
    await writeFile(PATH_DB, stringifiedData, 'utf-8');
    console.log('✅ Дані записано у файл');
  } catch (error) {
    console.error('❌ Помилка запису:', error.message);
  }
};

