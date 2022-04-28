import { uniqueId } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: uniqueId(),
    createAt: 'December 17, 1995 03:24:00',
    name: 'Новость 3',
    content: 'Eget duis at tellus at. Vitae nunc sed velit dignissim sodales ut eu. Mi ipsum faucibus vitae aliquet nec. Senectus et netus et malesuada. Consequat nisl vel pretium lectus quam id leo in. Convallis tellus id interdum velit. Dolor morbi non arcu risus quis varius quam. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Nam at lectus urna duis.',
    approved: false,
  },
  {
    id: uniqueId(),
    createAt: 'June 23, 2005 16:24:00',
    name: 'Новость 2',
    content: 'Molestie a iaculis at erat pellentesque adipiscing. Auctor augue mauris augue neque gravida. Mattis vulputate enim nulla aliquet porttitor lacus luctus. Ut enim blandit volutpat maecenas volutpat blandit aliquam.',
    approved: false,
  },
  {
    id: uniqueId(),
    createAt: 'Septeber 3, 1995 03:24:00',
    name: 'Новость 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sapien faucibus et molestie ac feugiat sed lectus. Eget gravida cum sociis natoque penatibus et magnis.',
    approved: false,
  },
];

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    add: (state, action) => {
      state.unshift(action.payload);
    },
    remove: (state, action) => {
      const { id } = action.payload;
      return state.filter((i) => i.id !== id);
    },
    update: (state, action) => {
      const { id, changes } = action.payload;
      const target = state.find((i) => i.id === id);
      Object.entries(changes).forEach(([changeName, changeValue]) => {
        target[changeName] = changeValue;
      });
    },
  },
});

export const { add, remove, update } = newsSlice.actions;

export default newsSlice.reducer;
