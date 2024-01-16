import './editorElement.css';
import { useAppDispatch } from '../../../hooks/hooks';
import { Button } from '../../Buttons/Button';
import { OneImage } from '../Images/OneImage/OneImage';
import { SeveralImages } from '../Images/SeveralImages/SeveralImages';
import { Line } from '../Line/Line';
import { List } from '../List/List';
import { TextArea } from '../TextArea/TextArea';
import { Title } from '../Title/Title';
import plus from '../../../assets/editor/plus-white.svg';
import deleteIcon from '../../../assets/editor/headerEditorElement/delete.svg';
import { HtmlBlock } from '../HtmlBlock/HtmlBlock';
import {
  setEditorList,
  removeEditorItem,
} from '../../../store/apiReducer/apiReducer';

const editorElements = (tag: string, id: string) => {
  switch (true) {
    case tag === 'p':
      return <TextArea id={id} />;
    case tag === 'html':
      return <HtmlBlock id={id} />;
    case tag.includes('h'):
      return <Title id={id} tag={tag} />;
    case tag === 'line':
      return <Line />;
    case tag === 'img':
      return <OneImage id={id} />;
    case tag === 'images':
      return <SeveralImages id={id} type="editor" />;
    case tag === 'slider':
      return <SeveralImages id={id} type="editor" />;
    case tag === 'ul':
      return <List id={id} />;
    default:
      return null;
  }
};
export const EditorElement = ({
  tag,
  id,
  list,
}: {
  tag: string;
  id: string;
  list?: Array<string> | Array<{ src: string; rotation: string }>;
}) => {
  const dispatch = useAppDispatch();
  const index = parseInt(id, 10);

  return (
    <div className="editor__element">
      <div className="editor__element-header">
        <p className="editor__element-tag">Current item tag: {tag}</p>
        <div className="editor__element-header_buttons">
          {list ? (
            <Button
              cls={['add-list-item']}
              title="Add"
              func={() => {
                const currentList = [...list];
                if (tag === 'ul') {
                  currentList.push('Text example...');
                } else if (tag === 'slider') {
                  currentList.push({ src: '', rotation: '' });
                } else {
                  currentList.push('');
                }

                dispatch(setEditorList({ index, list: [...currentList] }));
              }}
              src={plus}
            />
          ) : null}
          <Button
            cls={['delete-button']}
            title="Delete"
            func={() => {
              dispatch(removeEditorItem({ id }));
            }}
            src={deleteIcon}
          />
        </div>
      </div>
      {editorElements(tag, id)}
    </div>
  );
};
