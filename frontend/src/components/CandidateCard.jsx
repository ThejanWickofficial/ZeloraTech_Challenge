import styles from './CandidateCard.module.css';

function CandidateCard({ candidate, onMoveCandidate }) {
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

      <div className={styles.moveAction}>
        <select 
          value={candidate.stage} 
          onChange={(e) => onMoveCandidate(candidate.id, e.target.value)}
          className={styles.moveSelect}
        >
          <option value="Applying Period">Applying Period</option>
          <option value="Screening">Screening</option>
          <option value="Interview">Interview</option>
          <option value="Test">Test</option>
        </select>
      </div>
    </div>
  );
}

export default CandidateCard;