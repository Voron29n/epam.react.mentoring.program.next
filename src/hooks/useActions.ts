import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MoviesActionCreators } from 'store/actionCreators';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(MoviesActionCreators, dispatch);
};
