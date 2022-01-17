// import { nanoid } from 'nanoid';
// import types from './types';
import { createAction } from '@reduxjs/toolkit';

// const addContact = (name, number) => ({
//     type:types.ADD,
//     payload:{
//         id: nanoid(5),
//         name,
//         number,
//       }
// });

export const addContact = createAction('contacts/add');
export const deleteContact = createAction('contacts/delete');
export const changeFilter = createAction('contacts/filter');
