import './asidePopupEditor.css';

export const AsidePopupEditor = () => {
  const openBar = true;
  return (
    <div className="popup">
      <div className="popup__cover" />
      <div className="popup__body">
        <button
          type="button"
          className={['side-bar__button', openBar ? 'opened' : ''].join(' ')}
          // onClick={() => setOpenBar(!openBar)}
          title="Open"
        >
          <div className="side-bar__button-line line-1" />
          <div className="side-bar__button-line line-2" />
          <div className="side-bar__button-line line-3" />
        </button>
      </div>
    </div>
  );
};
