// src/utils/readContacts.js

import { readFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('❌ Error reading contacts:', error.message);
    return [];
  }
};
console.log('💾 Запис у файл:', PATH_DB);

