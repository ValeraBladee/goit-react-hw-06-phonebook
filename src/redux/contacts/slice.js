import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      const updateContacts = state.contacts.filter(
        ({ id }) => id !== action.payload
      );
      state.contacts = updateContacts;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};
export const persistedReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
