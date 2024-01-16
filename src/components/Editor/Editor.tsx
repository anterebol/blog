import './editor.css';
import {
  DragDropContext,
  Draggable,
  DraggableLocation,
  Droppable,
} from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactRouterPrompt from 'react-router-prompt';
import plus from '../../assets/editor/plus.svg';
import { ArticleDescriptionForm } from '../Forms/ArticleDescriptionForm/ArticleDescriptionForm';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  openAsideEditor,
  openPreview,
} from '../../store/appReducer/appReducer';
import { EditorElement } from './EditorElement/EditorElement';
import { Button } from '../Buttons/Button';
import previewIcon from '../../assets/editor/preview.svg';
import { ModalPreview } from '../ModalPreview/ModalPreview';
import { getArticle, setPage } from '../../store/apiReducer/api/api';
import { resetChanges, setEditorPage } from '../../store/apiReducer/apiReducer';
import { ExitModal } from './ExitModal/ExitModal';
import { UpButton } from '../Buttons/UpPutton/UpButton';

const PAGE = 'page';

export const Editor = () => {
  const dispatch = useAppDispatch();
  const { page, id } = useParams() as { page: string; id: string };
  const { article, mainInfo, hide } = useAppSelector(
    (state) => state.apiReducer.currentArticle
  );
  const { isChanges } = useAppSelector((state) => state.apiReducer);
  const [currentId] = useState(id === 'new' ? uuidv4() : id);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      e.returnValue = false;
    };
    if (isChanges) {
      window.addEventListener('beforeunload', handler);
      window.addEventListener('unload', handler);
      return () => {
        window.removeEventListener('beforeunload', handler);
        window.removeEventListener('unload', handler);
      };
    }
  }, []);

  useEffect(() => {
    dispatch(getArticle({ page, id }));
  }, [page, id]);

  return (
    <div className="editor-container">
      <ModalPreview />
      <ReactRouterPrompt when={isChanges} beforeConfirm={async () => {}}>
        {({ isActive, onConfirm, onCancel }) =>
          isActive && <ExitModal onCancel={onCancel} onConfirm={onConfirm} />
        }
      </ReactRouterPrompt>
      <div className="editor__header">
        <Button
          cls={['save-button', 'small']}
          title="Save page"
          text="Save"
          func={() => {
            dispatch(
              setPage({
                page,
                id: currentId,
                data: { mainInfo, article, hide },
              })
            );
          }}
        />
        <Button
          cls={['reset-button', 'small']}
          title="Reset page"
          text="Reset"
          func={() => {
            dispatch(resetChanges());
          }}
        />
        <Button
          cls={['add-element']}
          title="Add element"
          src={plus}
          func={() => {
            dispatch(openAsideEditor());
          }}
        />
        <Button
          cls={['view-button']}
          title="Preview"
          src={previewIcon}
          func={() => {
            dispatch(openPreview());
          }}
        />
      </div>
      <div className="editor__main">
        <ArticleDescriptionForm />
        <DragDropContext
          onDragEnd={(result: any) => {
            const { source } = result;
            const destination = result.destination as DraggableLocation;
            const currentList = [...article];
            switch (result.type) {
              case PAGE:
                const currentItemIndex = source?.index;
                const dropedIndex = destination.index;
                const currentItem = currentList.splice(currentItemIndex, 1)[0];
                currentList.splice(dropedIndex, 0, currentItem);
                dispatch(setEditorPage(currentList));
                break;
              default:
                break;
            }
          }}
        >
          <div>
            <Droppable droppableId={`${Math.random() * 100}s`} type="page">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {article?.length === 0
                    ? null
                    : article?.map((item, index: number): ReactElement => {
                        const id = index + item.tag;
                        const { tag, ul } = item;
                        return (
                          <Draggable key={id} draggableId={id} index={index}>
                            {(provided) => (
                              <div
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                              >
                                <EditorElement tag={tag} id={id} list={ul} />
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
        <button
          type="button"
          onClick={() => {
            dispatch(openAsideEditor());
          }}
          className="add-element__button"
        >
          <div>
            <img src={plus} alt="plus" />
          </div>
          <p>Add element</p>
        </button>
      </div>
      <UpButton />
    </div>
  );
};
