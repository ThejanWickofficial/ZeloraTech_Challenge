import styles from './KanbanBoard.module.css';
import CandidateCard from './CandidateCard';

const STAGES = ["Applying Period", "Screening", "Interview", "Test"];

function KanbanBoard({ candidates, onMoveCandidate }) {
  return (
    <div className={styles.boardContainer}>
      {STAGES.map((stage) => {
        const columnCandidates = candidates.filter(c => c.stage === stage);
        
        return (
          <div key={stage} className={styles.column}>
            <div className={styles.columnHeader}>
              <h3>{stage}</h3>
              <span className={styles.countBadge}>{columnCandidates.length}</span>
            </div>
            
            <div className={styles.cardList}>
              {columnCandidates.map(candidate => (
                <CandidateCard 
                  key={candidate.id} 
                  candidate={candidate} 
                  onMoveCandidate={onMoveCandidate} 
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default KanbanBoard;