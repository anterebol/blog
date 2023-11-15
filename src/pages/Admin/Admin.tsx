import './admin.css';
import { useParams } from 'react-router-dom';
import { SideBar } from '../../components/SideBar/SideBar';
import { Editor } from '../../components/Editor/Editor';
import { ArticleList } from '../../components/ArticleList/ArticleList';
import { AsidePopupEditor } from '../../components/AsidePopupEditor/AsidePopupEditor';

export function Admin() {
  const { page, id } = useParams();

  return (
    <div className="admin-container">
      <SideBar />
      <AsidePopupEditor />
      <div className="aside-invisible-box" />
      <div className="admin-container__main">
        {page && id ? <Editor /> : <ArticleList />}
      </div>
    </div>
  );
}
