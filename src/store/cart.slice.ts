import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DataType } from '../data';

type StateType = {
  data: DataType[];
  total: number;
};

const initialState: StateType = {
  data: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    changeAmount: (
      state,
      action: PayloadAction<{ id: number; updateValue: number }>,
    ) => {
      const data = state.data.find((item) => item.id === action.payload.id);

      if (data) {
        data.amount += action.payload.updateValue;
        state.total += action.payload.updateValue;
      }
    },

    initState: (state, action: PayloadAction<DataType[]>) => {
      state.data = action.payload;
      state.total = action.payload.reduce((acc, item) => acc + item.amount, 0);
    },
  },
});

export const { changeAmount, initState } = cartSlice.actions;
export default cartSlice.reducer;
