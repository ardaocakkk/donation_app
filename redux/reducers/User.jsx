import {createSlice} from '@reduxjs/toolkit';
import {logger} from 'redux-logger/src';

const initialState = {
  firstName: 'Arda',
  lastName: 'Ocak',
  userId: 1,
  profileImg:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

export const User = createSlice({
  name: 'User',
  initialState: initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    resetToInitialState: (state, action) => {
      return initialState;
    },
  },
});

export const {setFirstName, resetToInitialState} = User.actions;
export default User;
