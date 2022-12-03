/* eslint-disable no-unused-vars */
const STORAGE_KEY = 'TRASHURE_APPS';

const LocalStorageSource = {
  setUserToLocalStorage(user) {
    const parsed = JSON.stringify(user);
    return localStorage.setItem('STORAGE_KEY', parsed);
  },

  getUserFromLocalStorage() {
    return JSON.parse(localStorage.getItem('STORAGE_KEY'));
  },

  deleteUserFromLocalStorage() {
    return localStorage.removeItem('STORAGE_KEY');
  },
};

export default LocalStorageSource;
