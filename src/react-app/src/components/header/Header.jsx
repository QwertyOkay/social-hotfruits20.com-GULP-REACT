import { NavLink } from 'react-router-dom';

import Container from 'components/container/Container';
import styles from './Header.module.scss';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <Container>
          <nav className={styles.navBlock}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Contact us
            </NavLink>
          </nav>
        </Container>
      </header>
    </>
  );
}

export default Header;
