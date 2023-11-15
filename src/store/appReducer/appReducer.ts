import { createSlice } from '@reduxjs/toolkit';
import { ROLE_GUEST } from '../../constants/role/role';
import { getRole, setLocalStorage } from '../../utils/localStorage';

const initialState = {
  role: getRole('role') || ROLE_GUEST,
  openAsideEditor: false,
};

const appSlice = createSlice({
  name: 'reducer',
  initialState: { ...initialState },
  reducers: {
    setRole: (state, { payload }: { payload: string }) => {
      setLocalStorage('role', payload);
      state.role = payload;
    },
    toggleAsideEditor: (state) => {
      state.openAsideEditor = !state.openAsideEditor;
    },
  },
});

export default appSlice.reducer;
export const { setRole, toggleAsideEditor } = appSlice.actions;
