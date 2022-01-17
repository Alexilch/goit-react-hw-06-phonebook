import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add');
export const deleteContact = createAction('contacts/delete');
export const changeFilter = createAction('contacts/filter');
