import styles from './CandidateCard.module.css';

function CandidateCard({ candidate }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar}>
           {candidate.name.charAt(0)}
        </div>
        <div className={styles.info}>
          <h4>{candidate.name}</h4>
          <p>Applied at {candidate.appliedDate}</p>
        </div>
      </div>
      
      <div className={styles.footer}>
        <span className={styles.score}>⭐ {candidate.overallScore} Overall</span>
        {candidate.isReferred && <span className={styles.referred}>Referred</span>}
      </div>
    </div>
  );
}

export default CandidateCard;