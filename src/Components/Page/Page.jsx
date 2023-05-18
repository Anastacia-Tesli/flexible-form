import Form from '../Form/Form';
import styles from './Page.module.scss';

function Page() {
  return (
    <section className={styles.page__background}>
      <Form />
    </section>
  );
}

export default Page;
