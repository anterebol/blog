import { createSlice } from '@reduxjs/toolkit';
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
    },
    closePreview: (state) => {
      state.openedPreview = false;
    },
    addDefaultElement: (state, { payload }) => {
      state.editorPageItems.push(payload);
      state.openAsideEditor = false;
    },
    setArticleDate: (state, { payload }) => {
      state.articleMainInfo.date = { ...payload };
    },
    setArticleTitle: (state, { payload }) => {
      state.articleMainInfo.title = payload;
    },
    setArticleImg: (state, { payload }) => {
      state.articleMainInfo.mainImg = payload;
    },
    setEditorText: (state, { payload }) => {
      const { id, text } = payload;
      const currentEditor = [...state.editorPageItems];
      currentEditor[id].text = text;
      state.editorPageItems = [...currentEditor];
    },
    setEditorImage: (state, { payload }) => {
      const { id, src, rotation } = payload;
      const currentEditor = [...state.editorPageItems];
      currentEditor[id].src = src;
      currentEditor[id].rotation = rotation;
      state.editorPageItems = [...currentEditor];
    },
    setImageRotation: (state, { payload }) => {
      const { id, rotation } = payload;
      state.editorPageItems[id].rotation = rotation;
    },
    setEditorList: (state, { payload }) => {
      const { index, list } = payload;
      const currentEditor = [...state.editorPageItems];
      currentEditor[index].ul = [...list];
      state.editorPageItems = [...currentEditor];
    },
    removeEditorItem: (state, { payload }) => {
      const { id } = payload;
      const index = parseInt(id, 10);
      const currentPage = [...state.editorPageItems];
      currentPage.splice(index, 1);
      state.editorPageItems = [...currentPage];
    },
    savePage: (state) => {
      localStorage.setItem(
        'editorPageItems',
        JSON.stringify(state.editorPageItems)
      );
      localStorage.setItem(
        'mainAricleInfo',
        JSON.stringify(state.articleMainInfo)
      );
    },
    resetChanges: (state) => {
      state.editorPageItems =
        JSON.parse(localStorage.getItem('editorPageItems') as string) || [];
      state.articleMainInfo =
        JSON.parse(localStorage.getItem('mainAricleInfo') as string) || [];
    },
  },
});

export default appSlice.reducer;
export const {
  setRole,
  openAsideEditor,
  closeAsideEditor,
  addDefaultElement,
  setEditorText,
  setEditorImage,
  setEditorList,
  removeEditorItem,
  savePage,
  resetChanges,
  openPreview,
  closePreview,
  setArticleDate,
  setArticleTitle,
  setArticleImg,
  setImageRotation,
} = appSlice.actions;
