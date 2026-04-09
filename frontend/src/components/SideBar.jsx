import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoBadge}>
        FIK
      </div>
      
      <div className={styles.iconList}>
        <div className={styles.iconItem}>🏠</div>
        <div className={styles.iconItem}>📅</div>
        <div className={`${styles.iconItem} ${styles.active}`}>👤</div>
        <div className={styles.iconItem}>💼</div>
        <div className={styles.iconItem}>⚙️</div>
      </div>

      <div className={styles.bottomIcon}>
        ❓
      </div>
    </div>
  );
}

export default Sidebar;