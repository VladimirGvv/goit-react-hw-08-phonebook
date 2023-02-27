import { useDispatch, useSelector } from 'react-redux';
import { filterSearch } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import styles from './Filter.module.scss';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(filterSearch(event.target.value));
  };

  return (
    <div className={styles.filter}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={styles.input}
      ></input>
    </div>
  );
};
