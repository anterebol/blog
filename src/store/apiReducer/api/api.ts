import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../../firebase-config';
import { ArticleType } from '../../../types/articleType';
import { BlogItemType } from '../../../types/blogItemType';
import { BlogType } from '../apiReducer';
import { GALLERY } from '../../../constants/pathes/navPathes';

export const getArticles = createAsyncThunk(
  'getArticles',
  async (action: string) => {
    const articlesColletctionRef = collection(db, action);
    const data = await getDocs(articlesColletctionRef);
    const res = data.docs
      .map(
        (doc) =>
          ({ ...doc.data(), id: doc.id }) as {
            id: string;
            mainInfo: string;
            article: string;
          }
      )
      .map(({ id, mainInfo, article }) => ({
        id,
        mainInfo: JSON.parse(mainInfo) as Array<ArticleType>,
        article: JSON.parse(article) as Array<BlogItemType>,
      }));
    return res;
  }
);
export const getArticle = createAsyncThunk(
  'getArticle',
  async ({ page, id }: { page: string; id: string }) => {
    const docRef = doc(db, page, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { mainInfo, article } = docSnap.data();
      const res = {
        id,
        mainInfo: JSON.parse(mainInfo) as Array<ArticleType>,
        article: JSON.parse(article) as Array<BlogItemType>,
      };
      return res;
    }

    throw new Error('no such date in database');
  }
);
export const setPage = createAsyncThunk(
  'setPage',
  async ({ page, id, data }: { page: string; id: string; data: BlogType }) => {
    const description = data.article
      .filter((item) => {
        if (item.tag === 'p') {
          return true;
        }
        return false;
      })
      .map((item) => item.text)
      .slice(0, 3)
      .join(' ');
    const mainInfo = { ...data.mainInfo, description };
    await setDoc(doc(db, page, id), {
      mainInfo: JSON.stringify(mainInfo),
      article: JSON.stringify(data.article),
    });
    return { mainInfo, article: data.article };
  }
);

export const setImage = createAsyncThunk(
  'setImage',
  async ({ id, src, title }: { id?: string; src: string; title: string }) => {
    const currentId = id || uuidv4();
    await setDoc(doc(db, 'gallery', currentId), {
      src,
      title,
    });
    return { id: currentId, src, title };
  }
);
export const getGallery = createAsyncThunk('getGallery', async () => {
  const articlesColletctionRef = collection(db, GALLERY);
  const data = await getDocs(articlesColletctionRef);
  const res = data.docs.map(
    (doc) =>
      ({ ...doc.data(), id: doc.id }) as {
        id: string;
        src: string;
        title: string;
      }
  );
  return res;
  // throw new Error('no such date in database');
});
export const removeItem = createAsyncThunk(
  'deleteItem',
  async ({ page, id }: { page: string; id: string }) => {
    await deleteDoc(doc(db, page, id));
    return { page, id };
  }
);
