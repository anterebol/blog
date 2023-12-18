/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit';
import { initialDate } from '../../constants/initialDate/initialDate';
/* eslint-disable no-param-reassign */
import {
  getArticle,
  getArticles,
  getGallery,
  removeItem,
  setImage,
  setPage,
} from './api/api';
import { BlogItemType } from '../../types/blogItemType';
import { GALLERY } from '../../constants/pathes/navPathes';

const sortImagesByTitle = (
  images: Array<{ id: string; src: string; title: string }>
) => {
  images.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
};

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
  gallery: [] as Array<{ id: string; src: string; title: string }>,
  articles: [] as BlogListType,
  currentArticle: {
    mainInfo: { ...defaultMainInfo },
    article: [] as Array<BlogItemType>,
  } as BlogType,
  resetArticle: {
    mainIfo: { date: { ...initialDate } },
    article: [] as Array<BlogItemType>,
  } as unknown as BlogType,
  isChanges: false,
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
      state.isChanges = true;
    },
    setEditorPage: (state, { payload }) => {
      state.currentArticle.article = [...payload];
      state.isChanges = true;
    },
    setArticleDate: (state, { payload }) => {
      state.currentArticle.mainInfo.date = { ...payload };
      state.isChanges = true;
    },
    setArticleTitle: (state, { payload }) => {
      state.currentArticle.mainInfo.title = payload;
      state.isChanges = true;
    },
    setArticleImg: (state, { payload }) => {
      state.currentArticle.mainInfo.img = payload;
      state.isChanges = true;
    },
    setEditorText: (state, { payload }) => {
      const { id, text } = payload;
      const currentEditor = [...state.currentArticle.article];
      currentEditor[id].text = text;
      state.currentArticle.article = [...currentEditor];
      state.isChanges = true;
    },
    setEditorImage: (state, { payload }) => {
      const { id, src, rotation } = payload;
      const currentEditor = [...state.currentArticle.article];
      currentEditor[id].src = src;
      currentEditor[id].rotation = rotation;
      state.currentArticle.article = [...currentEditor];
      state.isChanges = true;
    },
    setImageRotation: (state, { payload }) => {
      const { id, rotation } = payload;
      state.currentArticle.article[id].rotation = rotation;
      state.isChanges = true;
    },
    setEditorList: (state, { payload }) => {
      const { index, list } = payload;
      const currentEditor = [...state.currentArticle.article];
      currentEditor[index].ul = [...list];
      state.currentArticle.article = [...currentEditor];
      state.isChanges = true;
    },
    removeEditorItem: (state, { payload }) => {
      const { id } = payload;
      const index = parseInt(id, 10);
      const currentPage = [...state.currentArticle.article];
      currentPage.splice(index, 1);
      state.currentArticle.article = [...currentPage];
      state.isChanges = true;
    },
    resetChanges: (state) => {
      state.currentArticle = { ...state.resetArticle };
      state.isChanges = false;
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
    [getGallery.fulfilled.type]: (
      state,
      action: { payload: Array<{ id: string; src: string; title: string }> }
    ) => {
      sortImagesByTitle(action.payload);
      state.gallery = [...action.payload];
    },
    [setPage.fulfilled.type]: (state, action) => {
      state.currentArticle = { ...action.payload };
      state.resetArticle = { ...action.payload };
      state.isChanges = false;
    },
    [setImage.fulfilled.type]: (state, { payload }) => {
      const { id, ...data } = payload;
      const currentGallery = [...state.gallery];
      const index = currentGallery.findIndex((image) => image.id === id);
      if (index >= 0) {
        currentGallery[index] = { id, ...data };
      } else {
        currentGallery.unshift({ id, ...data });
      }
      sortImagesByTitle(currentGallery);
      state.gallery = [...currentGallery];
    },
    [removeItem.fulfilled.type]: (state, { payload }) => {
      if (payload.page === GALLERY) {
        const currentGallery = [...state.gallery].filter(
          (galleryItem) => galleryItem.id !== payload.id
        );
        state.gallery = [...currentGallery];
      } else {
        const currentArticles = [...state.articles].filter(
          (article) => article.id !== payload.id
        );
        state.articles = [...currentArticles];
      }
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
