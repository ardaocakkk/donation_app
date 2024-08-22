import {createSlice} from '@reduxjs/toolkit';
import {create} from 'react-test-renderer';

const initialState = {
  categories: [
    {
      categoryId: 1,
      name: 'Highlight',
    },
    {
      categoryId: 2,
      name: 'Environment',
    },
    {
      categoryId: 3,
      name: 'Education',
    },
    {
      categoryId: 4,
      name: 'Clothing and Accessories',
    },
    {
      categoryId: 5,
      name: 'Household goods',
    },
    {
      categoryId: 6,
      name: 'Electronics',
    },
    {
      categoryId: 7,
      name: 'Toys and Games',
    },
    {
      categoryId: 8,
      name: 'Sports Equipment',
    },
    {
      categoryId: 9,
      name: 'Books and Media',
    },
    {
      categoryId: 10,
      name: 'Health and Beauty Products',
    },
    {
      categoryId: 11,
      name: 'Office supplies',
    },
    {
      categoryId: 12,
      name: 'Tools and Hardware',
    },
    {
      categoryId: 13,
      name: 'Art and Craft Supplies',
    },
  ],
  selectedCategoryId: 1,
};

export const Categories = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    setSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
    resetToInitialState: (state, action) => {
      return initialState;
    },
  },
});


export const {setSelectedCategoryId, resetToInitialState} = Categories.actions;
export default Categories;