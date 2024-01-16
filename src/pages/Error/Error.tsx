import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Buttons/Button';
import attention from '../../assets/error.png';
import './error.css';

export function Error() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-page__body">
        <div className="error-page__img">
          <img src={attention} alt="Attention" />
        </div>
        <p className="error-page__information">Something went wrong...</p>
        <Button
          cls={['error-page__button']}
          func={() => {
            navigate(-1);
          }}
          text="Go Back"
          title="back"
        />
      </div>
    </div>
  );
}
