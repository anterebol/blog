import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_IMG_POPUP } from '../../constants/defaultPopupImg/defaultPopupImg';
/* eslint-disable no-param-reassign */
import { initialDate } from '../../constants/initialDate/initialDate';
import { ROLE_GUEST } from '../../constants/role/role';
import { getRole, setLocalStorage } from '../../utils/localStorage';

const initialState = {
  role: getRole('role') || ROLE_GUEST,
  openAsideEditor: false,
  articleMainInfo: JSON.parse(
    localStorage.getItem('mainAricleInfo') as string
  ) || { title: '', mainImg: '', date: { ...initialDate } },
  openedPreview: false,
  editorPageItems:
    JSON.parse(localStorage.getItem('editorPageItems') as string) || [],
  galleryPopupImg: { ...DEFAULT_IMG_POPUP },
  openedAsideNav: false,
};

const appSlice = createSlice({
  name: 'reducer',
  initialState: { ...initialState },
  reducers: {
    setRole: (state, { payload }: { payload: string }) => {
      setLocalStorage('role', payload);
      state.role = payload;
    },
    openAsideEditor: (state) => {
      state.openAsideEditor = true;
    },
    closeAsideEditor: (state) => {
      state.openAsideEditor = false;
    },
    openPreview: (state) => {
      state.openedPreview = true;
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('open-preview');
    },
    closePreview: (state) => {
      state.openedPreview = false;
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('open-preview');
    },
    toggleGalleryPopup: (
      state,
      { payload }: { payload: { src: string; title: string } }
    ) => {
      state.galleryPopupImg = { ...payload };
    },
    toggleAsideNav: (state) => {
      state.openedAsideNav = !state.openedAsideNav;
    },
    // closeAsideEditor: (state) => {
    //   state.openAsideEditor = false;
    // },
  },
});

export default appSlice.reducer;
export const {
  setRole,
  openAsideEditor,
  closeAsideEditor,
  openPreview,
  closePreview,
  toggleGalleryPopup,
  toggleAsideNav,
} = appSlice.actions;
