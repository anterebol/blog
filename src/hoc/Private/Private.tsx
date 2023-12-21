import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { LOGIN } from '../../constants/pathes/common-pathes';

export const Private = (props: { children: JSX.Element }) => {
  const { children } = props;
  const { uid } = useAppSelector((state) => state.apiReducer);

  if (!uid) {
    return <Navigate to={`/${LOGIN}`} />;
  }
  return children;
};
