import styles from './HomeLogIn.module.scss';
import Typography from '@mui/material/Typography';

export const HomeLogIn = () => {

  return (
    <div>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          textAlign: 'center',
          color: 'rgba(7, 7, 243, 0.626)',
          fontWeight: '600',
          margin: '16px 0',
        }}
      >
        Welcome to PhoneBook App
      </Typography>
      <p className={styles.goTo}>go to your<span><a className={styles.span} href="/goit-react-hw-08-phonebook/contacts">Contacts</a></span></p>
    </div>
     
  );
};
