import styles from './ContactList.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className={styles.contact}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ol className={styles.contacts} key={id}>
            <li key={id} className={styles.contacts_item}>
              {name}: {number}
            <button
              type="button"
              className={styles.btn}
              onClick={() => 
                dispatch(deleteContact(id))
              }
            >
              Delete
              </button>
            </li>
          </ol>
        );
      })}
    </div>
  );
};
