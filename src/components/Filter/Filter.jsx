import { useSelector, useDispatch} from 'react-redux';
import { filterSearch  } from 'redux/filter/filterSlice';

import styles from './Filter.module.scss';


export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter.filter);

  const handlerFilterChange = e => {
    dispatch(filterSearch (e.currentTarget.value));
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={handlerFilterChange}
        className={styles.input}
      ></input>
    </>
  )
  
};
