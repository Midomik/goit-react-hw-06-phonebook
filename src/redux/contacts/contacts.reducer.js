import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [
    { name: 'Vasil', number: '+380123456789', id: nanoid() },
    { name: 'Stepan', number: '+382342348737', id: nanoid() },
    { name: 'Oleh', number: '+382634174942', id: nanoid() },
  ],
  filter: '',
};

const ContactsSlice = createSlice({
  name: 'contacts',

  initialState,

  reducers: {
    addContact(state, { payload }) {
      state.contacts = [...state.contacts, payload];
    },
    removeContact(state, { payload }) {
      state.contacts = state.contacts.filter(item => item.id !== payload);
    },
    filterContactList(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addContact, removeContact, filterContactList } =
  ContactsSlice.actions;

export const contactsReducer = ContactsSlice.reducer;
