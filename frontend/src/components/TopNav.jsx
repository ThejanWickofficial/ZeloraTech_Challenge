import styles from './TopNav.module.css';

function TopNav({ onAddCandidate }) {
    const handlePlusClick = () => {
    const name = window.prompt("Enter the new candidate's name:");
    if (name && name.trim() !== "") {
      onAddCandidate(name);
    }
  };

  return (
    <div className={styles.container}>
      {/* Top dark Bar */}
      <div className={styles.darkBar}>
        <div className={styles.brand}>
          <span className={styles.logoIcon}>⚄</span> tiimi <strong>Recruitment</strong>
        </div>
        
        <div className={styles.centerPills}>
          <div className={styles.pillActive}>Jobs <span className={styles.badge}>8</span></div>
          <div className={styles.pill}>Candidate <span className={styles.badgeOrange}>551</span></div>
          <div className={styles.pill}>Career Site</div>
        </div>

        <div className={styles.rightActions}>
          <button className={styles.actionBtn} onClick={handlePlusClick}>+</button>
          <button className={styles.actionBtn}>🔍</button>
          <button className={styles.actionBtn}>🔔</button>
          <div className={styles.profilePic}>T</div>
        </div>
      </div>
      
        {/* Title row & Tabs area */}
      <div className={styles.headerArea}>
        <div className={styles.titleRow}>
          <button className={styles.backBtn}>←</button>
          <h2>Research and Development Officer <span className={styles.dropdownArrow}>⌄</span></h2>
          <div className={styles.shareBtn}>⇲ Share & Promote</div>
        </div>

        <div className={styles.tabsRow}>
          <div className={`${styles.tab} ${styles.activeTab}`}>👤 Candidates</div>
          <div className={styles.tab}>💼 Job Info</div>
          <div className={styles.tab}>📅 Calendar</div>
          <div className={styles.tab}>📊 Score Card</div>
          <div className={styles.tab}>📈 Activity</div>
        </div>
      </div>

        {/* Filter bar */}
      <div className={styles.filterBar}>
        <div className={styles.searchBox}>
          🔍 <input type="text" placeholder="Search" />
        </div>
        <select className={styles.filterDropdown}><option>📅 Date Range</option></select>
        <select className={styles.filterDropdown}><option>✔️ Score Range</option></select>
        <select className={styles.filterDropdown}><option>⧨ Advance Filter</option></select>
      </div>
    </div>
  );
}

export default TopNav;