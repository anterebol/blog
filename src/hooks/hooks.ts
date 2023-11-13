import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppDispatch, RootStore } from '../store/configReducer';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
