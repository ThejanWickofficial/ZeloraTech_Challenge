import { useState } from 'react';
import styles from './CandidateCard.module.css';

const getAvatarColor = (name) => {
  const colors = ['#f59e0b', '#8b5cf6', '#10b981', '#ef4444', '#3b82f6'];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

function CandidateCard({ candidate, onMoveCandidate, onDeleteCandidate, onUpdateCandidate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const avatarBg = getAvatarColor(candidate.name);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar} style={{ backgroundColor: avatarBg, color: 'white' }}>
           {candidate.name.charAt(0)}
        </div>
        <div className={styles.info}>
          <h4>{candidate.name}</h4>
          <p>Applied at {candidate.appliedDate}</p>
        </div>
        
        <div className={styles.menuContainer}>
          <button 
            className={styles.menuBtn} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ...
          </button>
          
          {isMenuOpen && (
            <div className={styles.dropdownMenu}>
              <button onClick={() => {
                onUpdateCandidate(candidate.id, candidate.name);
                setIsMenuOpen(false);
              }}>
                ✏️ Edit Name
              </button>
              <button 
                className={styles.deleteBtn}
                onClick={() => {
                  onDeleteCandidate(candidate.id);
                  setIsMenuOpen(false);
                }}
              >
                🗑️ Delete
              </button>
            </div>
          )}
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