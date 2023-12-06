import { createSlice } from '@reduxjs/toolkit';
import { initialDate } from '../../constants/initialDate/initialDate';
/* eslint-disable no-param-reassign */
import { getArticle, getArticles } from './api/api';
import { BlogItemType } from '../../types/blogItemType';

const defaultMainInfo = {
  title: '',
  img: '',
  description: '',
  date: { ...initialDate },
};

export type BlogType = {
  id?: string;
  mainInfo: {
    title: string;
    img: string;
    description: string;
    date: { day: string; month: string; year: string };
  };
  article: Array<BlogItemType>;
};
export type BlogListType = Array<BlogType>;
const apiState = {
  load: false,
  articles: [] as BlogListType,
  currentArticle: {
    mainInfo: { ...defaultMainInfo },
    article: [] as Array<BlogItemType>,
  } as BlogType,
  resetArticle: {
    mainIfo: { date: { ...initialDate } },
    article: [] as Array<BlogItemType>,
  } as unknown as BlogType,
};

export const apiSlice = createSlice({
  name: 'api',
  initialState: { ...apiState },
  reducers: {
    addDefaultElement: (state, { payload }) => {
      let currentArticle = [] as Array<BlogItemType>;
      if (state.currentArticle.article) {
        currentArticle = [...state.currentArticle.article];
      }
      currentArticle.push(payload);
      state.currentArticle.article = [...currentArticle];
    },
    setEditorPage: (state, { payload }) => {
      state.currentArticle.article = [...payload];
    },
    setArticleDate: (state, { payload }) => {
      state.currentArticle.mainInfo.date = { ...payload };
    },
    setArticleTitle: (state, { payload }) => {
      state.currentArticle.mainInfo.title = payload;
    },
    setArticleImg: (state, { payload }) => {
      state.currentArticle.mainInfo.img = payload;
    },
    setEditorText: (state, { payload }) => {
      const { id, text } = payload;
      const currentEditor = [...state.currentArticle.article];
      currentEditor[id].text = text;
      state.currentArticle.article = [...currentEditor];
    },
    setEditorImage: (state, { payload }) => {
      const { id, src, rotation } = payload;
      const currentEditor = [...state.currentArticle.article];
      currentEditor[id].src = src;
      currentEditor[id].rotation = rotation;
      state.currentArticle.article = [...currentEditor];
    },
    setImageRotation: (state, { payload }) => {
      const { id, rotation } = payload;
      state.currentArticle.article[id].rotation = rotation;
    },
    setEditorList: (state, { payload }) => {
      const { index, list } = payload;
      const currentEditor = [...state.currentArticle.article];
      currentEditor[index].ul = [...list];
      state.currentArticle.article = [...currentEditor];
    },
    removeEditorItem: (state, { payload }) => {
      const { id } = payload;
      const index = parseInt(id, 10);
      const currentPage = [...state.currentArticle.article];
      currentPage.splice(index, 1);
      state.currentArticle.article = [...currentPage];
    },
    resetChanges: (state) => {
      state.currentArticle = { ...state.resetArticle };
    },
  },
  extraReducers: {
    [getArticles.fulfilled.type]: (
      state,
      action: { payload: BlogListType }
    ) => {
      state.articles = [...action.payload];
    },
    [getArticle.fulfilled.type]: (state, action) => {
      state.currentArticle = { ...action.payload };
      state.resetArticle = { ...action.payload };
    },
    [getArticle.rejected.type]: (state) => {
      state.currentArticle = { mainInfo: { ...defaultMainInfo }, article: [] };
    },
  },
});
export default apiSlice.reducer;
export const {
  setEditorPage,
  setEditorText,
  setEditorImage,
  setEditorList,
  removeEditorItem,
  resetChanges,
  setArticleDate,
  setArticleTitle,
  setArticleImg,
  setImageRotation,
  addDefaultElement,
} = apiSlice.actions;
