import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.header__title}>Space Tourism</a>
      <nav className={styles.header__nav}>
        <a href="#" className={styles.header__nav__link}>
          Home
        </a>
        <a href="#" className={styles.header__nav__link}>
          Planets
        </a>
        <a href="#" className={styles.header__nav__link}>
          About
        </a>
      </nav>
    </header>
  );
};

export default Header;
